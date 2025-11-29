// 1. Import your local assets for the Featured Tutorials
import craneImg from '../assets/paper_crane.png';
import craneVid from '../assets/paper_crane.mp4';

import starImg from '../assets/stars.png';
import starVid from '../assets/stars.mp4';

import butterflyImg from '../assets/butterfly.png';
import butterflyVid from '../assets/butterfly.mp4';

import roseImg from '../assets/rose.png';
import lotusImg from '../assets/lotus.png';
import frogImg from '../assets/frog.png';

export interface Tutorial {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  time: string;
  category: string;
  image: string;
  video?: string; // Optional property (some have it, some don't)
  steps: { image: string; text: string }[];
}

export const tutorials: Tutorial[] = [
  // --- FEATURED TUTORIALS (With Local Images & Videos) ---
  {
    id: '1',
    title: 'Paper Crane',
    difficulty: 'Beginner',
    time: '10 min',
    category: 'Animals',
    image: craneImg, // Using the imported PNG
    video: craneVid, // Using the imported MP4 (Plays on hover)
    steps: [
      { image: '', text: 'Fold square in half diagonally' },
      { image: '', text: 'Fold corners to center' },
      { image: '', text: 'Create wings and head' },
    ],
  },
  {
    id: '2',
    title: 'Lucky Star',
    difficulty: 'Beginner',
    time: '5 min',
    category: 'Decorative',
    image: starImg,
    video: starVid,
    steps: [
      { image: '', text: 'Cut paper strip' },
      { image: '', text: 'Tie pentagon knot' },
      { image: '', text: 'Pinch edges to puff' },
    ],
  },
  {
    id: '3',
    title: 'Butterfly',
    difficulty: 'Intermediate',
    time: '15 min',
    category: 'Animals',
    image: butterflyImg,
    video: butterflyVid,
    steps: [
      { image: '', text: 'Start with bird base' },
      { image: '', text: 'Form wing shapes' },
      { image: '', text: 'Add antennae' },
    ],
  },

  // --- OTHER TUTORIALS (Using Local Images, No Video) ---
  {
    id: '4',
    title: 'Rose',
    difficulty: 'Advanced',
    time: '25 min',
    category: 'Flowers',
    image: roseImg, // Using local rose image
    // No video property here
    steps: [
      { image: '', text: 'Create twist base' },
      { image: '', text: 'Form petals' },
      { image: '', text: 'Shape bloom' },
    ],
  },
  {
    id: '5',
    title: 'Lotus Flower',
    difficulty: 'Intermediate',
    time: '20 min',
    category: 'Flowers',
    image: lotusImg, // Using local lotus image
    // No video property here
    steps: [
      { image: '', text: 'Fold square base' },
      { image: '', text: 'Create petal layers' },
      { image: '', text: 'Open and shape' },
    ],
  },
  {
    id: '6',
    title: 'Jumping Frog',
    difficulty: 'Beginner',
    time: '8 min',
    category: 'Animals',
    image: frogImg, // Using local frog image
    // No video property here
    steps: [
      { image: '', text: 'Fold rectangle base' },
      { image: '', text: 'Create legs' },
      { image: '', text: 'Add spring fold' },
    ],
  },
];