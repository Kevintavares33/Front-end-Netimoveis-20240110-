import key from '@/public/Key .png';
import union from "@/public/Union.png";
import home from "@/public/home.png";
import Image from "next/image";
import Button from "../ui/Button";

export function YouPlace () {
    return(
        
   <div className="flex items-center h-[500px] bg-zinc-100">
        <div className="flex flex-col w-[900px] mx-auto">
            <h1 className="text-4xl text-gray-600 mt-2 mb-1 ">Encontre um lugar</h1>
            <h1 className="text-4xl text-gray-600 my-0 mb-11">que é a sua cara</h1>
    
            <div className="text-gray-500 mb-2">
                <p>A Netimóveis te oferece uma experiência ágil e segura na</p>  
                <p>hora de comprar ou alugar seu imóvel. Seja de maneira</p>
                <p>digital ou física, fazemos a diferença neste momento tão</p> 
                <p>importante que é decidir um lar.</p>
            </div>
    
            <div className="absolute right-20 mr-20 p-4 bg-white h-[350px]  flex-1 gap-3 content-between w-[400px]">
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
    </div>

            
    )
}