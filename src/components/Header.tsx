import './Header.css';
import hornero from '../assets/hornero.png';

export default function Header() {
  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-center bg-marron-bg transition-transform z-50
        py-4 px-2 shadow-inner border-marron-bg drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]`}>
        
        <h1 className="h1-header ml-4 text-center text-[7vw] md:text-4xl font-[900] text-title-marron tracking-wide ">
            UN HOGAR <span className="text-[5.5vw] md:text-3xl relative -top-0.5 inline-block">DE</span> BARRO
        </h1>


        <img src={hornero} width={'70vw'} className="drop-shadow-[0_4px_6px_rgba(255,255,255,0.8)]" />
    
    </header>
  )
}

