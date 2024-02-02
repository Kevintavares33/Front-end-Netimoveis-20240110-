import footer from '@/public/footer.png';
import Image from "next/image";

export function Footer () {
    return(
        <div>
            <Image src={footer} alt="footer"className=" rounded-none border-solid "/>
        </div>
    )
}