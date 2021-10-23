import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { WalletBalanceProvider } from "./hooks/useWalletBalance";
import WalletConnectionProvider from "./components/WalletConnectionProvider";

ReactDOM.render(
  <React.StrictMode>
    <WalletConnectionProvider>
      <WalletBalanceProvider>
        <div className="flex flex-col justify-between h-screen">
          <Header />
          <Body />
          <Footer />
        </div>
      </WalletBalanceProvider>
    </WalletConnectionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
