import { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
    title: "Netimóveis",
    description: "Desafio Frontend para o processo seletivo da Netimóveis.",
};

const sourceSans3 = Source_Sans_3({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={sourceSans3.className}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
