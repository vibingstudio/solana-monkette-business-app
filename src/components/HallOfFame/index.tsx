import React from "react";
import { useParams } from "react-router-dom";
import { HallOfFame } from "./data";

const HallOfFameComponent = (): JSX.Element => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="px-4 py-4">
        <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
          <h1 className="text-2xl my-10 text-center">Monkette Hall Of Fame</h1>
        </div>
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-3">
              {Object.keys(HallOfFame).map((k) => {
                return (
                  <a href={"/hall-of-fame/" + k}>
                    <div className="text-center">
                      <img
                        className="rounded-lg mx-auto"
                        src={HallOfFame[k].image}
                        alt="Solana Monkette Business"
                      />
                      <div className="bg-strong-pink rounded-lg mt-2 p-2">
                        <h1 className="text-white">
                          {k.split("_").join(" ").toLocaleUpperCase()}
                        </h1>
                        <p className="text-white">
                          {HallOfFame[k].description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameComponent;
