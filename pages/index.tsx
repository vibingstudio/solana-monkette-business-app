import { useState } from 'react'
import Image from 'next/image'

export default function Home(): JSX.Element {
    return (
        <div className="w-full z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                <div className="text-center">
                    <Image className="rounded-lg" src="/afro.png" width="400px" height="400px" />
                </div>
                <div className="text-center rounded-lg bg-strong-pink m-4">
                    <h1 className="text-xl mt-10">Solana Monkettes Business</h1>
                    <p className="px-9 py-2">
                        3333 generative female NFTs inspired by <b>@SolanaMBS</b> and <b>@MonkeDAO</b>
                    </p>
                    <p className="px-9 py-2">Airdropped to SMB users that meet the requirements.</p>
                    <p className="px-9 py-2">30% of mints donated to the @MonkeDAO</p>
                    <div className="text-center bg-red text-xl border-white border-2 rounded-lg w-48 mx-auto mt-2">
                        <button className="p-2 opacity-50 cursor-not-allowed">
                            <h1>Coming Soon</h1>
                        </button>
                    </div>
                    <div className="text-center bg-green text-xl border-white border-2 rounded-lg w-48 mx-auto mt-2">
                        <button className="p-2">
                            <h1>Marketplace</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
