import React, { useEffect, useState } from "react";
const Home = (): JSX.Element => {
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [image, setImage] = useState(
    "/monkettes/" + randomIntFromInterval(0, 3332) + ".png"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImage("/monkettes/" + randomIntFromInterval(0, 3332) + ".png");
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const [image2, setImage2] = useState(
    "/monkettes/" + randomIntFromInterval(0, 3332) + ".png"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImage2("/monkettes/" + randomIntFromInterval(0, 3332) + ".png");
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-shrink-0 w-full">
      <div className="px-4 py-4">
        <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
          <h1 className="text-2xl mb-2 text-center">
            Solana Monkette Business
          </h1>
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
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-10">
              <div className="text-center mx-auto">
                <img
                  className="rounded-lg"
                  src={image}
                  alt="Solana Monkette Business"
                />
              </div>
              <div className="text-center mx-auto">
                <img
                  className="rounded-lg"
                  src={image2}
                  alt="Solana Monkette Business"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
