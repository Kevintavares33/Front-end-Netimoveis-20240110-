import Header from "../components/Header";
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
        </div>
    );
}
