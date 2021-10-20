import React from "react";
import { useConnectedWallet } from "@saberhq/use-solana";
import { DisconnectWalletButton } from "../Buttons";
import { ConnectWalletButton } from "@gokiprotocol/walletkit";

const Body = (): JSX.Element => {
  return (
    <div className="flex-shrink-0 w-full z-30 w-screen">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between z-10 w-full cursor-pointer"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
