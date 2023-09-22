import React from "react";
import dice1 from "../assets/images/dices_1.svg";
import "../App.css";

const StartGame = ({ toggle }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 my-4 w-[90%] mx-auto rotaionclass">
        <div>
          <img src={dice1} alt="dice1" />
        </div>
        <div className="my-auto">
          <h2 className="lg:text-[96px] md:text-[60px] text-[45px] font-semibold">
            DICE GAME
          </h2>
          <button
            className="bg-[#000] text-[16px] font-semibold leading-4 py-6 text-[#FFF] w-[50%] mr-0 transition-all ease-linear hover:bg-[#FFF] hover:text-[#000] hover:border-2 hover:border-[#000] my-2 ml-4 rounded-lg"
            onClick={() => toggle()}
          >
            play now
          </button>
        </div>
      </div>
    </>
  );
};

export default StartGame;
