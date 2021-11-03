import React, { useEffect, useState } from "react";
import Faq from 'react-faq-component';

const data = {
  title: "FAQ",
  rows: [
    {
      title: "When was the mint date?",
      content: "Oct - 24 - 2021"      
    },
    {
      title: "How many monkettes are?",
      content: "3333 Monkettes."
    },
    {
      title: "What are our market places?",
      content: "<a href=\"https://magiceden.io/marketplace/solana_monkette_busines\"> Magic Eden,</a>\
                <a href=\"https://www.alpha.art/collection/solana-monkette-business\">AlphaArt</a> and\
               <a href=\"https://solanart.io/collections/solanamonkettebusiness\"> Solanart </a>"          
    },
    {
      title: "Where can we check the rarity?",
      content: "Visit: <a href=\"https://howrare.is/solanamonkettebusiness/\"> Howrare.is</a>"
      
    },
    {
      title: "What is our official Twitter/Discord?",
      content: "Visit: <a href=\"https://twitter.com/MonketteSolana \">Twitter</a> <a href=\"https://discord.gg/YQg2jM2xhy \"> Discord</a> "
      
    },
    {
      title: "Are you from the SMB team?",
      content: "We are not affiliated with, but we are inspired by them.\
                This project was created by <a href=\"https://twitter.com/VibingStudios\">Vibing Studios </a>(created by  <a href=\"https://twitter.com/0xbustos\">@0xbustos</a> a passionate MonkeDAO member) \
                we do not intend to harm the brand in any way, but to expand it 🙂"
    }]
};
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
        <br></br>
        {/*  */}
        <div className="bg-strong-pink rounded-lg p-3 w-full md:w-1/2 mx-auto mb-10 text-white">
          <Faq data={data}
             styles={{
              titleTextColor: "white",
              rowTitleColor: "white",
              rowContentColor: "white",
              bgColor: "#e77da0",
              rowTitleTextSize: '18px',
              rowContentTextSize: '16px',
              rowContentPaddingTop: '10px',
              rowContentPaddingBottom: '10px',
              rowContentPaddingLeft: '20px',
              rowContentPaddingRight: '150px',
              arrowColor: "white",
          }} 
          />
        </div>
        {/*  */}
      </div>
    </div>
  );
};


export default Home;
