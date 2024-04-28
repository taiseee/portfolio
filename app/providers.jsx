'use client';

import { NextUIProvider } from '@nextui-org/react';
import Header from './_components/header';
import Footer from './_components/footer';

export function Providers({ children }) {

    return (
        <NextUIProvider>
            <Header />
            {children}
            <Footer />
        </NextUIProvider>);
}