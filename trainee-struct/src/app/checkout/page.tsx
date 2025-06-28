"use client"

// ----------------------------------------------------------------
// 2. Page Component: `/pages/checkout.tsx`
// This page fetches data from the API route and displays the checkout.
// ----------------------------------------------------------------
import React, { useState, useEffect } from 'react';



const Icon = ({ path, className = 'w-6 h-6', strokeWidth = 1.5 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={strokeWidth} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const ProductItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
    {/* Left side: Image and Product Info */}
    <div className="flex items-center gap-4">
      {/* Product Image: Uses a placeholder service. The alt tag is important for accessibility. */}
      <img src={item.image} alt={item.name} className="w-16 h-16 bg-gray-200 rounded-md object-cover" />
      <div>
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="font-bold text-gray-800">R$ {item.price.toFixed(2)}</p>
      </div>
    </div>
    
    {/* Right side: Quantity controls and Remove button */}
    <div className="flex items-center gap-3">
      {/* Quantity changer */}
      <div className="flex items-center gap-2 bg-pink-50 border border-gray-200 rounded-md">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="p-1.5 text-gray-700 hover:bg-pink-100 rounded-l-md disabled:opacity-50"
          disabled={item.quantity <= 1} // Disable the button if quantity is 1
        >
          <Icon path="M18 12H6" className="w-4 h-4" />
        </button>
        <span className="px-3 py-1 bg-blue-50 text-sm font-semibold text-gray-800">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1.5 text-gray-700 hover:bg-pink-100 rounded-r-md"
        >
          <Icon path="M12 6v12m-6-6h12" className="w-4 h-4" />
        </button>
      </div>
      {/* Remove from cart button */}
      <button onClick={() => onRemove(item.id)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full">
        <Icon path="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.578 0h11.218c.622 0 1.148.448 1.253 1.07l.164 1.155" className="w-5 h-5" />
      </button>
    </div>
  </div>
);



export default function CheckoutPageWithDB() {
    // State for cart data, loading, and errors
    const [cart, setCart] = useState({ items: [], subtotal: 0, total: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch cart data from our API
    const fetchCart = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // In a real app, this would be '/api/cart/get'
            // We'll simulate a fetch call here for demonstration.
            // const response = await fetch('/api/cart/get');
            // if (!response.ok) {
            //     const errorData = await response.json();
            //     throw new Error(errorData.message || 'Failed to fetch cart');
            // }
            // const data = await response.json();
            
            // --- MOCK DATA FOR DEMO ---
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
            const data = {
                items: [
                    { id: 1, name: 'Caneta Rosa (from DB)', price: 10.00, quantity: 1, image: 'https://placehold.co/64x64/EAEAEA/333?text=Pen' },
                    { id: 2, name: 'Caderno Floral (from DB)', price: 15.00, quantity: 2, image: 'https://placehold.co/64x64/EAEAEA/333?text=Notebook' },
                ],
                subtotal: 40.00,
                total: 40.00,
            };
            // --- END MOCK DATA ---
            
            setCart(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    // Fetch data when the component mounts
    useEffect(() => {
        fetchCart();
    }, []);

    const handleUpdateQuantity = (id:number, newQuantity:number) => {
        // Here you would call an API to update the quantity in the database
        console.log(`Updating item ${id} to quantity ${newQuantity}`);
        // Then, you could either refetch the cart or update the state optimistically
        const updatedItems = cart.items.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        );
        const newSubtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setCart({
            items: updatedItems,
            subtotal: newSubtotal,
            total: newSubtotal
        });
    };

    const handleRemoveItem = (id: number) => {
        // Here you would call an API to remove the item from the database
        console.log(`Removing item ${id}`);
        const updatedItems = cart.items.filter(item => item.id !== id);
        const newSubtotal = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setCart({
            items: updatedItems,
            subtotal: newSubtotal,
            total: newSubtotal
        });
    };

    if (error) {
        return <div className="text-red-500 text-center p-8">{error}</div>;
    }
    
    return (
    <div className="bg-gray-800 min-h-screen p-4 sm:p-8 flex justify-center items-center font-sans">
      <div className="w-full max-w-4xl bg-[#F0F8FF] rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <a href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gradient-to-r from-purple-300 to-blue-300 rounded-md hover:opacity-90">
                <Icon path="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" className="w-5 h-5" />
                Voltar
            </a>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Carrinho</h1>
                <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-blue-800 bg-blue-200 rounded-full">
                    {cart.items.length}
                </span>
            </div>
        </header>

            <main className="p-6 sm:p-8 bg-[#FFE0EE]">
                {isLoading ? (
                     <div className="text-center py-10">Loading cart...</div>
                ) : (
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800">Seus Produtos</h2>
                        <div className="space-y-4">
                        {cart.items.map(item => (
                            <ProductItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemove={handleRemoveItem}
                            />
                        ))}
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumo do Pedido</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600">
                            <span>Subtotal ({cart.items.length} itens)</span>
                            <span>R$ {cart.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 my-2"></div>
                            <div className="flex justify-between font-bold text-xl text-gray-800">
                            <span>Total</span>
                            <span>R$ {cart.total.toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 hover:opacity-90 shadow-lg">
                            Finalizar Compra
                        </button>
                        </div>
                    </div>
                )}
            </main>
          </div>
        </div>
    );
}
