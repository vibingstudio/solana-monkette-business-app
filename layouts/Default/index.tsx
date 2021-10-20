import Footer from '../../components/Footer'
import Header from '../../components/Header'
import React from 'react'

const Layout = ({ children }: { children?: JSX.Element | undefined }) => {
    return (
        <div
            style={{ maxWidth: '1000px' }}
            className="bg z-0 flex mx-auto flex-col items-center w-full h-screen pb-16 lg:pb-0 text-white"
        >
            <Header />
            <main
                className={'flex flex-col items-center justify-start flex-grow w-full h-full'}
                style={{ height: 'max-content' }}
            >
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
