import { useState, useEffect } from 'react';
import type { BlogPost } from '../types/models';

export function useBlog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        // Mock data simulation
        const mockPosts: BlogPost[] = [
            {
                blog_id: '123e4567-e89b-12d3-a456-426614174000',
                title: "The Power of Micro-Communities in a Digital Age",
                slug: "power-of-micro-communities",
                category: "Technology & Society",
                content: `
          <p>In an era defined by massive global platforms and infinite scrolling, we are paradoxically seeing a resurgence of the intimate. Micro-communities—small, focused groups united by niche interests or shared values—are becoming the new frontier of human connection.</p>
          
          <h3>Why "Small" is the New "Big"</h3>
          <p>For years, success in the digital realm was measured by follower counts and viral reach. However, as social noise increases, meaningful engagement has plummeted. People are tired of broadcasting to the void; they want to converse.</p>
          
          <p>Micro-communities offer a sanctuary. Whether it's a discord server for sustainable gardening or a slack channel for ethical AI coding, these spaces prioritize depth over breadth. They foster trust, vulnerability, and sustained dialogue in ways that algorithmic feeds simply cannot.</p>
          
          <h3>Building for Belonging</h3>
          <p>For creators and community builders, this shift requires a change in strategy. It’s no longer about capturing attention; it’s about cultivating belonging. This means facilitating peer-to-peer connections rather than just broadcasting content.</p>
          
          <p>As we move forward, the most influential "networks" won't be the ones with the most users, but the ones with the strongest bonds.</p>
        `,
                cover_image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
                author_name: "Elena Richardson",
                published_at: "2024-03-15T10:00:00Z",
                is_published: true
            },
            {
                blog_id: '223e4567-e89b-12d3-a456-426614174001',
                title: "Reimagining Urban Spaces for Climate Resilience",
                slug: "reimagining-urban-spaces",
                category: "Sustainability",
                content: `
          <p>Our cities are on the frontlines of the climate crisis. Concrete jungles amplify heat, impermeable surfaces worsen flooding, and pollution impacts public health. But within these challenges lies an opportunity to fundamentally redesign how we live.</p>
          
          <h3>The Sponge City Concept</h3>
          <p>One of the most promising innovations is the "sponge city"—urban design that works with water rather than against it. By integrating wetlands, green roofs, and permeable pavements, we can turn cities into active ecosystems that absorb rainfall and cool the environment.</p>
          
          <h3>Beyond Infrastructure</h3>
          <p>Resilience isn't just about physical adaptability; it's about social connectivity. Resilient cities have strong community networks that can mobilize in times of crisis. Public parks and shared spaces aren't just amenities; they are vital infrastructure for social cohesion.</p>
          
          <p>The city of the future is not a fortress of glass and steel, but a living, breathing organism that adapts, heals, and thrives.</p>
        `,
                cover_image_url: "https://images.unsplash.com/photo-1449824913929-2baa3a610120?q=80&w=2070&auto=format&fit=crop",
                author_name: "Dr. Aris Thorne",
                published_at: "2024-03-10T14:30:00Z",
                is_published: true
            },
            {
                blog_id: '323e4567-e89b-12d3-a456-426614174002',
                title: "Silence as a Strategy: The Lost Art of Listening",
                slug: "silence-as-strategy",
                category: "Personal Growth",
                content: `
          <p>We live in a noisy world. Notifications ping, diverse opinions clash, and there is a constant pressure to "have a take." In this cacophony, silence has become a rare commodity—and a powerful strategic tool.</p>
          
          <h3>Active Rest vs. Passive Silence</h3>
          <p>True silence isn't just the absence of noise; it's a state of active receptivity. For leaders and innovators, cultivating moments of silence allows for synthesis. It is in the quiet spaces that disparate ideas connect to form breakthroughs.</p>
          
          <h3>Designing for Quiet</h3>
          <p>How do we reclaim silence? It starts with intentional design—both of our physical environments and our digital habits. We need 'quiet zones' in our workplaces and 'do not disturb' blocks in our calendars not as luxuries, but as necessities for deep work.</p>
          
          <p>When we learn to listen—really listen—to the silence, we often hear the answers we’ve been shouting over.</p>
        `,
                cover_image_url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070&auto=format&fit=crop",
                author_name: "Marcus Chen",
                published_at: "2024-02-28T09:15:00Z",
                is_published: true
            },
            {
                blog_id: '423e4567-e89b-12d3-a456-426614174003',
                title: "The Ethics of Synthetic Creativity",
                slug: "ethics-of-synthetic-creativity",
                category: "Technology & Values",
                content: `
          <p>As generative AI models become increasingly sophisticated, we are forced to confront a fundamental question: Who owns creativity? The lines between inspiration and imitation are blurring.</p>
          
          <h3>The Human Element</h3>
          <p>While machines can replicate patterns, they lack the lived experience that gives art its soul. The challenge for the next decade will not be technical, but philosophical. How do we preserve human agency in a world of automated output?</p>
          
          <p>We must define new frameworks for copyright, attribution, and value that respect both the tool and the artist.</p>
        `,
                cover_image_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
                author_name: "Sarah Jenkins",
                published_at: "2024-03-20T11:00:00Z",
                is_published: true
            }
        ];

        // Simulate network delay
        setTimeout(() => {
            setPosts(mockPosts);
            setLoading(false);
        }, 800);
    }, []);

    const getPostBySlug = (slug: string) => {
        return posts.find(p => p.slug === slug);
    };

    const getRelatedPosts = (currentSlug: string) => {
        return posts.filter(p => p.slug !== currentSlug).slice(0, 2);
    };

    return { posts, loading, error, getPostBySlug, getRelatedPosts };
}
