import React from "react";
import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
  const numofCakes = useSelector((state) => state.numofCakes);
  return (
    <div>
      <h2>Number of Cakes - {numofCakes}</h2>
      <button>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
