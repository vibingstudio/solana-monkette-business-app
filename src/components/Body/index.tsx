import React, { useEffect, useState } from "react";
import { useConnectedWallet } from "@saberhq/use-solana";
import { DisconnectWalletButton } from "../Buttons";
import { ConnectWalletButton } from "@gokiprotocol/walletkit";

const Body = (): JSX.Element => {
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const images = [
    "monkettes/1.jpeg",
    "monkettes/2.jpeg",
    "monkettes/3.jpeg",
    "monkettes/4.jpeg",
  ];

  const [image, setImage] = useState(images[randomIntFromInterval(0, 3)]);

  useEffect(() => {
    console.log("useEffect")
    setInterval(() => {
      const rand = randomIntFromInterval(0, 3);
      setImage(images[rand]);
    }, 5000);
  }, []);

  return (
    <div className="flex-shrink-0 w-full w-screen">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="text-center">
                <img
                  className="rounded-lg"
                  src={image}
                  width="383px"
                  height="383px"
                  alt="Solana Monkette Business"
                />
              </div>
              <div className="text-center rounded-lg bg-strong-pink m-4">
                <h1 className="text-xl mt-10 text-white">
                  Solana Monkettes Business
                </h1>
                <p className="px-9 py-2 text-white">
                  3333 generative female NFTs inspired by <b>@SolanaMBS</b> and{" "}
                  <b>@MonkeDAO</b>
                </p>
                <p className="px-9 py-2 text-white">
                  Airdropped to SMB users that meet the requirements.
                </p>
                <p className="px-9 py-2 text-white">
                  30% of mints donated to the @MonkeDAO
                </p>
                <div className="text-center bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto mt-2">
                  <button className="p-2 opacity-50 cursor-not-allowed">
                    <h1>Coming Soon</h1>
                  </button>
                </div>
                <div className="text-center bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto mt-2">
                  <button className="p-2">
                    <h1>Marketplace</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
