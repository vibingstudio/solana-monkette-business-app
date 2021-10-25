import React from "react";
import { useParams } from "react-router-dom";
import { HallOfFame } from "./data";

const HallOfFameComponent = (): JSX.Element => {
  const { id } = useParams();

  const data = HallOfFame[id];

  if (!data) {
    return (
      <div className="flex-shrink-0 w-full">
        <div className="px-4 py-4">
          <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
            <h1 className="text-2xl my-10 text-center">
              {id} is not in the Hall of Fame
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-shrink-0 w-full">
        <div className="px-4 py-4">
          <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
            <h1 className="text-2xl my-2 text-center">Hall Of Fame</h1>
          </div>

          <div className="flex items-center justify-between">
            <div
              style={{ maxWidth: "1000px" }}
              className="mx-auto flex items-center justify-between w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <div className="text-center mx-auto">
                  <img
                    className="rounded-lg"
                    src={data.image}
                    alt="Solana Monkette Business"
                  />
                </div>
                <div
                  className="mx-auto w-full text-center rounded-lg bg-strong-pink m-4"
                  style={{ maxWidth: "500px" }}
                >
                  <div className="grid grid-cols-1 w-full my-5 px-2 gap-5">
                    <h1 className="text-xl mt-10 text-white">
                      {id.split("_").join(" ").toLocaleUpperCase()}
                    </h1>
                    <p className="px-5 py-2 text-white">{data.description}</p>
                    <p className="flex flex-row px-5 justify-center">
                      {data.social.map((s) => {
                        return (
                          <a href={s.url}>
                            <h1 className="text-white text-xl">
                              {s.network.toUpperCase()}
                            </h1>
                          </a>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white mt-10">
            <h1 className="text-2xl my-2 text-center">
              {id.split("_").join(" ").toLocaleUpperCase()} Collection
            </h1>
          </div>

          <div className="flex items-center justify-between">
            <div
              style={{ maxWidth: "1000px" }}
              className="mx-auto flex items-center justify-between w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-3">
                {data.monkettes.map((id) => {
                  return (
                    <a href={"/smbt/" + id}>
                      <img
                        className="rounded-lg mx-auto"
                        src={"/monkettes/" + id + ".png"}
                        alt="Solana Monkette Business"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HallOfFameComponent;
