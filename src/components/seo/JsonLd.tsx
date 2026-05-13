import React from 'react';

interface JsonLdProps {
  schema: Record<string, unknown>;
  id?: string;
}

/**
 * Reusable JSON-LD structured data component.
 * Use this instead of inline <script> tags for consistency.
 */
export default function JsonLd({ schema, id }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      id={id}
      key={id}
    />
  );
}