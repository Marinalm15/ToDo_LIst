import type { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="d-flex flex-column min-vh-100 align-items-center">
            <Header />
            <main className="flex-grow-1">{children}</main>
            <div className="border-top w-100 d-flex justify-content-center">
                <Footer />
            </div>
        </div>
    );
}
