// File location: src/app/api/cart/get/route.ts
// NOTE: This file demonstrates the structure for the Next.js App Router.

import { NextResponse } from 'next/server';
import { getServerAuthSession } from '~/server/auth';
import { db } from '~/server/db';

/**
 * Handles GET requests to /api/cart/get.
 * Fetches the user's shopping cart from the database.
 */
export async function GET() {
  try {
    // 1. Get user session. The method is slightly different in the App Router.
    const session = await getServerAuthSession();
    if (!session?.user) {
      // For the App Router, we use NextResponse to send JSON responses.
      return NextResponse.json(
        { message: 'Unauthorized: Not logged in' },
        { status: 401 }
      );
    }

    // 2. Check if the session is recent (less than 30 minutes old)
    const sessionMaxAge = 30 * 60 * 1000; // 30 minutes in milliseconds
    // Assuming 'session' on the user model is updated on login
    const userWithSession = await db.usuario.findUnique({
        where: { id: session.user.id },
        select: { session: true },
    });
    
    if(!userWithSession) {
        return NextResponse.json(
            { message: 'Unauthorized: User not found' },
            { status: 401 }
        );
    }

    const sessionAge = Date.now() - new Date(userWithSession.session).getTime();

    if (sessionAge > sessionMaxAge) {
      return NextResponse.json(
        { message: 'Unauthorized: Session expired. Please log in again.' },
        { status: 401 }
      );
    }

    // 3. Fetch cart items for the user from the database
    const cartItems = await db.carrinho.findMany({
      where: {
        usuarioId: session.user.id,
      },
      include: {
        produto: true, // Include the related product details
      },
    });

    // 4. Format the data for the frontend
    const formattedCart = cartItems.map(item => ({
      id: item.id,
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
    // Log the error for debugging on the server
    console.error('Failed to fetch cart:', error);
    // Return a generic error response
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
