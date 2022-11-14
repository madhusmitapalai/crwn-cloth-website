import { createContext, useState, useEffect } from "react";
//clear cart
const clearCartItem=(cartItems,cartItemToClear)=>{
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

}
//
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
//remove cartd item from the cardicon
const RemoveCartItem = (cartItems, cartItemToRemove) => {
  //find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  //check if quantity is eqall to 1,if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
  rempoveItemFromCart: () => {},
  cartCleatFromCart:()=>{},
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const[cartTotal,setCartTotal]=useState(0)

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);
  ///totalcartItem
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity  * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
//add item to the cart
  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
//remove item from the cart
  const rempoveItemFromCart = (productToRemove) =>
    setCartItems(RemoveCartItem(cartItems, productToRemove));
//remove from the cart
const cartItemToClear=(productToRemove)=>[
  setCartItems(clearCartItem(cartItems,productToRemove))
]
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    rempoveItemFromCart,
    cartItemToClear,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
