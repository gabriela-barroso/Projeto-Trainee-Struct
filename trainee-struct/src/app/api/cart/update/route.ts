// File location: src/app/api/cart/update/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

// Zod schema for validating the incoming request body
const updateCartItemSchema = z.object({
  produtoId: z.number(),
  quantidade: z.number().min(1, { message: "Quantity must be at least 1" }),
});

/**
 * Handles POST requests to /api/cart/update.
 * Updates the quantity of a specific product in the user's cart.
 */
export async function POST(req: Request) {
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
    const validation = updateCartItemSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { produtoId, quantidade } = validation.data;

    // 3. Update the item in the database
    // We use `updateMany` here with a `where` clause to ensure a user
    // can only update items that are actually in their own cart.
    const updatedItem = await db.carrinho.updateMany({
      where: {
        usuarioId: session.user.id,
        produtoId: produtoId,
      },
      data: {
        quantidade: quantidade,
      },
    });

    // Check if any item was actually updated
    if (updatedItem.count === 0) {
        return NextResponse.json(
            { message: 'Cart item not found or you do not have permission to edit it.' },
            { status: 404 }
        );
    }

    // 4. Return a success response
    return NextResponse.json(
      { message: 'Cart updated successfully', item: { produtoId, quantidade } },
      { status: 200 }
    );

  } catch (error) {
    console.error('Failed to update cart:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
