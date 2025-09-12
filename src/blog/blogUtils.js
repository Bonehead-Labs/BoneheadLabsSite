import fm from 'front-matter';

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
