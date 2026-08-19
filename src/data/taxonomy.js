export const categoryMeta = {
  'trending-viral': { name: 'Trending & Viral', description: 'The latest viral stories, internet trends and topics people are talking about.' },
  relationships: { name: 'Relationships', description: 'Psychology, dating, love, friendship and modern relationship advice.' },
  'money-career': { name: 'Money & Career', description: 'Practical money ideas, careers, side hustles and digital opportunities.' },
  entertainment: { name: 'Entertainment', description: 'Web series, movies, pop culture and entertainment worth watching.' },
  'tech-social-media': { name: 'Tech & Social Media', description: 'Technology, Instagram, AI, social media and creator insights.' },
  'funny-relatable': { name: 'Funny & Relatable', description: 'Funny observations and relatable everyday moments from Indian life.' },
};

export const slugify = (value) => value
  .toString()
  .toLowerCase()
  .trim()
  .replace(/&/g, 'and')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

export const categorySlug = (category) => slugify(category);
export const tagSlug = (tag) => slugify(tag);
