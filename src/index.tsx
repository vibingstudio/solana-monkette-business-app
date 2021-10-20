import React from "react";
import ReactDOM from "react-dom";
import {
  ConnectWalletButton,
  WalletKitProvider,
} from "@gokiprotocol/walletkit";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <WalletKitProvider
      defaultNetwork="mainnet-beta"
      app={{
        name: "My App",
      }}
    >
      <div />
      <ConnectWalletButton />
    </WalletKitProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
