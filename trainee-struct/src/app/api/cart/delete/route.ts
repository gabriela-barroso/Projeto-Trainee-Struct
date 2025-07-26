// File location: src/app/api/cart/delete/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { auth } from '@/server/auth';
import { db } from '@/server/db';

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
    // 1. Get user session.
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Unauthorized: Not logged in' },
        { status: 401 }
      );
    }

    // 2. Validate that the user's session is active and not expired.
    const userSession = await db.session.findFirst({
        where: {
            userId: session.user.id,
            expires: { gt: new Date() } // Check if 'expires' is greater than now
        }
    });
    
    if (!userSession) {
        return NextResponse.json(
            { message: 'Unauthorized: Session has expired or is invalid. Please log in again.' },
            { status: 401 }
        );
    }

    // 3. Parse and validate the request body
    const body = await req.json();
    const validation = removeCartItemSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: 'Invalid input', errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { produtoId } = validation.data;

    // 4. Delete the item from the database using the session user ID
    const deletedItem = await db.carrinho.deleteMany({
      where: {
        usuarioId: session.user.id, // Use the session user ID
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

    // 5. Return a success response
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
