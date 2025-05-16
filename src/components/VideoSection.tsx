
export default function VideoSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
        <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover scale-100 object-[65%_20%]"
            >
                <source src="/hornero-video3.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
        </video>
    </div>
  );
};