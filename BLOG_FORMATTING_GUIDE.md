# Blog Content Formatting Guide

This guide explains how to format your blog content in the admin panel for optimal display on the website.

## Content Format: Markdown

All blog content should be written in **Markdown** format. Markdown is a lightweight markup language that's easy to read and write.

---

## Basic Formatting

### Headings

```markdown
# Heading 1 (Main Title - avoid using in content, reserved for blog title)
## Heading 2 (Section Headings)
### Heading 3 (Subsection Headings)
#### Heading 4 (Minor Headings)
```

**Example:**
```markdown
## Introduction to DeFi
### What is Decentralized Finance?
#### Key Components
```

---

### Text Formatting

```markdown
**Bold Text** - Use for emphasis
*Italic Text* - Use for subtle emphasis
***Bold and Italic*** - Use sparingly
~~Strikethrough~~ - Use for corrections or outdated info
```

**Example:**
```markdown
**Important:** DeFi protocols are *revolutionizing* traditional finance.
```

---

### Lists

**Unordered Lists:**
```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

**Ordered Lists:**
```markdown
1. First step
2. Second step
3. Third step
```

**Example:**
```markdown
## Benefits of DeFi
- Decentralization
- Transparency
- Accessibility
- Lower fees
```

---

### Links

```markdown
[Link Text](https://example.com)
[Link with Title](https://example.com "Hover text")
```

**Example:**
```markdown
Learn more about [Ethereum](https://ethereum.org) and its ecosystem.
```

---

### Images

```markdown
![Alt Text](https://example.com/image.jpg)
![Alt Text](https://example.com/image.jpg "Image Title")
```

**Best Practices:**
- Use descriptive alt text for accessibility
- Optimize images before uploading (recommended: max 1MB)
- Use high-quality images (at least 1200px wide for full-width images)

**Example:**
```markdown
![Bitcoin Price Chart](https://example.com/btc-chart.jpg "BTC/USD Daily Chart")
```

---

### Blockquotes

```markdown
> This is a blockquote
> It can span multiple lines
>
> And have multiple paragraphs
```

**Example:**
```markdown
> "The future of finance is decentralized." - Vitalik Buterin
```

---

### Code

**Inline Code:**
```markdown
Use `code` for inline code snippets
```

**Code Blocks:**
````markdown
```javascript
function example() {
  console.log("Hello World");
}
```
````

**Example:**
```markdown
To connect your wallet, use the `connectWallet()` function:

```javascript
const wallet = await connectWallet();
console.log(wallet.address);
```
````

---

### Horizontal Rules

```markdown
---
or
***
or
___
```

Use horizontal rules to separate major sections.

---

## Advanced Formatting

### Tables

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |
```

**Example:**
```markdown
| Protocol | TVL | APY |
|----------|-----|-----|
| Aave     | $5B | 3.5% |
| Compound | $3B | 2.8% |
```

---

### Task Lists

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task
```

---

## Best Practices

### Structure Your Content

1. **Start with an engaging introduction** (2-3 paragraphs)
2. **Use clear section headings** (## for main sections)
3. **Break up long paragraphs** (3-5 sentences max)
4. **Use lists for easy scanning**
5. **Add relevant images** to illustrate points
6. **End with a conclusion** or call-to-action

### Writing Tips

- **Keep paragraphs short** - 3-5 sentences maximum
- **Use subheadings** - Break content into scannable sections
- **Add visual elements** - Images, charts, or diagrams every 300-500 words
- **Include examples** - Real-world use cases help readers understand
- **Link to sources** - Build credibility with external references
- **Use bullet points** - Make information easy to digest

### SEO Optimization

- **Use keywords naturally** in headings and content
- **Write descriptive alt text** for all images
- **Include internal links** to other blog posts
- **Add external links** to authoritative sources
- **Keep content comprehensive** (aim for 1000+ words for in-depth topics)

---

## Author Information Fields

When creating or editing a blog post, fill in these author fields:

### 1. Author Name
- Full name of the content creator
- Example: "John Smith"

### 2. Designation
- Professional title or role
- Examples: "Senior Content Writer", "Crypto Analyst", "DeFi Researcher"

### 3. Profile Picture URL
- Direct URL to author's profile image
- **Recommended size:** 400x400px (square)
- **Format:** JPG or PNG
- **Example:** `https://example.com/authors/john-smith.jpg`

### 4. Author Bio
- Brief description (2-3 sentences)
- Highlight expertise and experience
- Example: "John is a cryptocurrency analyst with 5+ years of experience in DeFi protocols. He specializes in market analysis and blockchain technology."

---

## Image Guidelines

### Featured Image (Thumbnail)
- **Size:** 1200x630px (recommended)
- **Format:** JPG or PNG
- **File size:** Under 500KB (optimized)
- **Content:** Eye-catching, relevant to the blog topic

### Profile Picture
- **Size:** 400x400px (square)
- **Format:** JPG or PNG
- **File size:** Under 200KB
- **Content:** Professional headshot or avatar

### In-Content Images
- **Width:** At least 1200px for full-width images
- **Format:** JPG for photos, PNG for graphics with transparency
- **File size:** Under 1MB each
- **Alt text:** Always include descriptive alt text

---

## Example Blog Post Structure

```markdown
## Introduction

Brief overview of the topic (2-3 paragraphs). Explain why this matters to readers and what they'll learn.

## Main Section 1: Understanding the Basics

### Subsection 1.1
Content explaining the first key concept...

### Subsection 1.2
Content explaining the second key concept...

![Relevant Image](https://example.com/image1.jpg "Image description")

## Main Section 2: Practical Applications

Real-world examples and use cases:

- **Example 1:** Description
- **Example 2:** Description
- **Example 3:** Description

## Main Section 3: Advanced Concepts

Deeper dive into the topic...

> Important quote or key takeaway

## Conclusion

Summary of key points and call-to-action.

**Key Takeaways:**
- Point 1
- Point 2
- Point 3

Learn more about [related topic](https://example.com).
```

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use HTML tags (use Markdown instead)
- Forget alt text for images
- Create walls of text without breaks
- Use too many heading levels (stick to H2-H4)
- Forget to proofread

✅ **Do:**
- Use Markdown formatting consistently
- Break content into scannable sections
- Add visual elements regularly
- Include relevant links
- Preview before publishing

---

## Quick Reference

| Element | Markdown Syntax |
|---------|----------------|
| Bold | `**text**` |
| Italic | `*text*` |
| Heading 2 | `## Heading` |
| Heading 3 | `### Heading` |
| Link | `[text](url)` |
| Image | `![alt](url)` |
| List | `- item` or `1. item` |
| Quote | `> quote` |
| Code | `` `code` `` |
| Horizontal Rule | `---` |

---

## Need Help?

If you have questions about formatting your blog content:
1. Refer to this guide
2. Check existing published blogs for examples
3. Contact the technical team for assistance

**Remember:** Good formatting makes content more readable and engaging for your audience!