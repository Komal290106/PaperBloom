export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Meditative Art of Paper Folding',
    date: '2024-01-15',
    category: 'Wellness',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Discover how origami can calm your mind and bring mindfulness into your daily routine through the simple act of folding paper.',
    tags: ['mindfulness', 'wellness', 'meditation'],
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Best Papers for Beginners',
    date: '2024-01-10',
    category: 'Materials',
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Choosing the right paper makes all the difference in your origami journey. Learn which papers work best for different projects.',
    tags: ['beginner', 'materials', 'tools'],
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Origami in Japanese Culture',
    date: '2024-01-05',
    category: 'Culture',
    image: 'https://images.pexels.com/photos/2833394/pexels-photo-2833394.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'The rich history behind the paper crane and how origami evolved from ceremonial art to worldwide creative expression.',
    tags: ['history', 'culture', 'tradition'],
    readTime: '8 min read'
  },
  {
    id: '4',
    title: '5 Easy Projects for Kids',
    date: '2023-12-28',
    category: 'Kids',
    image: 'https://images.pexels.com/photos/6373293/pexels-photo-6373293.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Fun and simple origami projects to do with children that develop fine motor skills and spark creativity.',
    tags: ['kids', 'easy', 'family'],
    readTime: '4 min read'
  },
  {
    id: '5',
    title: 'Advanced Tessellation Techniques',
    date: '2023-12-20',
    category: 'Advanced',
    image: 'https://images.pexels.com/photos/6373295/pexels-photo-6373295.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Take your skills to the next level with complex tessellation patterns that create stunning geometric paper art.',
    tags: ['advanced', 'techniques', 'geometric'],
    readTime: '12 min read'
  },
  {
    id: '6',
    title: 'The Science of Paper Folding',
    date: '2023-12-15',
    category: 'Science',
    image: 'https://images.pexels.com/photos/6373292/pexels-photo-6373292.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Explore the mathematics and engineering principles that make origami possible, from simple folds to complex structures.',
    tags: ['science', 'mathematics', 'engineering'],
    readTime: '10 min read'
  }
];