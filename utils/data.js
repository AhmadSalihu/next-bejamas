const data = {
  products: [
    {
      name: 'Art',
      slug: 'art-works',
      category: 'artwork',
      description: 'The best unique red bench',
      price: 40.89,
      countInStock: 13,
      currency: 'USD',
      image: '/images/p8.jpeg',
      isFeatured: true,
      featuredImage: '/images/ft1.jpeg',
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      name: 'Red Bench',
      slug: 'red-bench',
      category: 'artwork',
      description: 'The best unique red bench that is comfort for ralaxing and charting with loves ones',
      price: 30,
      countInStock: 10,
      currency: 'USD',
      image: '/images/p6.jpeg',
      isFeatured: false,
      bestseller: true,
      featured: false,
      details: null,
    },
    {
      name: 'surfboard',
      slug: 'surfboar',
      description: "The Ballon EggA painter painting surfboard. It's price ranges from about $100-2500. And It's the best artwork you would fine.",
      category: 'food',
      price: 93.89,
      currency: 'USD',
      image: '/images/p1.jpeg',
      isFeatured: true,
      featuredImage: '/images/ft2.jpeg',
      bestseller: false,
      featured: false,
      details: null,
      countInStock: 15
    },
    {
      name: 'Artworkshop',
      slug: 'artworkshop',
      category: 'artwork',
      description: 'Artwork in Artworkshop',
      price: 40,
      currency: 'USD',
      image: '/images/p9.jpeg',
      bestseller: false,
      isFeatured: true,
      featuredImage: '/images/ft3.jpeg',
      details: null,
      countInStock: 20,
    },
    {
      name: 'Architecture',
      slug: 'architect',
      description: 'The architectural design that captures moment',
      category: 'artwork',
      price: 100,
      currency: 'USD',
      countInStock: 20,
      dimmentions: {
        width: 1020,
        height: 1020,
      },
      image: '/images/p4.jpeg',
      featured: false,
      isFeaturedImage: '/images/sp1.jpeg',
      details: null,
    },
    {
      name: 'Samurai King Restling',
      slug: 'samurai-king-restling',
      category: 'landmarks',
      price: 80,
      currency: 'USD',
      description: 'Samurai Sword King master',
      image: '/images/p5.jpeg',
      isFeatured: false,
      featuredImage: '/images/sp1.jpeg',
      countInStock: 15,
      bestseller: false,
      details: {
        dimmentions: {
          width: 1020,
          height: 1020,
        },
        size: 15000,
        description:
        'So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely',
        recommendations: [
          {
            image:
            '/images/sp1.jpeg',
          },
          {
            image:
            '/images/sp2.jpeg',
          },
          {
            image:
            '/images/sp3.jpeg',
          },
        ],
      },
    },
  ],
};




export default data;
