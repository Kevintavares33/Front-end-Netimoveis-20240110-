import prefooter from '@/public/prefooter.png';
import Image from "next/image";

export function Prefooter () {
    return (
        <div className='rounded-none'>
            <Image src={prefooter} alt="prefooter"className="w-[1100px]  h-[300px] rounded-none border-solid "/>
        </div>
    ) 
}