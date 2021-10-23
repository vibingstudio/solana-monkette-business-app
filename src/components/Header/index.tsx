import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = (): JSX.Element => {
  return (
    <header className="flex-shrink-0 w-full bg-strong-pink w-screen">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            style={{ maxWidth: "1000px" }}
            className="mx-auto flex items-center justify-between w-full cursor-pointer"
          >
            <img
              className="rounded-lg"
              src="/logo.jpeg"
              width="50px"
              height="50px"
              alt="Solana Monkette Business | Solana Queen"
            />
            <WalletMultiButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
