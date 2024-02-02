import love from '@/public/love.png';
import Image from "next/image";

export function Love () {
    return(
        <div>
             <Image src={love} alt=""className=" "/>
        </div>
    )
}