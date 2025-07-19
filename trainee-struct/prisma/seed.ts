import { PrismaClient } from '@prisma/client';

// Instantiate Prisma Client
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // --- Create a sample User FIRST ---
  const user = await prisma.user.create({
    data: {
      name: 'Usuário de Teste',
      email: 'teste@example.com',
      image: 'https://placehold.co/100x100/E8F4FD/374151?text=User',
      emailVerified: new Date(),
    },
  });
  console.log(`Created user with id: ${user.id}`);

  // --- Create a sample Account and connect it to the created User ---
  const account = await prisma.account.create({
    data: {
      userId: user.id, 
      type: 'oauth',   
      provider: 'google',
      providerAccountId: "1234567890",

    },
  });
  console.log(`Created Account with id: ${account.id}`);


  // --- Create sample Products ---
  const product1 = await prisma.produto.create({
    data: {
      nome: 'Caneta Rosa',
      preco: 10.0,
      descricao: 'Uma caneta esferográfica de tinta rosa.',
      especificacoes: 'Marca bic, ponta fina...',
      imagem: 'https://placehold.co/64x64/EAEAEA/333?text=Pen',
    },
  });
  console.log(`Created product with id: ${product1.id}`);

  const product2 = await prisma.produto.create({
    data: {
      nome: 'Caderno Floral',
      preco: 15.0,
      descricao: 'Caderno de 96 folhas com uma bela capa floral.',
      especificacoes: 'Marca tilibra, capa dura...',
      imagem: 'https://placehold.co/64x64/EAEAEA/333?text=Notebook',
    },
  });
  console.log(`Created product with id: ${product2.id}`);

  // --- Populate the Cart for the sample User ---
  // Add 1 'Caneta Rosa' to the user's cart
  const cartItem1 = await prisma.carrinho.create({
      data: {
          usuarioId: user.id,      // Use the actual ID of the created user
          produtoId: product1.id,
          quantidade: 1,
      }
  });
  console.log(`Created cart item with id: ${cartItem1.id}`);

  // Add 2 'Caderno Floral' to the user's cart
  const cartItem2 = await prisma.carrinho.create({
      data: {
          usuarioId: user.id,      // Use the actual ID of the created user
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