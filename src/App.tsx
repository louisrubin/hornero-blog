import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // La animación se ejecuta solo una vez
    });
  }, []);

  return (
    <main className="bg-gradient-to-b from-[#ecddd1] to-[#af6934] min-h-screen p-10 pt-32 max-w-full overflow-hidden lg:px-80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Tarjeta de texto 1 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-1 md:order-1"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">El Hornero</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
            Arquitecto de la Naturaleza
            Con su canto vibrante y su inconfundible nido de barro, el hornero es mucho más que un ave: representa el hogar, el esfuerzo y el trabajo en equipo.
            En esta muestra, te invitamos a descubrir su mundo: su comportamiento, su entorno natural y su presencia en la cultura popular.
          </p>
        </div>

        {/* Tarjeta de imagen 1 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-2 md:order-2"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>


        {/* Tarjeta de imagen 2 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-4 md:order-3"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Tarjeta de texto 2 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-3 md:order-4"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">Ingeniería natural a pico limpio</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
            Los horneros construyen su nido en pareja, moldeando barro mezclado con paja solo con sus picos.
            La estructura, parecida a un horno de barro, pesa hasta 5 kilos y resiste lluvias y vientos fuertes.
            Cada temporada, la pareja levanta un nuevo nido, con una entrada en forma de curva que protege a los huevos del clima y de depredadores.
          </p>
        </div>

        {/* Tarjeta de texto 3 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-5 md:order-5"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">Vida en pareja y canto en dúo</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
              Los horneros forman parejas de por vida. Cantan juntos en un dueto característico que refuerza su vínculo y protege su territorio.
              Ambos colaboran en la construcción del nido, en la incubación y en la alimentación de los pichones: un verdadero trabajo en equipo.
          </p>

        </div>

        {/* Tarjeta de imagen 3 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-6 md:order-6"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>

          {/* Tarjeta de imagen 4 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-8 md:order-7"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Tarjeta de texto 4 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-7 md:order-8"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">Distribución del hornero</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
            Una familia que recorre Sudamérica
            Existen varias especies de horneros, entre ellas:
            Hornero común (Furnarius rufus)
            Hornero copetón (Furnarius cristatus)
            Hornero menor (Furnarius minor)
            Aunque es más conocido en Argentina y Uruguay, habita gran parte de Sudamérica: desde el sur de Brasil hasta Bolivia y Paraguay. Vive en campos abiertos, bordes de caminos y zonas rurales. ¡Puede vivir hasta 15 años!
          </p>
        </div>

        
        {/* Tarjeta de texto 5 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-9 md:order-9"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">Símbolo Nacional</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
            El hornero, ave nacional de Argentina
            Desde 1928, el hornero es el ave nacional argentina.
            Se lo valora por su laboriosidad, fidelidad y dedicación al construir su hogar.
            Representa la familia, el trabajo, el arraigo y el amor duradero.
          </p>

        </div>

        {/* Tarjeta de imagen 5 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-10 md:order-10"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>

          {/* Tarjeta de imagen 6 */}
        <div
          className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-12 md:order-11"
          data-aos="fade-left"
        >
          <img
            src="/src/assets/pajaro-barro.jpg"
            alt="Pájaro de barro"
            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Tarjeta de texto 6 */}
        <div
          className="bg-transparent p-6 rounded-lg shadow-lg flex flex-col justify-between md:col-span-2 order-11 md:order-12"
          data-aos="fade-up"
        >
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">Todo sobre el hornero (Furnarius rufus)</h1>
          <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
            Características
            Tamaño: 20-25 cm
            Plumaje: Marrón claro con pecho blanco
            Pico: Fuerte y curvado
            Hábitat y distribución
            Presente en Argentina, Uruguay, Paraguay, Brasil y Bolivia
            Prefiere áreas abiertas: campos, jardines, bordes de caminos
            Comportamiento
            Monógamos y cooperativos
            Construyen nidos con barro
            Ambos padres incuban y alimentan
            Alimentación
            Insectos, lombrices e invertebrados
            Forrajean en el suelo
            Importancia cultural y conservación
            Símbolo nacional argentino
            Presente en la literatura, el arte y la música
          </p>
        </div>
        
      </div>
    </main>
  );
}
