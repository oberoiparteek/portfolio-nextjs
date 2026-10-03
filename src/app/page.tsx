import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import './globals.scss'
import Sections from "@/components/Sections";
import MobileMenu from "@/components/MobileMenu";
import MobileTopBar from "@/components/MobileTopBar";
import { MobileNavProvider } from "@/context/MobileNavContext";
import FabDownload from "@/components/FabDownload";

export default function Home() {
    return (
        <MobileNavProvider>
            <main className="app">
                <MobileTopBar />
                <Header />
                <SocialSidebar />
                <Sections />
                <MobileMenu />
                <FabDownload />
            </main>
        </MobileNavProvider>
    )
}