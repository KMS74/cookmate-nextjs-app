/* eslint-disable no-console */
// seed.js
import { PrismaClient } from '@prisma/client';
import { users, categories, recipes, ratings } from '../../data/dummy-data';

const prisma = new PrismaClient();

async function seed() {
  try {
    // seed the database with users, categories, recipes, and ratings
    await prisma.user.createMany({ data: users });
    await prisma.category.createMany({ data: categories });
    await prisma.recipe.createMany({ data: recipes });
    await prisma.rating.createMany({ data: ratings });
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seed();
