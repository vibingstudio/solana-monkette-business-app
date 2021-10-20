import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Component } from 'react'
import DefaultLayout from '../layouts/Default'
import { Fragment, FunctionComponent } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import Head from 'next/head'
import { WalletKitProvider } from '@gokiprotocol/walletkit'

export default function MyApp({
    Component,
    pageProps,
}: AppProps & {
    Component: NextComponentType<NextPageContext> & {
        Guard: FunctionComponent
        Layout: FunctionComponent
        Provider: FunctionComponent
    }
}) {
    // Allows for conditionally setting a provider to be hoisted per page
    const Provider = Component.Provider || Fragment

    // Allows for conditionally setting a layout to be hoisted per page
    const Layout = Component.Layout || DefaultLayout

    // Allows for conditionally setting a guard to be hoisted per page
    const Guard = Component.Guard || Fragment

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <title key="title">
                    Solana Monkettes Business | Generative female NFTs inspired by SolanaMBS and MonkeDAO
                </title>

                <meta
                    key="description"
                    name="description"
                    content="Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />

                <meta
                    name="application-name"
                    content="Solana Monkettes Business | Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Solana Monkettes Business | Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />

                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#3E4A94" />

                <meta key="twitter:card" name="twitter:card" content="app" />
                <meta
                    key="twitter:title"
                    name="twitter:title"
                    content="Solana Monkettes Business | Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />
                <meta key="twitter:url" name="twitter:url" content="https://solanamonkettes.business" />
                <meta
                    key="twitter:description"
                    name="twitter:description"
                    content="Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />
                <meta
                    key="twitter:image"
                    name="twitter:image"
                    content="https://solanamonkettes.business/manifest-icon-192.png"
                />
                <meta key="twitter:creator" name="twitter:creator" content="@MonketteSolana" />
                <meta key="og:type" property="og:type" content="website" />
                <meta
                    key="og:site_name"
                    property="og:site_name"
                    content="Solana Monkettes Business | Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />
                <meta key="og:url" property="og:url" content="https://solanamonkettes.business" />
                <meta
                    key="og:image"
                    property="og:image"
                    content="https://solanamonkettes.business/apple-icon-180.png"
                />
                <meta
                    key="og:description"
                    property="og:description"
                    content="Generative female NFTs inspired by SolanaMBS and MonkeDAO"
                />
            </Head>
            <WalletKitProvider
                app={{
                    name: 'Solana Monkette Business',
                }}
            >
                <Provider>
                    <Layout>
                        <Guard>
                            <Component {...pageProps} />
                        </Guard>
                    </Layout>
                </Provider>
            </WalletKitProvider>
        </Fragment>
    )
}
