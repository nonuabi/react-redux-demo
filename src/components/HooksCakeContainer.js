import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/index";

const HooksCakeContainer = () => {
  const numofCakes = useSelector((state) => state.numofCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numofCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
