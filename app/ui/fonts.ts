import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import { Anton } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const anton = Anton({
	weight: ['400'],
	subsets: ['latin'],
});