// SECCIONES QUE SE LE PASA AL App.tsx

export const sectionsList = [
    {
        title: "El Hornero",
        image: "/src/assets/hogar-barro-main.jpeg",
        imgPosition: "left",
        children:
            <>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <strong className="font-medium">Arquitecto de la Naturaleza.</strong>
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    Con su canto vibrante y su inconfundible <strong className="font-medium">nido de barro</strong>, el hornero es mucho más que un ave: 
                    representa el <strong className="font-medium">hogar, el esfuerzo y el trabajo en equipo</strong>.<br />
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    En esta muestra, te invitamos a descubrir su mundo: su comportamiento, su entorno natural 
                    y su presencia en la cultura popular.
                </p>   
            </>
    },

    {
        title: "Ingeniería natural a pico limpio",
        image: "/src/assets/ingenieria-pico-limpio.jpg",
        imgPosition: "right",
        children:
            <>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
                    Los horneros construyen su nido en pareja, moldeando barro mezclado con paja solo con sus picos.
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    La estructura, parecida a un <strong className=" font-medium">horno de barro, pesa hasta 5 kilos y resiste lluvias y vientos fuertes.</strong>
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    Cada temporada, la pareja levanta un nuevo nido, con una entrada en forma de curva que protege a los huevos del clima y de depredadores.
                </p>
            </>
    },

    {
        title: "Vida en pareja y canto en dúo",
        image: "/src/assets/vida-en-pareja.jpeg",
        imgPosition: "left",
        children:
            <>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <strong className="font-medium">Los horneros forman parejas de por vida.</strong> 
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    Cantan juntos en un dueto característico que refuerza su vínculo y protege su territorio.
                </p>
                <p className="text-lg lg:text-xl mt-4 xl:text-2xl text-gray-700">
                    <strong className="font-medium">Ambos colaboran en la construcción del nido, en la incubación y en la alimentación de los pichones:</strong> un verdadero trabajo en equipo.
                </p>
            </>
    },

    {
        title: "Distribución del hornero",
        image: "/src/assets/mapa-hornero.jpeg",
        imgPosition: "right",
        children:
            <>
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
                    Una familia que recorre Sudamérica.<br/>
                    Existen varias especies de horneros, entre ellas:
                </p>
                <ul className="list-disc pl-5 lg:pl-10 mt-4 text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <li>
                        <strong className="font-medium">Hornero común</strong>
                        <span className="italic"> (Furnarius rufus)</span>
                    </li>
                    <li>
                        <strong className="font-medium">Hornero copetón</strong>
                        <span className="italic"> (Furnarius cristatus)</span>
                    </li>
                    <li>
                        <strong className="font-medium">Hornero menor</strong>
                        <span className="italic"> (Furnarius minor)</span>
                    </li>
                </ul>
                <p className="text-lg lg:text-xl xl:text-2xl mt-4 text-gray-700">
                    Aunque es más conocido en Argentina y Uruguay, habita gran parte de Sudamérica:<br/>
                    desde el sur de Brasil hasta Bolivia y Paraguay.
                </p>

                <p className="text-lg lg:text-xl xl:text-2xl mt-4 text-gray-700">
                    Vive en campos abiertos, bordes de caminos y zonas rurales.
                </p>

                <p className="text-lg lg:text-xl xl:text-2xl mt-4 text-gray-700 font-medium">
                    ¡Pueden vivir hasta 15 años!
                </p>
            </>
    },

    {
        title: "Símbolo Nacional",
        image: "/src/assets/mapa-hornero.jpeg",
        imgPosition: "left",
        children:
            <>
                <p className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-700">
                    El hornero es el ave nacional de Argentina
                    desde 1928.
                </p>
                <p className="text-lg lg:text-xl xl:text-2xl mt-4 text-gray-700">
                    Se lo valora por su laboriosidad, fidelidad y dedicación al construir su hogar.
                </p>
                <p className="text-lg lg:text-xl xl:text-2xl mt-4 text-gray-700">
                    <strong className="font-medium"> Representa la familia, el trabajo, el arraigo y el amor duradero.</strong>
                </p>
            </>
    },

    {
        title: "Todo sobre el hornero (Furnarius rufus)",
        image: "/src/assets/mapa-hornero.jpeg",
        imgPosition: "right",
        children: 
            <>
                <p className="text-xl lg:text-xl xl:text-2xl my-4 font-medium text-gray-700">Características</p>
                <ul className="list-disc pl-5 lg:pl-10 text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <li>Tamaño: 20-25 cm</li>
                    <li>Plumaje: Marrón claro con pecho blanco</li>
                    <li>Pico: Fuerte y curvado</li>
                </ul>                    
                <p className="text-xl lg:text-xl xl:text-2xl my-4 font-medium text-gray-700">
                    Hábitat y distribución
                </p>
                <p className="text-xl lg:text-xl xl:text-2xl text-gray-700">
                    Presente en Argentina, Uruguay, Paraguay, Brasil y Bolivia.
                </p>

                <p className="text-xl lg:text-xl xl:text-2xl mt-4 text-gray-700">
                    Prefiere áreas abiertas: campos, jardines, bordes de caminos
                </p>

                <p className="text-xl lg:text-xl xl:text-2xl my-4 font-medium text-gray-700">Comportamiento</p>
                <ul className="list-disc pl-5 lg:pl-10 text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <li>Monógamos y cooperativos</li>
                    <li>Construyen nidos con barro</li>
                    <li>Ambos padres incuban y alimentan</li>
                    <li>Forrajean en el suelo</li>
                </ul>   
                
                <p className="text-xl lg:text-xl xl:text-2xl my-4 font-medium text-gray-700">Alimentación</p>
                <ul className="list-disc pl-5 lg:pl-10 text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <li>Insectos</li>
                    <li>Lombrices</li>
                    <li>Grillos</li>
                    <li>Invertebrados</li>
                    <li>Hormigas</li>
                    <li>Vegetales</li>
                </ul>

                <p className="text-xl lg:text-xl xl:text-2xl my-4 font-medium text-gray-700">Importancia</p>
                <ul className="list-disc pl-5 lg:pl-10 text-lg lg:text-xl xl:text-2xl text-gray-700">
                    <li>Importancia cultural y conservación</li>
                    <li>Símbolo nacional argentino</li>
                    <li>Presente en la literatura, el arte y la música</li>
                </ul>
            </>
    },

    // {
    //     title: "",
    //     image: "/src/assets/mapa-hornero.jpeg",
    //     imgPosition: "",
    //     children: ``,
    // },


]