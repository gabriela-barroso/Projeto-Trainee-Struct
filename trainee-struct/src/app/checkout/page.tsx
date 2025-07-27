"use client";

import { api } from "@/trpc/react";
import { TrashIcon, MinusIcon, PlusIcon, ReturnIcon } from "../_components/icons";


// Define the type for a item in the cart
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the overall structure of the data returned by the getCart tRPC procedure
interface CartData {
  items: CartItem[];
  subtotal: number;
  total: number;
}

const ProductItem = ({ item, onUpdateQuantity, onRemove }: {
  item: CartItem; // Use the defined CartItem type
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}) => (
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
          <MinusIcon className="w-4 h-4" />
        </button>
        <span className="px-3 py-1 bg-blue-50 text-sm font-semibold text-gray-800">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1.5 text-gray-700 hover:bg-pink-100 rounded-r-md"
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
      {/* Remove from cart button */}
      <button onClick={() => onRemove(item.id)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full">
        <TrashIcon className="w-6 h-6"/>
      </button>
    </div>
  </div>
);


export default function CheckoutPage() {
  // Use useQuery hook for fetching cart data.
  const { data: cart, isLoading, error, refetch } = api.cart.getCart.useQuery<CartData>();

  // Updating cart items
  const updateItemMutation = api.cart.updateItem.useMutation({
    onSuccess: () => {
      refetch(); // Refetch cart after successful update
    },
    onError: (err) => {
      console.error('Failed to update item quantity:', err.message);
    },
  });

  // Mutation hook for removing cart items
  const removeItemMutation = api.cart.removeItem.useMutation({
    onSuccess: () => {
      refetch(); // Refetch cart after successful removal
    },
    onError: (err) => {
      console.error('Failed to remove item:', err.message);
    },
  });

  const handleUpdateQuantity = async (produtoId: number, newQuantity: number) => {
    // Check if the mutation is currently running to prevent multiple clicks
    if (updateItemMutation.isPending) return;

    // Call the tRPC mutation
    updateItemMutation.mutate({ produtoId: produtoId, quantidade: newQuantity });
  };

  const handleRemoveItem = async (produtoId: number) => {
    // Check if the mutation is currently running
    if (removeItemMutation.isPending) return;

    // Call the tRPC mutation
    removeItemMutation.mutate({ produtoId: produtoId });
  };

  if (error) {
    return <div className="text-red-500 text-center p-8">{error.message}</div>;
  }

  // Ensure cart data is available before rendering if not loading
  // Use optional chaining (`?.`) when accessing properties of `cart`
  // as `cart` can be `undefined` initially or during loading states.
  if (!cart && !isLoading) {
    return <div className="text-gray-500 text-center p-8">No cart data available.</div>;
  }

  return (
    <div className="bg-gray-800 flex items-center font-sans">
      <div className="w-full bg-[#F0F8FF] rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <a href="/" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gradient-to-r from-purple-300 to-blue-300 rounded-md hover:opacity-90">
            <ReturnIcon  className="w-5 h-5" />
            Voltar
          </a>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-gray-800">Carrinho</h1>
            <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-blue-800 bg-blue-200 rounded-full">
              {/* Use optional chaining and provide a default value for safety */}
              {cart?.items.length || 0}
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
                {/* Use optional chaining when mapping over items */}
                {cart?.items.map(item => (
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
                    {/* Use optional chaining and provide default values */}
                    <span>Subtotal ({cart?.items.length || 0} itens)</span>
                    <span>R$ {cart?.subtotal.toFixed(2) || '0.00'}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold text-xl text-gray-800">
                    <span>Total</span>
                    {/* Use optional chaining and provide default values */}
                    <span>R$ {cart?.total.toFixed(2) || '0.00'}</span>
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