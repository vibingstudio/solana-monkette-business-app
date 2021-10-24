import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Popover } from "@headlessui/react";

const Header = (): JSX.Element => {
  function rarity(): JSX.Element {
    return (
      <div className="p-2 w-20 text-center text-white mx-3 text-xl">
        <a
          href="https://moonrank.app/collection/solanamonkettebusiness"
          target="_blank"
          rel="noreferrer"
        >
          <h1>Rarity</h1>
        </a>
      </div>
    );
  }

  function market(): JSX.Element {
    return (
      <div className="p-2 w-20 text-center text-white mx-3 text-xl">
        <a
          href="https://magiceden.io/marketplace/solana_monkette_busines"
          target="_blank"
          rel="noreferrer"
        >
          <h1>Market</h1>
        </a>
      </div>
    );
  }

  return (
    <header className="flex-shrink-0 w-full z-30">
      <Popover as="nav" className="w-full bg-strong-pink">
        {({ open }) => (
          <>
            <div className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center cursor-pointer">
                  <a href="/">
                    <img
                      className="rounded-lg"
                      src="/logo.jpeg"
                      width="50px"
                      height="50px"
                      alt="Solana Monkette Business | Solana Queen"
                    />
                  </a>
                  <div className="hidden md:block sm:ml-2">
                    <div className="flex uppercase">
{/*
                      {rarity()}
*/}
                      {market()}
                    </div>
                  </div>
                </div>
                <WalletMultiButton />
                <div className="flex -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none">
                    <span className="sr-only">Open Menu</span>
                    {open ? (
                      <svg
                        className="block w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Popover.Panel className="sm:hidden uppercase">
              <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 text-center">
{/*
                {rarity()}
*/}
                {market()}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </header>
  );
};

export default Header;
