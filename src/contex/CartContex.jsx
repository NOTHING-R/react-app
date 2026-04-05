import { createContext, useContext, useState } from "react";
import { getProductsById } from "../data/products";
const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cartItem, setCartItem] = useState([]);

    function addToCart(productId) {
        const exixting = cartItem.find(p => p.id === productId)
        if (exixting) {

            const currentQuantity = exixting.quantity;
            const updatedCartItems = cartItem.map((item) =>
                item.id === productId ? { id: productId, quantity: currentQuantity + 1 } : item
            );
            setCartItem(updatedCartItems);
        } else {
            setCartItem([...cartItem, { id: productId, quantity: 1 }])
        }

    }
    function getCartItemsWithProducts() {
        return cartItem
            .map((item) => ({
                ...item,
                product: getProductsById(item.id),
            }))
            .filter((item) => item.product);
    };


    function removeFromCart(productId) {
        setCartItem(cartItem.filter((item) => item.id !== productId));
    }

    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItem(
            cartItem.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    }

    function getCartTotal() {
        const total = cartItem.reduce((total, item) => {
            const product = getProductsById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
        return total;
    }

    function clearCart() {
        setCartItem([]);
    }

    return <CartContext.Provider value={{ cartItem, addToCart, getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal,clearCart}}>{children}</CartContext.Provider>
};

export function useCart() {
    const contex = useContext(CartContext)
    return contex;
}