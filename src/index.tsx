import React from "react";
import ReactDOM from "react-dom";
import { WalletKitProvider } from "@gokiprotocol/walletkit";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

ReactDOM.render(
  <React.StrictMode>
    <WalletKitProvider
      defaultNetwork="mainnet-beta"
      app={{
        name: "Solana Monkette Business",
      }}
    >
      <div className="flex flex-col justify-between h-screen">
        <Header />
        <Body />
        <Footer />
      </div>
    </WalletKitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
