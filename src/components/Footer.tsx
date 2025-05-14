import './Footer.css';
import horneroFooter from '../assets/hornero-nido.png';
import chacoCultura from '../assets/chaco-cultura.png';
import gobChaco from '../assets/gob-chaco.png';

// https://mdbootstrap.com/snippets/standard/mdbootstrap/2885096?view=side
// https://mdbootstrap.com/snippets/standard/mdbootstrap/2885115?view=side

export default function Footer() {
    return(
        <footer className='flex flex-col  items-center bg-marron-bg mt-10 pt-10 '>
            

            <div className='lg:flex items-center'>

                <div className='gap-8'>
                    <h1 className='text-title-marron text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-22
                    uppercase italic'>"Ingeniería Natural a Pico Limpio"
                    </h1>

                    <div className='flex justify-evenly select-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]'>
                        <img src={chacoCultura} alt="Chaco Cultura" className='w-42 h-20'/>
                        <img src={gobChaco} alt="Gobierno del Chaco" className='w-35 h-17' />
                    </div>
                </div>
                

                <img src={horneroFooter} alt="Hornero | Ave Nacional"
                    className='mx-auto h-[30vh] md:h-[40vh] lg:h-[45vh] 
                    drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]
                    scale-x-[-1]
                    select-none' />
            </div>

            {/* <a href="https://github.com/louisrubin/hornero-blog/blob/main/README.md" target="_blank" rel="noopener noreferrer">
                <span className='opacity-40 text-sm'>Desarrollado por Martín y Luis</span>
            </a> */}
            

        </footer>
    )
}