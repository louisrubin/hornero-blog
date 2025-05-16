import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionX from './components/SectionX';
import { sectionsList } from './AppSectionList';

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
                    text={item.text} 
                    imagePosition={item.imgPosition as "left" | "right"}  // Convertir el valor explícitamente con as
                    image={item.image} 
                />
            ))
        }        
        </div>
    </main>
  );
}

