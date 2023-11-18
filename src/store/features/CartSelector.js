import { createSelector } from "@reduxjs/toolkit";

export const cartsItem = (state) => state.cart.items;

export const totalCartItem = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.quantity));
  }
  return total;
});

export const totalPrice = createSelector(cartsItem, (items) => {
  let total = 0;
  if (items) {
    items.map((i) => (total += i.price * i.quantity));
  }
  return total.toFixed(2);
});