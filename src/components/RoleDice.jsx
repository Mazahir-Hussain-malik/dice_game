import React from "react";
import { useState } from "react";
const RoleDice = ({ currentDice, rollDice }) => {
  return (
    <>
      <div onClick={rollDice}>
        <img
          src={`./images/dice_${currentDice}.png`}
          alt="diceimage"
          className={`mx-auto my-4 transition-all  ease-in delay-150 `}
        />
      </div>
    </>
  );
};

export default RoleDice;
