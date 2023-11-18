  import { createSlice } from '@reduxjs/toolkit';

  const loadCartItemsFromLocalStorage = () => {
    try {
      const cartItemsJSON = localStorage.getItem("cartItems");
      if (cartItemsJSON) {
        return JSON.parse(cartItemsJSON);
      }
    } catch (error) {
      console.error("Error loading cart items from local storage:", error);
    }
    return [];
  };

  const findCartItemIndex = (cartItems, newItem) => {
    return cartItems.findIndex(item => item.id === newItem.id && item.size === newItem.size);
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      items: loadCartItemsFromLocalStorage(),
    },
    reducers: {
      addToCart: (state, action) => {
        const existingIndex = state.items.findIndex(
          (item) =>( item.id=== action.payload.id && item.name=== action.payload.name)
        );
          
        if (existingIndex >= 0) {
          state.items[existingIndex] = {
            ...state.items[existingIndex],
            quantity: state.items[existingIndex].quantity + 1,
          };
        } else {
          let tempProductItem = { ...action.payload, quantity: 1 };
          state.items.push(tempProductItem);
        }
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      },
      removeFromCart: (state, action) => {

        const itemToRemove = action.payload;
        state.items = state.items.filter(item => item.id !== itemToRemove.id);
        
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      },

      increaseQuantity: (state, action) => {
        const { id, size } = action.payload;
        const existingItem = state.items.find(
          (item) => item.id === id 
        );
  
        if (existingItem) {
          existingItem.quantity += 1;
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        }
      },
      decreaseQuantity: (state, action) => {
        const { id, size } = action.payload;
        const existingItemIndex = state.items.findIndex(
        (item) => item.id === id );
    
        if (existingItemIndex !== -1) {
            const existingItem = state.items[existingItemIndex];

            if (existingItem.quantity >= 2) {
            existingItem.quantity -= 1;
            } else {
            state.items.splice(existingItemIndex, 1);
            }

            localStorage.setItem("cartItems", JSON.stringify(state.items));
        }
            },
        clearCart: (state) => {
                state.items = [];
                localStorage.removeItem("cartItems");
              }
        },
        
    });
  export const { addToCart, removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = cartSlice.actions;
  export default cartSlice.reducer;