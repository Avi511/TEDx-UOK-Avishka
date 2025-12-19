import { useState, useEffect } from 'react';
import type { Speaker } from '../types/models';

export function useSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    // Mock data - replace with actual Supabase query
    const mockSpeakers: Speaker[] = [
      {
        id: '1',
        slug: "sarah-chen",
        full_name: "Dr. Sarah Chen",
        title: "AI Research Director",
        topic: "The Future of Human-AI Collaboration",
        bio_short: "Leading global researcher in artificial intelligence with 15+ years pioneering innovation at the intersection of AI and society.",
        bio_long: "Dr. Sarah Chen is a renowned AI researcher and innovator who has dedicated her career to creating intelligent systems that augment human capabilities. With a PhD from Stanford University and a background in cognitive science, she has led groundbreaking research at institutions including MIT, Carnegie Mellon, and currently as Director of AI Research at TechCorp Innovation Labs.\n\nHer work spans natural language processing, computer vision, and ethical AI. She has published over 120 peer-reviewed papers in top-tier venues including NeurIPS, ICML, and ICCV, with more than 8,000 citations. Dr. Chen's research on AI bias detection has directly influenced policies at major tech companies and international regulatory bodies.\n\nBeyond research, she is a passionate educator and mentor, having trained over 50 PhD students who now lead AI initiatives globally. She serves on the advisory boards of the AI Ethics Institute and the Partnership on AI, and frequently speaks about responsible AI development at international forums.",
        photo_url: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTY4NjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "The Future of Human-AI Collaboration: Creating Symbiotic Intelligence",
        talk_description: "Explore how artificial intelligence is transforming the way we work, learn, and solve complex problems. Dr. Chen will share insights from her groundbreaking research on creating AI systems that augment human intelligence and foster meaningful collaboration between humans and machines.",
        expertise: ["Artificial Intelligence", "Machine Learning", "Human-Computer Interaction", "Ethics in AI"],
        social_links: {
          linkedin: "https://linkedin.com/in/sarahchen-ai",
          twitter: "https://twitter.com/drsarahchen",
          website: "https://sarahchen.ai"
        }
      },
      {
        id: '2',
        slug: "marcus-williams",
        full_name: "Marcus Williams",
        title: "Tech Entrepreneur",
        topic: "Building Sustainable Startups",
        bio_short: "Serial entrepreneur who has built and scaled multiple technology companies with a focus on sustainability and social impact.",
        bio_long: "Marcus Williams is a serial entrepreneur who has built and scaled multiple successful technology companies with a focus on sustainability and social impact. His ventures have raised over $100M in funding and created thousands of jobs while maintaining a strong commitment to environmental responsibility.\n\nHis first venture, EcoTech Systems, pioneered renewable energy management software. He then co-founded GreenTech Solutions, which has grown into a market leader in sustainable industrial processes. The company has already prevented 10 million tons of CO2 emissions and currently operates in 20 countries with significant annual revenue.\n\nMarcus brings hands-on expertise in venture fundraising, product-market fit, scaling operations, and building high-performance teams. He has successfully raised over $150M in venture capital from top-tier investors including Sequoia Capital, Andreessen Horowitz, and Breakthrough Energy Ventures.",
        photo_url: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZWNobm9sb2d5JTIwbGVhZGVyfGVufDF8fHx8MTc2NTY4NjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Building Companies That Matter",
        talk_description: "Learn how to build startups that not only generate profit but also create lasting positive impact. Marcus shares practical strategies for creating sustainable business models, attracting mission-driven talent, and scaling responsibly in the modern tech landscape.",
        expertise: ["Entrepreneurship", "Sustainable Business", "Tech Innovation", "Social Impact"],
        social_links: {
          linkedin: "https://linkedin.com/in/marcuswilliams-ceo",
          twitter: "https://twitter.com/marcuswilliams",
          website: "https://marcuswilliams.com"
        }
      },
      {
        id: '3',
        slug: "priya-patel",
        full_name: "Dr. Priya Patel",
        title: "Environmental Scientist",
        topic: "Climate Innovation for Tomorrow",
        bio_short: "Leading climate scientist with PhD from MIT, advising governments on climate change mitigation strategies with research cited 5,000+ times.",
        bio_long: "Dr. Priya Patel is one of the world's foremost experts on climate science, carbon management, and environmental policy. With a PhD in Environmental Science from MIT and a background in geochemistry and atmospheric physics, she has spent 18 years at the forefront of climate research and policy implementation.\n\nAs Lead Scientist at the Global Climate Institute and Senior Advisor to the UN Environment Programme, Dr. Patel has directly shaped climate policy for over 40 countries. Her groundbreaking research on direct air capture and permanent carbon sequestration has been published in top scientific journals, with over 5,000 citations.\n\nHer most significant contribution has been developing cost-effective carbon sequestration methodologies that are now being implemented by leading governments and corporations globally. She has given keynotes at the World Economic Forum, COP26, and the UN Climate Change Conference.",
        photo_url: "https://images.unsplash.com/photo-1756588534346-e8899364757b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Njg2MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Innovative Solutions for Climate Change",
        talk_description: "Discover cutting-edge technologies and innovative approaches to combat climate change. Dr. Patel presents actionable solutions that combine scientific research with practical implementation, showing how we can build a sustainable future through innovation and collective action.",
        expertise: ["Climate Science", "Renewable Energy", "Environmental Policy", "Sustainability"],
        social_links: {
          linkedin: "https://linkedin.com/in/drpriyapatel",
          twitter: "https://twitter.com/priyapatel_phd",
          website: "https://priyapatel.climate"
        }
      },
      {
        id: '4',
        slug: "james-anderson",
        full_name: "James Anderson",
        title: "Social Impact Leader",
        topic: "Designing for Social Change",
        bio_short: "Design thinking expert and social innovator whose Design for Change initiative has impacted 2+ million lives across 60 countries.",
        bio_long: "James Anderson is a visionary designer and social entrepreneur who has dedicated his career to proving that sustainable solutions to social problems can come from affected communities themselves. As Founder and Executive Director of Design for Change, he leads an international movement that has directly impacted over 2 million lives across 60 countries.\n\nWith a background in product design from Stanford and a master's in social innovation, James combines rigorous design thinking methodology with deep community engagement. His approach has been featured in Harvard Business Review and The Guardian, and is supported by leading foundations including Gates, Ford, and Ashoka.\n\nUnder his leadership, Design for Change has grown into a network of 100,000+ practitioners in schools, nonprofits, and government agencies worldwide. He was recognized as a Young Global Leader by the World Economic Forum and holds honorary doctorates from three universities.",
        photo_url: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYwNjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Design Thinking for Social Good",
        talk_description: "Learn how design thinking principles can be applied to solve complex social challenges. James shares case studies and methodologies for creating impactful solutions that empower communities and drive systemic change through empathy, creativity, and collaboration.",
        expertise: ["Design Thinking", "Social Innovation", "Community Development", "Human-Centered Design"],
        social_links: {
          linkedin: "https://linkedin.com/in/jamesanderson-design",
          twitter: "https://twitter.com/jamesanderson",
          website: "https://designforchange.org"
        }
      },
      {
        id: '5',
        slug: "sarah-chen-2",
        full_name: "Dr. Sarah Chen 2",
        title: "AI Research Director",
        topic: "The Future of Human-AI Collaboration",
        bio_short: "Leading global researcher in artificial intelligence with 15+ years pioneering innovation at the intersection of AI and society.",
        bio_long: "Dr. Sarah Chen is a renowned AI researcher and innovator who has dedicated her career to creating intelligent systems that augment human capabilities. With a PhD from Stanford University and a background in cognitive science, she has led groundbreaking research at institutions including MIT, Carnegie Mellon, and currently as Director of AI Research at TechCorp Innovation Labs.",
        photo_url: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTY4NjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "The Future of Human-AI Collaboration: Creating Symbiotic Intelligence",
        talk_description: "Explore how artificial intelligence is transforming the way we work, learn, and solve complex problems. Dr. Chen will share insights from her groundbreaking research on creating AI systems that augment human intelligence and foster meaningful collaboration between humans and machines.",
        expertise: ["Artificial Intelligence", "Machine Learning", "Human-Computer Interaction", "Ethics in AI"],
        social_links: {
          linkedin: "https://linkedin.com/in/sarahchen-ai",
          twitter: "https://twitter.com/drsarahchen",
          website: "https://sarahchen.ai"
        }
      },
      {
        id: '6',
        slug: "marcus-williams-2",
        full_name: "Marcus Williams 2",
        title: "Tech Entrepreneur",
        topic: "Building Sustainable Startups",
        bio_short: "Serial entrepreneur who has built and scaled multiple technology companies with a focus on sustainability and social impact.",
        bio_long: "Marcus Williams is a serial entrepreneur who has built and scaled multiple successful technology companies with a focus on sustainability and social impact. His ventures have raised over $100M in funding and created thousands of jobs while maintaining a strong commitment to environmental responsibility.",
        photo_url: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZWNobm9sb2d5JTIwbGVhZGVyfGVufDF8fHx8MTc2NTY4NjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Building Companies That Matter",
        talk_description: "Learn how to build startups that not only generate profit but also create lasting positive impact. Marcus shares practical strategies for creating sustainable business models, attracting mission-driven talent, and scaling responsibly in the modern tech landscape.",
        expertise: ["Entrepreneurship", "Sustainable Business", "Tech Innovation", "Social Impact"],
        social_links: {
          linkedin: "https://linkedin.com/in/marcuswilliams-ceo",
          twitter: "https://twitter.com/marcuswilliams",
          website: "https://marcuswilliams.com"
        }
      },
      {
        id: '7',
        slug: "priya-patel-2",
        full_name: "Dr. Priya Patel 2",
        title: "Environmental Scientist",
        topic: "Climate Innovation for Tomorrow",
        bio_short: "Leading climate scientist with PhD from MIT, advising governments on climate change mitigation strategies with research cited 5,000+ times.",
        bio_long: "Dr. Priya Patel is one of the world's foremost experts on climate science, carbon management, and environmental policy. With a PhD in Environmental Science from MIT and a background in geochemistry and atmospheric physics, she has spent 18 years at the forefront of climate research and policy implementation.",
        photo_url: "https://images.unsplash.com/photo-1756588534346-e8899364757b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Njg2MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Innovative Solutions for Climate Change",
        talk_description: "Discover cutting-edge technologies and innovative approaches to combat climate change. Dr. Patel presents actionable solutions that combine scientific research with practical implementation, showing how we can build a sustainable future through innovation and collective action.",
        expertise: ["Climate Science", "Renewable Energy", "Environmental Policy", "Sustainability"],
        social_links: {
          linkedin: "https://linkedin.com/in/drpriyapatel",
          twitter: "https://twitter.com/priyapatel_phd",
          website: "https://priyapatel.climate"
        }
      },
      {
        id: '8',
        slug: "james-anderson-2",
        full_name: "James Anderson 2",
        title: "Social Impact Leader",
        topic: "Designing for Social Change",
        bio_short: "Design thinking expert and social innovator whose Design for Change initiative has impacted 2+ million lives across 60 countries.",
        bio_long: "James Anderson is a visionary designer and social entrepreneur who has dedicated his career to proving that sustainable solutions to social problems can come from affected communities themselves. As Founder and Executive Director of Design for Change, he leads an international movement that has directly impacted over 2 million lives across 60 countries.",
        photo_url: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYwNjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Design Thinking for Social Good",
        talk_description: "Learn how design thinking principles can be applied to solve complex social challenges. James shares case studies and methodologies for creating impactful solutions that empower communities and drive systemic change through empathy, creativity, and collaboration.",
        expertise: ["Design Thinking", "Social Innovation", "Community Development", "Human-Centered Design"],
        social_links: {
          linkedin: "https://linkedin.com/in/jamesanderson-design",
          twitter: "https://twitter.com/jamesanderson",
          website: "https://designforchange.org"
        }
      }
    ];

    setTimeout(() => {
      setSpeakers(mockSpeakers);
      setLoading(false);
    }, 0);
  }, []);

  return { speakers, loading, error };
}

