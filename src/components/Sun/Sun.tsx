import key from '@/public/Key .png';
import union from "@/public/Union.png";
import home from "@/public/home.png";
import Image from "next/image";
import Button from "../ui/Button";

export function Sun () {
    return(
        <div className=' bg-sun bg-cover w-full h-[400px] ' >
         
         <div className="absolute left-20 my-10 mr-10 p-4 bg-white h-[350px]  flex-1 gap-3 content-between w-[400px]">
                <button className="mb-4 ml-8 mr-6">  
                <Image src={key} alt="logo alguel" />Alugar<br/> imóvel</button>
                
                <button className="mb-4 ml-8 mr-6">
                <Image src={union} alt="logo union" />Comprar<br/> imóvel</button>
                
                <button className="mb-4 ml-8 mr-6">
                <Image src={home} alt="logo" />Anunciar<br/> imóvel</button>
           
              <h1 className=" font-semibold text-2xl my-2 text-gray-800 ml-6"> Alugue sem complicação </h1>
              <p className="text-xs my-2 ml-6">Alugue imóveis qualificados e sem repitição.</p>
              <p className="text-xs my-2 ml-6">unde omnis iste natus error sit.</p>
                <Button className="px-4 py-1 my-4 ml-6 "  variant="purple" variantStyle="outlined"> 
                Anunciar Imóvel </Button>
              <p className="text-xs my-2 ml-6 underline text-gray-500">Veja como Alugar sem Fiador</p>
              <p className="text-xs my-2 ml-6 underline text-gray-500">Saiba como funciona o Aluguel na Netimóveis</p>
                   
                
            </div>
          
        </div>
    )
}