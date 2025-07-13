"use client"
// Import the 'useState' hook from React. This lets us create and manage state in our component.
import React, { useState } from 'react';

// --- Reusable Icon Component ---
// A small, reusable component for displaying SVG icons. This is great practice because
// we don't have to repeat the same SVG code everywhere we need an icon.
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

// --- Product Item Component ---
// This component represents a single item in the shopping cart. It receives data and functions
// as "props" from its parent component (CheckoutPageStatic).
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


// --- Main Checkout Page Component ---
export default function CheckoutPageStatic() {
  // --- State Management ---
  // 'useState' is a hook that creates a "state variable".
  // 'items' is our list of products in the cart.
  // 'setItems' is the *only* function we should use to update the list.
  // The initial value is an array of two product objects.
  const [items, setItems] = useState([
    { id: 1, name: 'Caneta Rosa', price: 10.00, quantity: 1, image: 'https://placehold.co/64x64/EAEAEA/333?text=Pen' },
    { id: 2, name: 'Caderno Floral', price: 15.00, quantity: 2, image: 'https://placehold.co/64x64/EAEAEA/333?text=Notebook' },
  ]);

  // --- Event Handlers ---
  // A function to update the quantity of a specific item.
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    // We only update if the new quantity is 1 or more.
    if (newQuantity > 0) {
      // We create a *new* array by mapping over the old one.
      // This is important in React - never change state directly!
      const updatedItems = items.map(item => 
        // If the item's id matches the one we want to update...
        item.id === id 
          // ...return a new object with the updated quantity.
          ? { ...item, quantity: newQuantity } 
          // ...otherwise, return the item as it was.
          : item
      );
      // We use our 'setItems' function to replace the old list with the new one.
      setItems(updatedItems);
    }
  };

  // A function to remove an item from the cart.
  const handleRemoveItem = (id:number) => {
    // We create a new array by filtering out the item we want to remove.
    const updatedItems = items.filter(item => item.id !== id);
    // And again, we use our 'setItems' function to update the state.
    setItems(updatedItems);
  };

  // --- Calculations ---
  // We calculate the subtotal by "reducing" the items array.
  // It starts at 0, and for each item, it adds (price * quantity) to the sum.
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal; // For now, the total is the same as the subtotal.

  // --- Rendered JSX ---
  // This is what the component will actually render to the screen.
  // It uses HTML-like syntax and Tailwind CSS classes for styling.
  return (
    <div className="bg-gray-800 min-h-screen  flex justify-center items-top font-sans">
      <div className="w-full bg-[#F0F8FF] rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <a href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gradient-to-r from-purple-300 to-blue-300 rounded-md hover:opacity-90">
                <Icon path="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" className="w-5 h-5" />
                Voltar
            </a>
            <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-gray-800">Carrinho</h1>
                <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-blue-800 bg-blue-200 rounded-full">
                    {items.length}
                </span>
            </div>
        </header>

        {/* Main Content Section */}
        <main className="p-6 sm:p-8 bg-[#FFE0EE]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Seus Produtos</h2>
            {/* We map over the 'items' array. For each item, we render a ProductItem component. */}
            <div className="space-y-4">
              {items.map(item => (
                <ProductItem
                  key={item.id} // The 'key' is a special prop React needs for lists.
                  item={item} // Pass the entire item object down.
                  onUpdateQuantity={handleUpdateQuantity} // Pass the update function down.
                  onRemove={handleRemoveItem} // Pass the remove function down.
                />
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Resumo do Pedido</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.length} itens)</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex justify-between font-bold text-xl text-gray-800">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 py-3 text-white font-bold rounded-lg bg-gradient-to-r from-purple-400 to-blue-400 hover:opacity-90 shadow-lg">
                Finalizar Compra
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}