import annouce from '@/public/annouce.png';
import Image from "next/image";

export function Annouce () {
    return(
        <div className='w-full'>
        <Image src={annouce} alt="logo alguel"className="w-10/12 rounded-none border-solid"/>
        </div>
    )
}