import './Footer.css';
import horneroFooter from '../assets/hornero-nido.png';
import gobChaco from '../assets/logo-gobierno-chaco.png';
import chacoCultura from '../assets/logo-icch.png';
import sociocultural from '../assets/logo-direc-sociocultural.png';

export default function Footer() {
    return(
        <footer className='relative md:static w-full h-100 md:h-120 lg:h-120 bg-marron-bg pt-10 '>
            <h1 className='text-title-marron text-center text-xl md:text-2xl lg:text-3xl mb-8
            uppercase italic'>"Ingeniería Natural a Pico Limpio"
            </h1>

            <div className='md:flex justify-center'>
                <div className='absolute md:static bottom-4 w-1/2 flex flex-col items-center'>
                    <img src={gobChaco} className=' w-43 h-30' 
                    alt="Gobierno del Chaco" />
                    
                    <img src={chacoCultura} className='w-28 h-10 ' 
                    alt="Chaco Cultura" />
                    
                    <img src={sociocultural} className=' w-40 h-38 ' 
                    alt="Sociocultural" />
                </div>

                <img src={horneroFooter} 
                className='absolute md:static right-0 bottom-0 md:h-80 md:-ml-30 scale-x-[-1] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]'
                alt="Hornero | Ave Nacional" />
                
            </div>
        </footer>
    )
}