// File location: src/app/api/cart/get/route.ts
// NOTE: This file demonstrates the structure for the Next.js App Router.

import { NextResponse } from 'next/server';
import { auth } from '@/server/auth';
import { db } from '@/server/db';

/**
 * Handles GET requests to /api/cart/get.
 * Fetches the user's shopping cart from the database.
 */
export async function GET() {
  try {
    // 1. Get user session.
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json(
        { message: 'Unauthorized: Not logged in' },
        { status: 401 }
      );
    }



    // 2. Check if the session is valid and not expired
    const userSession = await db.session.findFirst({
        where: {
            userId:  session.user.id, // Find the session for the logged-in user
            expires: {
                gt: new Date() // Check if the expiration date is greater than the current time
            }
        }
    });
    
    // If no active session is found, return an unauthorized error
    if (!userSession) {
        return NextResponse.json(
            { message: 'Unauthorized: Session has expired or is invalid. Please log in again.' },
            { status: 401 }
        );
    }


    // 3. Fetch cart items for the user from the database
    const cartItems = await db.carrinho.findMany({
      where: {
        usuarioId: session.user.id, // Use the corrected numeric ID
      },
      include: {
        produto: true, // Include the related product details
      },
    });

    // 4. Format the data for the frontend
    // The frontend expects the product's ID, not the cart item's ID.
    const formattedCart = cartItems.map(item => ({
      id: item.produto.id, // Pass the actual product ID
      name: item.produto.nome,
      price: item.produto.preco,
      quantity: item.quantidade,
      image: item.produto.imagem,
    }));
    
    const subtotal = formattedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // 5. Return the successful response
    return NextResponse.json({
      items: formattedCart,
      subtotal: subtotal,
      total: subtotal // Adjust if you have taxes/shipping
    });

  } catch (error) {
    console.error('Failed to fetch cart:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
