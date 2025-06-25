/**
 * This script seeds the database with initial data for testing.
 * To run this script, use the command: `npx prisma db seed`
 *
 * Make sure to define the `db seed` command in your `package.json`:
 * "prisma": {
 * "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
 * }
 */
import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // --- Create a sample User ---
  const user = await prisma.usuario.create({
    data: {
      nome: 'Usuário de Teste',
      email: 'teste@example.com',
      image: 'https://placehold.co/100x100/E8F4FD/374151?text=User',
      // The session time will default to now()
    },
  });
  console.log(`Created user with id: ${user.id}`);

  // --- Create sample Products ---
  const product1 = await prisma.produto.create({
    data: {
      nome: 'Caneta Rosa',
      preco: 10.0,
      descricao: 'Uma caneta esferográfica de tinta rosa.',
      imagem: 'https://placehold.co/64x64/EAEAEA/333?text=Pen',
    },
  });
  console.log(`Created product with id: ${product1.id}`);

  const product2 = await prisma.produto.create({
    data: {
      nome: 'Caderno Floral',
      preco: 15.0,
      descricao: 'Caderno de 96 folhas com uma bela capa floral.',
      imagem: 'https://placehold.co/64x64/EAEAEA/333?text=Notebook',
    },
  });
  console.log(`Created product with id: ${product2.id}`);
  
  // --- Populate the Cart for the sample User ---
  // Add 1 'Caneta Rosa' to the user's cart
  const cartItem1 = await prisma.carrinho.create({
      data: {
          usuarioId: user.id,
          produtoId: product1.id,
          quantidade: 1,
      }
  });
  console.log(`Created cart item with id: ${cartItem1.id}`);
  
  // Add 2 'Caderno Floral' to the user's cart
  const cartItem2 = await prisma.carrinho.create({
      data: {
          usuarioId: user.id,
          produtoId: product2.id,
          quantidade: 2,
      }
  });
  console.log(`Created cart item with id: ${cartItem2.id}`);
  
  console.log('Seeding finished.');
}

// Execute the main function and handle potential errors
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  });
