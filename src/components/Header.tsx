import './Header.css';

export default function Header() {
  return (
    <header className={`fixed top-0 left-0 w-full bg-[#af6934] transition-transform z-50
        py-6 px-4 shadow-inner border-b-[8px] border-[#ecddd1] `}>
        
        <h1 className="text-center text-4xl md:text-5xl font-[900] text-[#3c2a1e] tracking-wide ">
            UN HOGAR <span className="text-3xl md:text-4xl relative -top-0.5 inline-block">DE</span> BARRO
        </h1>

    </header>
  )
}

