// File location: src/app/api/cart/remove/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

// Zod schema for validating the incoming request body
const removeCartItemSchema = z.object({
  produtoId: z.number(),
});

/**
 * Handles DELETE requests to /api/cart/remove.
 * Removes a specific product from the user's cart.
 */
export async function DELETE(req: Request) {
  try {
    // 1. Authenticate the user session
    const session = await getServerAuthSession();
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Unauthorized: Not logged in' },
        { status: 401 }
      );
    }

    // 2. Parse and validate the request body
    const body = await req.json();
    const validation = removeCartItemSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { produtoId } = validation.data;

    // 3. Delete the item from the database
    // We use `deleteMany` to ensure the user can only delete their own items.
    const deletedItem = await db.carrinho.deleteMany({
      where: {
        usuarioId: session.user.id,
        produtoId: produtoId,
      },
    });
    
    // Check if an item was actually deleted
    if (deletedItem.count === 0) {
        return NextResponse.json(
            { message: 'Cart item not found or you do not have permission to delete it.' },
            { status: 404 }
        );
    }


    // 4. Return a success response
    return NextResponse.json(
      { message: 'Item removed from cart successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Failed to remove item from cart:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
