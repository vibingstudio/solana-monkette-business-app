import React, { useEffect, useState } from "react";
import useCandyMachine from "../../hooks/useCandyMachine";
import toast from "react-hot-toast";

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
    const interval = setInterval(() => {
      const rand = randomIntFromInterval(0, 3);
      setImage(images[rand]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { isSoldOut, nftsData, onMint, isMinting } = useCandyMachine();

  return (
    <div className="flex-shrink-0 w-full w-screen">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
              <div className="text-center mx-auto">
                <img
                  className="rounded-lg"
                  src={image}
                  alt="Solana Monkette Business"
                />
              </div>
              <div
                className="mx-auto w-full text-center rounded-lg bg-strong-pink m-4"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="text-xl mt-10 text-white">
                  Solana Monkettes Business
                </h1>
                <p className="px-9 py-2 text-white">
                  3333 generative female NFTs inspired by{" "}
                  <b>Solana Monkey Business</b> and the <b>Monke DAO</b>
                </p>
                <p className="px-9 py-2 text-white">
                  Airdropped to <b>Solana Monkey Business</b> owners that meet
                  the requirements at a random snapshot.
                </p>
                <p className="px-9 py-2 text-white">
                  30% of mints donated to the <b>Monke DAO</b>
                </p>
                <p className="px-9 py-2 text-white">
                  0 of 3333 Monkette Available
                </p>
                {isSoldOut ? (
                  <div className="text-center bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto my-2">
                    <button className="p-2 opacity-50 cursor-not-allowed">
                      <h1>Sold Out</h1>
                    </button>
                  </div>
                ) : isMinting ? (
                  <div className="text-center animate-pulse cursor-not-allowed bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto my-2">
                    <button className="p-2">
                      <h1>Minting</h1>
                    </button>
                  </div>
                ) : (
                  <div className="text-center cursor-not-allowed opacity-50 bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto my-2">
                    <h1>Coming soon</h1>
                  </div>
                )}
                <div className="text-center bg-pink text-xl border-white border-2 rounded-lg w-48 mx-auto my-2">
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
