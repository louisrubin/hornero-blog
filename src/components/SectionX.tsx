
type Props = {
    title: string;
    text?: string;
    aosAnimationText?: "fade-up" | "fade-left";
    aosAnimationImage?: "fade-up" | "fade-left";
    imagePosition?: "left" | "right";
    image?: string;
}

export default function SectionX(props: Props) {
    // asigno valores default a los props
    const { imagePosition = "left", aosAnimationText = "fade-up", aosAnimationImage = "fade-left" } = props;

    return(
        <div className="flex flex-col md:flex-row items-center gap-4">
            {
                imagePosition === "left"        // imagen a la izquierda
                ? (
                    <div
                    className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-2 md:order-1"
                    data-aos={aosAnimationImage}>
                        <img
                            src={props.image}
                            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
                        />
                    </div>
                )
                : null
            }

            <div
            className="bg-transparent p-6 rounded-lg shadow-lg md:w-full order-1 md:order-2"
            data-aos={aosAnimationText}>
                <h1 className="mb-4 text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">{props.title}</h1>
                
                <p className="text-lg lg:text-xl xl:text-2xl text-gray-700">
                    { props.text ?? "Pase el texto por parámetro 'text'" }
                </p>
            </div>

            {
                imagePosition === "right"        // imagen a la derecha
                ? (
                    <div
                    className="bg-transparent p-6 shadow-lg flex justify-center items-center relative rounded-3xl overflow-auto order-3"
                    data-aos={aosAnimationImage}>
                        <img
                            src={props.image}
                            className="w-full h-auto max-w-full rounded-lg shadow-lg object-contain"
                        />
                    </div>
                )
                : null
            }

        </div>
    )
}