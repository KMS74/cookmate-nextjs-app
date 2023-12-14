export const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    username: 'John Doe',
    email: 'john@example.com',
    password: '123456',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442b',
    username: 'Jane Smith',
    email: 'jane@example.com',
    password: '12345678',
  },
];

export const categories = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6447g',
    name: 'Desserts',
    description: 'Sweet treats for every occasion',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6447h',
    name: 'Healthy',
    description: 'Healthy recipes for a balanced diet',
  },
];

export const recipes = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    title: 'Chocolate Cake',
    ingredients: ['flour', 'sugar', 'cocoa', 'butter', 'eggs'],
    steps: ['Preheat oven', 'Mix ingredients', 'Bake for 30 minutes'],
    cookingTime: 30,
    imageUrls: [
      'https://example.com/chocolate-cake-1.jpg',
      'https://example.com/chocolate-cake-2.jpg',
      'https://example.com/chocolate-cake-3.jpg',
    ],
    authorId: users[0].id,
    categoryId: categories[0].id,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442b',
    title: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
    steps: ['Boil spaghetti', 'Cook beef and sauce', 'Combine'],
    cookingTime: 45,
    imageUrls: [
      'https://example.com/spaghetti-bolognese-1.jpg',
      'https://example.com/spaghetti-bolognese-2.jpg',
    ],
    authorId: users[1].id,
    categoryId: categories[1].id,
  },
];

export const ratings = [
  {
    id: '3958dc9e-712f-4388-85e9-fec4b6a6442a',
    value: 4,
    recipeId: recipes[0].id,
    userId: users[0].id,
  },
  {
    id: '3958dc9e-712f-4399-85e9-fec4b6a6442b',
    value: 5,
    recipeId: recipes[1].id,
    userId: users[1].id,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442c',
    value: 3,
    recipeId: recipes[1].id,
    userId: users[0].id,
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442d',
    value: 5,
    recipeId: recipes[0].id,
    userId: users[1].id,
  },
];
