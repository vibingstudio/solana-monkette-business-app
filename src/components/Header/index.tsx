import React from "react";
import { useConnectedWallet } from "@saberhq/use-solana";
import { DisconnectWalletButton } from "../Buttons";
import { ConnectWalletButton } from "@gokiprotocol/walletkit";

const Header = (): JSX.Element => {
  const wallet = useConnectedWallet();

  return (
    <header className="flex-shrink-0 w-full z-30 bg-strong-pink w-screen">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between z-10 w-full cursor-pointer"
          >
            <img
              className="rounded-lg"
              src="/logo.jpeg"
              width="50px"
              height="50px"
              alt="Solana Monkette Business | Solana Queen"
            />
            {wallet ? <DisconnectWalletButton /> : <ConnectWalletButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
