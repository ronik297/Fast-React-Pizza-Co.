import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseCartQuantity, increaseCartQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseCartQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-bold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseCartQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
