import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyChocolate } from "../redux/index";

const NewCakeContainer = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes);

  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numofCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {Number} Cake
      </button>
    </div>
  );
};

export default NewCakeContainer;
