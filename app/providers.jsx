'use client';

import { NextUIProvider } from '@nextui-org/react';
import Header from './_components/header';

export function Providers({ children }) {

    return (
        <NextUIProvider>
            <Header />
            {children}
        </NextUIProvider>);
}