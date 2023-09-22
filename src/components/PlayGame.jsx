import React from "react";
import { useState } from "react";
import RoleDice from "./RoleDice";

const PlayGame = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const Numbers = [1, 2, 3, 4, 5, 6];

  //role dice function

  let audio = new Audio("./sound/dicesound.mp3");

  const generateNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    const randomNumber = generateNumber(1, 7);
    setCurrentDice(randomNumber);
    console.log(`the dice value is ${randomNumber} `);
    console.log(`the selected value is ${selectedValue}`);
    setError("");
    if (!selectedValue) {
      setError("Please select the value");
      // setCurrentDice(0);
    }
    if (randomNumber === selectedValue) {
      setScore(score + selectedValue);
    } else {
      setScore(score - selectedValue);
    }
    audio.play();
    setRotate(rotate + 180);
  };

  return (
    <>
      <main>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="md:text-start text-center">
            <h2 className="text-[100px] font-semibold text-[#000]">{score}</h2>
            <span className="text-[28px] font-semibold text-[#000]">
              total scores
            </span>
          </div>
          <div>
            <p className="text-red-600 text-[24px] font-semibold text-end my-2">
              {error}
            </p>
            <ul className="grid md:grid-cols-6 grid-cols-3 md:gap-6 gap-2">
              {Numbers.map((value, i) => {
                return (
                  <>
                    <ul key={i}>
                      <li
                        className={`border-2 border-[#000] p-6 text-[24px] font-semibold  transition-all ease-in delay-200 cursor-pointer ${
                          selectedValue === value ? "bg-black text-white" : ""
                        }`}
                        onClick={() => {
                          setSelected(value);
                          setSelectedValue(value);
                        }}
                      >
                        {value}
                      </li>
                    </ul>
                  </>
                );
              })}
            </ul>
            <h2 className="text-[30px] font-bold text-[#000] md:text-end text-center my-6 ">
              select number
            </h2>
          </div>
        </div>
        <div className="lg:w-[30%] md:w-[45%] w-[90%] mx-auto border p-6 shadow-2xl">
          <div>
            <h2 className="text-[24px] text-[#000] font-semibold leading-4">
              Click on Dice to roll
            </h2>
            <RoleDice currentDice={currentDice} rollDice={rollDice} />
            <button
              className="w-full text-[24px] font-semibold text-[#000] rounded-lg border-2  hover:bg-[#000] hover:text-[#FFF] transition-all ease-linear delay-200 my-4 py-2 "
              onClick={() => setScore(0)}
            >
              Reset Score
            </button>
            <button
              className="w-full text-[24px] font-semibold text-[#fff] bg-[#000] rounded-lg border-2 hover:bg-[#fff] hover:text-[#000] transition-all ease-linear delay-200 my-4 py-2"
              onClick={() => setShow(!show)}
            >
              Show Rules
            </button>
          </div>
        </div>

        <div
          className={`bg-[#FBF1F1] relative p-8 my-10 shadow-2xl md:w-[65%] w-[95%] mx-auto text-start ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="">
            <h2 className="text-[30px] font-semibold ">
              How to play dice game
            </h2>
            <p className="text-[16px] text-[#000] font-semibold my-2">
              Select any number
            </p>
            <p className="text-[16px] text-[#000] font-semibold my-2">
              Click on dice image
            </p>
            <p className="text-[16px] text-[#000] font-semibold my-2">
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </p>
            <p className="text-[16px] text-[#000] font-semibold my-2">
              if you get wrong guess then 2 point will be dedcuted
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default PlayGame;
