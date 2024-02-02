import { Annouce } from "../components/Announce/Annouce";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header";
import { Love } from "../components/Love/Love";
import { Portugal } from "../components/Portugal/Portugal";
import { Prefooter } from "../components/Prefooter/Prefooter";
import PropertiesList from "../components/PropertiesList";
import { Sun } from "../components/Sun/Sun";
import { YouPlace } from "../components/youPlace/Youplace";


export default function Page() {
    return (
        <div>
            <Header />
            <main className="py-20 px-4 md:px-20 lg:px-[7vw] xl:px-[10vw] 2xl:px-[17.5vw]">
                <PropertiesList />
            </main>
            <YouPlace/>
            <Sun/>
            <Annouce/>
            <Portugal/>
            <Love/>
            <Prefooter/>
            <Footer/>
        </div>
    );
}
