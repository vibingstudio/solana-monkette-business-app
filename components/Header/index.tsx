import React from 'react'
import { Popover } from '@headlessui/react'
import Image from 'next/image'

function AppBar(): JSX.Element {
    return (
        <header className="flex-shrink-0 w-full z-30 bg-strong-pink w-screen">
            <Popover as="nav" className="w-full header-border-b text-white">
                {({ open }) => (
                    <>
                        <div className="px-4 py-4">
                            <div className="flex items-center justify-between">
                                <div
                                    style={{ maxWidth: '1200px' }}
                                    className="mx-auto flex items-center justify-between z-10 w-full cursor-pointer"
                                >
                                    <Image className="rounded-lg" src="/logo.png" width="50px" height="50px" />
                                    <div className="flex flex-row"></div>
                                    <div className="border-white rounded-lg border-2 p-1.5 text-md">Connector</div>
                                </div>
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
                            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 text-center"></div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </header>
    )
}

export default AppBar
