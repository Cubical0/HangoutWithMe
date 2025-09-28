import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BlogBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function BlogBreadcrumb({ items }: BlogBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.url} className="flex items-center">
          {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
          {index === items.length - 1 ? (
            <span className="text-gray-300 truncate max-w-xs" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link
              href={item.url}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}