import { useState, useEffect } from 'react';
import type { Speaker } from '../types/models';
import { supabase } from '../lib/supabaseClient';

// Fallback images for demo purposes (matching seed data filenames)
const SPEAKER_IMAGE_MAP: Record<string, string> = {
  'elara_vance.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  'marcus_thorne.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
  'sarah_jenkins.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
  'kaito_tanaka.jpg': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
};

export function useSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeakers() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('speakers')
          .select('*')
          .order('full_name');

        if (error) {
          throw error;
        }

        if (data) {
          // Sanitize data and resolve image URLs
          const sanitizedSpeakers = data.map((s: any) => {
            let photoUrl = s.photo_url;

            // Check lookup map first (for demo data)
            if (photoUrl && SPEAKER_IMAGE_MAP[photoUrl]) {
              photoUrl = SPEAKER_IMAGE_MAP[photoUrl];
            }
            // Then resolve storage URL if it's a relative path
            else if (photoUrl && !photoUrl.startsWith('http')) {
              const { data: publicUrlData } = supabase.storage
                .from('speaker-photos')
                .getPublicUrl(photoUrl);
              photoUrl = publicUrlData.publicUrl;
            }

            return {
              ...s,
              photo_url: photoUrl,
              social_links: s.social_links || {},
            };
          });
          setSpeakers(sanitizedSpeakers as Speaker[]);
        }
      } catch (err) {
        console.error('Error fetching speakers:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch speakers');
      } finally {
        setLoading(false);
      }
    }

    fetchSpeakers();
  }, []);

  return { speakers, loading, error };
}

export function useSpeaker(id: string) {
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpeaker() {
      if (!id) return;

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('speakers')
          .select('*')
          .eq('speaker_id', id)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          const s = data as any;
          let photoUrl = s.photo_url;

          // Check lookup map first (for demo data)
          if (photoUrl && SPEAKER_IMAGE_MAP[photoUrl]) {
            photoUrl = SPEAKER_IMAGE_MAP[photoUrl];
          }
          // Then resolve storage URL
          else if (photoUrl && !photoUrl.startsWith('http')) {
            const { data: publicUrlData } = supabase.storage
              .from('speaker-photos')
              .getPublicUrl(photoUrl);
            photoUrl = publicUrlData.publicUrl;
          }

          const sanitizedSpeaker = {
            ...s,
            photo_url: photoUrl,
            social_links: s.social_links || {},
          };
          setSpeaker(sanitizedSpeaker as Speaker);
        }
      } catch (err) {
        console.error(`Error fetching speaker ${id}:`, err);
        setError(err instanceof Error ? err.message : 'Failed to fetch speaker');
      } finally {
        setLoading(false);
      }
    }

    fetchSpeaker();
  }, [id]);

  return { speaker, loading, error };
}
