import fm from 'front-matter';

// Eagerly import all blog images from src so Vite gives us hashed URLs in build
const blogImageUrls = import.meta.glob('/src/assets/blog-images/*', { as: 'url', eager: true });

// Resolve a blog image path. Supports:
// - @blog-images/filename.png -> resolves via Vite to hashed asset URL
// - http(s)://... -> returned as-is
// - /path under public -> prefixed with BASE_URL for GitHub Pages
export function resolvePostImage(path) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;

  if (path.startsWith('@blog-images/')) {
    const fileName = path.slice('@blog-images/'.length);
    const matchKey = Object.keys(blogImageUrls).find(k => k.endsWith('/' + fileName));
    return matchKey ? blogImageUrls[matchKey] : undefined;
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path.startsWith('/')) {
    // If already prefixed with base (e.g. /BoneheadLabsSite/...), don't prefix again
    if (path.startsWith(normalizedBase + '/')) return path;
    return normalizedBase + path;
  }

  return path;
}

// Import all markdown files in the posts directory as raw strings
// Use an absolute path to be robust across environments
const blogPosts = import.meta.glob('/src/blog/posts/*.md', { as: 'raw', eager: true });

export function getAllPosts() {
  try {
    const posts = Object.entries(blogPosts).map(([path, content]) => {
      const parsed = fm(content);
      const data = parsed.attributes || {};
      const markdown = parsed.body || '';
      const slug = extractSlugFromPath(path);

      return {
        slug,
        frontmatter: data,
        content: markdown,
        date: new Date(data?.date || extractDateFromSlug(slug))
      };
    });

    // Sort posts by date, newest first
    return posts.sort((a, b) => b.date - a.date);
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

// Helper function to extract date from filename if not in frontmatter
function extractDateFromSlug(slug) {
  const dateMatch = slug.match(/^(\d{4}-\d{2}-\d{2})/);
  return dateMatch ? dateMatch[1] : new Date().toISOString().split('T')[0];
}

// Helper function to get recent posts for homepage or other components
export function getRecentPosts(limit = 3) {
  const posts = getAllPosts();
  return posts.slice(0, limit);
}

// Ensure slug extraction works regardless of Vite's returned path format
function extractSlugFromPath(path) {
  // Vite often returns keys like '/src/blog/posts/2024-01-01-post.md'
  // or relative './posts/2024-01-01-post.md'. We always take the basename without extension.
  const fileName = path.split('/').pop() || path;
  return fileName.replace(/\.md$/, '');
}
