/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://abdulfatahillah.vercel.app/'),
  title: {
    template: '%s | Abdul Fatahillah',
    default: 'Abdul Fatahillah • Freelance Designer & Developer',
  },
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
  generator: 'Abdul Fatahillah',
  applicationName: 'Abdul Fatahillah',
  referrer: 'origin-when-cross-origin',
  keywords: ['Design', 'Develope', 'Freelance'],
  authors: [
    { name: 'Abdul Fatahillah', url: 'https://www.github.com/albdulsfat' },
  ],
  creator: 'Abdul Fatahillah',
  publisher: 'Abdul Fatahillah',
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Fatahillah',
    description:
      'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
    siteId: '1467726470533754880',
    creator: '@Fatahillah',
    creatorId: '1467726470533754880',
    images: {
      url: 'abdulfatahillah-screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
