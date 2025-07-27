import { z } from 'zod';
import { protectedProcedure, publicProcedure, createTRPCRouter } from '@/server/api/trpc'; // Assuming you have tRPC setup in trpc.ts
import { db } from '@/server/db';
import { TRPCError } from '@trpc/server';


const removeCartItemSchema = z.object({
  produtoId: z.number(),
});

const updateCartItemSchema = z.object({
  produtoId: z.number(),
  quantidade: z.number().min(1, { message: "Quantity must be at least 1" }),
});

export const cartRouter = createTRPCRouter({

// Remove itens from cart
  removeItem: protectedProcedure 
    .input(removeCartItemSchema) 
    .mutation(async ({ ctx, input }) => { 
      const session = ctx.session;

      // 1. Get user session (already available via ctx.session from protectedProcedure)
      if (!session?.user) {
        // This check is often handled by protectedProcedure itself,
        // but explicit checks can be added if needed for specific scenarios.
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized: Not logged in',
        });
      }

      const { produtoId } = input; 

      // 2. Delete the item from the database using the session user ID
      const deletedItem = await db.carrinho.deleteMany({
        where: {
          usuarioId: session.user.id,
          produtoId: produtoId,
        },
      });

      // Check if an item was actually deleted
      if (deletedItem.count === 0) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Cart item not found or you do not have permission to delete it.',
        });
      }

      return { message: 'Item removed from cart successfully' };
    }),

    // Update itens quantity
    updateItem: protectedProcedure 
    .input(updateCartItemSchema) 
    .mutation(async ({ ctx, input }) => { 
      const session = ctx.session;

      // 1. Get user session (already available via ctx.session from protectedProcedure)
      if (!session?.user) {
        // This check is often handled by protectedProcedure itself,
        // but explicit checks can be added if needed for specific scenarios.
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized: Not logged in',
        });
      }

      const { produtoId, quantidade } = input; 

      // 2. Update the item from the database using the session user ID
      const updatedItem = await db.carrinho.updateMany({
        where: {
          usuarioId: session.user.id,
          produtoId: produtoId,
        },
        data: {
        quantidade: quantidade,
      },
      });

      // Check if an item was actually updated
      if (updatedItem.count === 0) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Cart item not found or you do not have permission to update it.',
        });
      }

      return { message: 'Cart item quantity updated successfully' };
    }),

  // Get cart items 
  getCart: protectedProcedure 
    .query(async ({ ctx }) => { 
      const session = ctx.session; 

      // 1. Get user session
      if (!session?.user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Unauthorized: Not logged in',
        });
      }

      // Fetch cart items for the user from the database 
      const cartItems = await db.carrinho.findMany({
        where: {
          usuarioId: session.user.id, // Use the session user ID
        },
        include: {
          produto: true, // Include the related product details
        },
      });

      // Format the data for the frontend 
      const formattedCart = cartItems.map(item => ({ 
        id: item.produto.id, 
        name: item.produto.nome, 
        price: item.produto.preco,
        quantity: item.quantidade, 
        image: item.produto.imagem, 
      }));

      const subtotal = formattedCart.reduce((sum, item) => sum + item.price * item.quantity, 0); 

      return {
        items: formattedCart,
        subtotal: subtotal,
        total: subtotal 
      };
    }),
});