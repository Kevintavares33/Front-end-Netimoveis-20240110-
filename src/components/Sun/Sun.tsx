import bus from "@/public/bus.png";
import pegada from '@/public/pegada.png';
import sol from '@/public/solmanhã.png';
import Image from "next/image";
import Button from "../ui/Button";

export function Sun () {
    return(
        <div className=' bg-sun bg-cover w-full h-[400px] ' >
         
         <div className="absolute left-20 my-10 mr-10 p-4 bg-white h-[350px] flex-1 gap-3 content-between w-[400px]">
                <button className="mb-4 ml-8 mr-6 items-center no-underline hover:underline decoration-orange-400">  
                <Image src={sol} alt="sol"className="mx-3"/>Pega<br/> Sol</button>
                
                <button className="mb-4 ml-8 mr-6 items-center no-underline hover:underline decoration-orange-400">
                <Image src={pegada} alt="pegada" className="mx-4" />Aceitam<br/> Pet</button>
                
                <button className="mb-4 ml-8 mr-6 items-center no-underline hover:underline decoration-orange-400">
                <Image src={bus} alt="bus" className="mx-5" />Ônibus<br/> Perto</button>
              
                <hr className="border-t-2 border-gray-300 mb-5 my-[-4px]" />
              
              <h1 className=" font-bold text-2xl my-2 text-gray-700 ml-6"> Alugue sem complicação </h1>
              <p className="text-xs my-2 ml-6">Alugue imóveis qualificados e sem repitição.</p>
              <p className="text-xs my-2 ml-6">unde omnis iste natus error sit.</p>
                <Button className="px-4 py-1 my-4 ml-6 "  variant="purple" variantStyle="outlined"> 
                Anunciar Imóvel </Button>
              <p className="text-xs my-2 ml-6 underline text-gray-500  hover:text-violet-700">Veja como Alugar sem Fiador</p>
              <p className="text-xs my-2 ml-6 underline text-gray-500  hover:text-violet-700">Saiba como funciona o Aluguel na Netimóveis</p>
                   
                
            </div>
          
        </div>
    )
}