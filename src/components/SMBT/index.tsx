import React from "react";
import { useParams } from "react-router-dom";

const SMBT = (): JSX.Element => {
  const { id } = useParams();

  const attr = require("../../../public/monkettes/" + id + ".json");

  return (
    <div className="flex-shrink-0 w-full">
      <div className="px-4 py-4">
        <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
          <h1 className="text-2xl mb-2 text-center">Solana Monkette #{id}</h1>
          <p className="px-9 mb-2 text-center">
            3333 generative female NFTs inspired by{" "}
            <b>Solana Monkey Business</b> and the <b>MonkeDAO</b>
          </p>
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
                  src={"/monkettes/" + id + ".png"}
                  alt="Solana Monkette Business"
                />
              </div>
              <div
                className="mx-auto w-full text-center rounded-lg bg-strong-pink m-4"
                style={{ maxWidth: "500px" }}
              >
                <div className="grid grid-cols-2 w-full my-5 px-2 gap-5">
                  {attr.attributes.map((a) => {
                    return (
                      <div className="border-white rounded-lg border-2 p-2">
                        <h1 className="text-white">{a.trait_type}</h1>
                        <p className="text-white">{a.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMBT;