export function useSpeaker(id: string) {
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data - replace with actual Supabase query
    const mockSpeakers: Speaker[] = [
      {
        id: '1',
        slug: "sarah-chen",
        full_name: "Dr. Sarah Chen",
        title: "AI Research Director",
        topic: "The Future of Human-AI Collaboration",
        bio_short: "Leading global researcher in artificial intelligence with 15+ years pioneering innovation at the intersection of AI and society.",
        bio_long: "Dr. Sarah Chen is a renowned AI researcher and innovator who has dedicated her career to creating intelligent systems that augment human capabilities. With a PhD from Stanford University and a background in cognitive science, she has led groundbreaking research at institutions including MIT, Carnegie Mellon, and currently as Director of AI Research at TechCorp Innovation Labs.\n\nHer work spans natural language processing, computer vision, and ethical AI. She has published over 120 peer-reviewed papers in top-tier venues including NeurIPS, ICML, and ICCV, with more than 8,000 citations. Dr. Chen's research on AI bias detection has directly influenced policies at major tech companies and international regulatory bodies.\n\nBeyond research, she is a passionate educator and mentor, having trained over 50 PhD students who now lead AI initiatives globally. She serves on the advisory boards of the AI Ethics Institute and the Partnership on AI, and frequently speaks about responsible AI development at international forums.",
        photo_url: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTY4NjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "The Future of Human-AI Collaboration: Creating Symbiotic Intelligence",
        talk_description: "Explore how artificial intelligence is transforming the way we work, learn, and solve complex problems. Dr. Chen will share insights from her groundbreaking research on creating AI systems that augment human intelligence and foster meaningful collaboration between humans and machines.",
        expertise: ["Artificial Intelligence", "Machine Learning", "Human-Computer Interaction", "Ethics in AI"],
        social_links: {
          linkedin: "https://linkedin.com/in/sarahchen-ai",
          twitter: "https://twitter.com/drsarahchen",
          website: "https://sarahchen.ai"
        }
      },
      {
        id: '2',
        slug: "marcus-williams",
        full_name: "Marcus Williams",
        title: "Tech Entrepreneur",
        topic: "Building Sustainable Startups",
        bio_short: "Serial entrepreneur who has built and scaled multiple technology companies with a focus on sustainability and social impact.",
        bio_long: "Marcus Williams is a serial entrepreneur who has built and scaled multiple successful technology companies with a focus on sustainability and social impact. His ventures have raised over $100M in funding and created thousands of jobs while maintaining a strong commitment to environmental responsibility.\n\nHis first venture, EcoTech Systems, pioneered renewable energy management software. He then co-founded GreenTech Solutions, which has grown into a market leader in sustainable industrial processes. The company has already prevented 10 million tons of CO2 emissions and currently operates in 20 countries with significant annual revenue.\n\nMarcus brings hands-on expertise in venture fundraising, product-market fit, scaling operations, and building high-performance teams. He has successfully raised over $150M in venture capital from top-tier investors including Sequoia Capital, Andreessen Horowitz, and Breakthrough Energy Ventures.",
        photo_url: "https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB0ZWNobm9sb2d5JTIwbGVhZGVyfGVufDF8fHx8MTc2NTY4NjE1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Building Companies That Matter",
        talk_description: "Learn how to build startups that not only generate profit but also create lasting positive impact. Marcus shares practical strategies for creating sustainable business models, attracting mission-driven talent, and scaling responsibly in the modern tech landscape.",
        expertise: ["Entrepreneurship", "Sustainable Business", "Tech Innovation", "Social Impact"],
        social_links: {
          linkedin: "https://linkedin.com/in/marcuswilliams-ceo",
          twitter: "https://twitter.com/marcuswilliams",
          website: "https://marcuswilliams.com"
        }
      },
      {
        id: '3',
        slug: "priya-patel",
        full_name: "Dr. Priya Patel",
        title: "Environmental Scientist",
        topic: "Climate Innovation for Tomorrow",
        bio_short: "Leading climate scientist with PhD from MIT, advising governments on climate change mitigation strategies with research cited 5,000+ times.",
        bio_long: "Dr. Priya Patel is one of the world's foremost experts on climate science, carbon management, and environmental policy. With a PhD in Environmental Science from MIT and a background in geochemistry and atmospheric physics, she has spent 18 years at the forefront of climate research and policy implementation.\n\nAs Lead Scientist at the Global Climate Institute and Senior Advisor to the UN Environment Programme, Dr. Patel has directly shaped climate policy for over 40 countries. Her groundbreaking research on direct air capture and permanent carbon sequestration has been published in top scientific journals, with over 5,000 citations.\n\nHer most significant contribution has been developing cost-effective carbon sequestration methodologies that are now being implemented by leading governments and corporations globally. She has given keynotes at the World Economic Forum, COP26, and the UN Climate Change Conference.",
        photo_url: "https://images.unsplash.com/photo-1756588534346-e8899364757b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1Njg2MTU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Innovative Solutions for Climate Change",
        talk_description: "Discover cutting-edge technologies and innovative approaches to combat climate change. Dr. Patel presents actionable solutions that combine scientific research with practical implementation, showing how we can build a sustainable future through innovation and collective action.",
        expertise: ["Climate Science", "Renewable Energy", "Environmental Policy", "Sustainability"],
        social_links: {
          linkedin: "https://linkedin.com/in/drpriyapatel",
          twitter: "https://twitter.com/priyapatel_phd",
          website: "https://priyapatel.climate"
        }
      },
      {
        id: '4',
        slug: "james-anderson",
        full_name: "James Anderson",
        title: "Social Impact Leader",
        topic: "Designing for Social Change",
        bio_short: "Design thinking expert and social innovator whose Design for Change initiative has impacted 2+ million lives across 60 countries.",
        bio_long: "James Anderson is a visionary designer and social entrepreneur who has dedicated his career to proving that sustainable solutions to social problems can come from affected communities themselves. As Founder and Executive Director of Design for Change, he leads an international movement that has directly impacted over 2 million lives across 60 countries.\n\nWith a background in product design from Stanford and a master's in social innovation, James combines rigorous design thinking methodology with deep community engagement. His approach has been featured in Harvard Business Review and The Guardian, and is supported by leading foundations including Gates, Ford, and Ashoka.\n\nUnder his leadership, Design for Change has grown into a network of 100,000+ practitioners in schools, nonprofits, and government agencies worldwide. He was recognized as a Young Global Leader by the World Economic Forum and holds honorary doctorates from three universities.",
        photo_url: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTYwNjE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
        talk_title: "Design Thinking for Social Good",
        talk_description: "Learn how design thinking principles can be applied to solve complex social challenges. James shares case studies and methodologies for creating impactful solutions that empower communities and drive systemic change through empathy, creativity, and collaboration.",
        expertise: ["Design Thinking", "Social Innovation", "Community Development", "Human-Centered Design"],
        social_links: {
          linkedin: "https://linkedin.com/in/jamesanderson-design",
          twitter: "https://twitter.com/jamesanderson",
          website: "https://designforchange.org"
        }
      }
    ];

    const foundSpeaker = mockSpeakers.find(s => s.id === id);
    setTimeout(() => {
      if (foundSpeaker) {
        setSpeaker(foundSpeaker);
        setLoading(false);
      } else {
        setError('Speaker not found');
        setLoading(false);
      }
    }, 0);
  }, [id]);

  return { speaker, loading, error };
}
