import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyChocolate } from "../redux/index";

const HooksCakeContainer = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes);
  const numOfChocolates = useSelector(
    (state) => state.chocolate.numOfChocolates
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numofCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <h2>Number of chocolate - {numOfChocolates}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
