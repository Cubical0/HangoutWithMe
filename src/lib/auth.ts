import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

export interface AdminPayload {
  id: string;
  email: string;
  role: 'super_admin' | 'admin';
}

export function verifyToken(token: string): AdminPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  // Try to get token from Authorization header
  const authHeader = request.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }

  // Try to get token from cookie
  const tokenCookie = request.cookies.get('admin-token');
  if (tokenCookie) {
    return tokenCookie.value;
  }

  return null;
}

export function requireAuth(request: NextRequest): AdminPayload | null {
  const token = getTokenFromRequest(request);
  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export function requireSuperAdmin(request: NextRequest): AdminPayload | null {
  const admin = requireAuth(request);
  if (!admin || admin.role !== 'super_admin') {
    return null;
  }

  return admin;
}