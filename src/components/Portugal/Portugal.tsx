import portugal from '@/public/portugal.png';
import Image from "next/image";

export function Portugal () {
    return(
        <div className=' w-full h-[250px]'>
            <Image src={portugal} alt="portugal"className="items-center mx-20 my-[100px]"/>
        </div>
    )
}