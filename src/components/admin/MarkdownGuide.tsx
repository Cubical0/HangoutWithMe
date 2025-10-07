'use client';

import { useState } from 'react';

export default function MarkdownGuide() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-750 transition-colors"
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-semibold text-white">Markdown Formatting Guide</span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 text-sm">
          {/* Quick Reference */}
          <div className="bg-gray-900 rounded p-3">
            <h4 className="font-semibold text-white mb-2">Quick Reference</h4>
            <div className="space-y-1 text-gray-300 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>**bold**</div>
                <div className="text-gray-500">→ <strong>bold</strong></div>
                <div>*italic*</div>
                <div className="text-gray-500">→ <em>italic</em></div>
                <div>## Heading 2</div>
                <div className="text-gray-500">→ Section heading</div>
                <div>### Heading 3</div>
                <div className="text-gray-500">→ Subsection</div>
                <div>- List item</div>
                <div className="text-gray-500">→ Bullet point</div>
                <div>1. Numbered</div>
                <div className="text-gray-500">→ Ordered list</div>
                <div>[text](url)</div>
                <div className="text-gray-500">→ Link</div>
                <div>![alt](url)</div>
                <div className="text-gray-500">→ Image</div>
                <div>`code`</div>
                <div className="text-gray-500">→ Inline code</div>
                <div>&gt; Quote</div>
                <div className="text-gray-500">→ Blockquote</div>
                <div>---</div>
                <div className="text-gray-500">→ Horizontal line</div>
              </div>
            </div>
          </div>

          {/* Headings */}
          <div>
            <h4 className="font-semibold text-white mb-2">📝 Headings</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300">
              <div>## Main Section (Heading 2)</div>
              <div>### Subsection (Heading 3)</div>
              <div>#### Minor Heading (Heading 4)</div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Use ## for main sections, ### for subsections
            </p>
          </div>

          {/* Text Formatting */}
          <div>
            <h4 className="font-semibold text-white mb-2">✨ Text Formatting</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300 space-y-1">
              <div>**Bold text** for emphasis</div>
              <div>*Italic text* for subtle emphasis</div>
              <div>***Bold and italic***</div>
              <div>~~Strikethrough~~</div>
            </div>
          </div>

          {/* Lists */}
          <div>
            <h4 className="font-semibold text-white mb-2">📋 Lists</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300 space-y-2">
              <div>
                <div className="text-gray-500 mb-1">Bullet list:</div>
                <div>- First item</div>
                <div>- Second item</div>
                <div>&nbsp;&nbsp;- Nested item</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Numbered list:</div>
                <div>1. First step</div>
                <div>2. Second step</div>
                <div>3. Third step</div>
              </div>
            </div>
          </div>

          {/* Links & Images */}
          <div>
            <h4 className="font-semibold text-white mb-2">🔗 Links & Images</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300 space-y-1">
              <div>[Link text](https://example.com)</div>
              <div>![Image alt text](https://example.com/image.jpg)</div>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Always include descriptive alt text for images
            </p>
          </div>

          {/* Code */}
          <div>
            <h4 className="font-semibold text-white mb-2">💻 Code</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300 space-y-2">
              <div>
                <div className="text-gray-500 mb-1">Inline code:</div>
                <div>Use `code` for inline snippets</div>
              </div>
              <div>
                <div className="text-gray-500 mb-1">Code block:</div>
                <div>```javascript</div>
                <div>function example() {'{'}</div>
                <div>&nbsp;&nbsp;console.log(&quot;Hello&quot;);</div>
                <div>{'}'}</div>
                <div>```</div>
              </div>
            </div>
          </div>

          {/* Blockquotes */}
          <div>
            <h4 className="font-semibold text-white mb-2">💬 Blockquotes</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300">
              <div>&gt; This is a quote</div>
              <div>&gt; It can span multiple lines</div>
            </div>
          </div>

          {/* Tables */}
          <div>
            <h4 className="font-semibold text-white mb-2">📊 Tables</h4>
            <div className="bg-gray-900 rounded p-3 font-mono text-xs text-gray-300">
              <div>| Header 1 | Header 2 |</div>
              <div>|----------|----------|</div>
              <div>| Cell 1   | Cell 2   |</div>
              <div>| Cell 3   | Cell 4   |</div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-blue-900/20 border border-blue-700/30 rounded p-3">
            <h4 className="font-semibold text-blue-300 mb-2">💡 Best Practices</h4>
            <ul className="text-gray-300 text-xs space-y-1 list-disc list-inside">
              <li>Use ## for main sections, ### for subsections</li>
              <li>Keep paragraphs short (3-5 sentences)</li>
              <li>Add images every 300-500 words</li>
              <li>Use lists for easy scanning</li>
              <li>Include alt text for all images</li>
              <li>Link to relevant sources</li>
            </ul>
          </div>

          {/* Image Guidelines */}
          <div className="bg-purple-900/20 border border-purple-700/30 rounded p-3">
            <h4 className="font-semibold text-purple-300 mb-2">🖼️ Image Guidelines</h4>
            <ul className="text-gray-300 text-xs space-y-1">
              <li><strong>Featured Image:</strong> 1200x630px (under 500KB)</li>
              <li><strong>Profile Picture:</strong> 400x400px (under 200KB)</li>
              <li><strong>Content Images:</strong> At least 1200px wide (under 1MB)</li>
            </ul>
          </div>

          {/* Full Guide Link */}
          <div className="pt-2 border-t border-gray-700">
            <a
              href="/BLOG_FORMATTING_GUIDE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Complete Formatting Guide
            </a>
          </div>
        </div>
      )}
    </div>
  );
}