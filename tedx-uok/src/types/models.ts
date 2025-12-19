export interface Speaker {
  id: string;
  slug: string;
  full_name: string;
  title: string;
  topic: string;
  bio_short: string;
  bio_long: string;
  photo_url: string;
  talk_title: string;
  talk_description: string;
  expertise: string[];
  social_links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface BlogPost {
  blog_id: string; // UUID
  title: string;
  slug: string; // unique
  content: string; // text
  cover_image_url?: string; // optional
  category: string;
  author_name: string;
  published_at?: string; // timestamp (ISO string for frontend)
  is_published: boolean;
}
