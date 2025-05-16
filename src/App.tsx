import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionX from './components/SectionX';
import { sectionsList } from './AppSectionList';
import PhotoGrid from './components/PhotoGrid';

export default function App() {
  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // La animación se ejecuta solo una vez
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#ecddd1] to-[#af6934] min-h-screen p-10 pt-32 max-w-full overflow-hidden xl:px-[20vw]">
        <div>        
        {
            sectionsList.map( (item, index) => (
                <SectionX 
                    key={index} 
                    title={item.title}
                    imagePosition={item.imgPosition as "left" | "right"}  // Convertir el valor explícitamente con as
                    image={item.image} 
                >
                  {item.children}
                </SectionX>
            ))
        }        
        </div>
        <div className="mt-18 mb-6">
          <h1 className="text-[7vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[2.8vw] 2xl:text-[2.3vw] font-bold text-gray-800">
            Un proyecto en acción
          </h1>
        </div>
         <PhotoGrid />
    </main>
  );
}

