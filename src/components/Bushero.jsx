import { useNavigate } from "react-router-dom";
import vrlBus from "/assets/bus.webp";

const Bushero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-8 py-6">
      <div
        className="relative w-full h-[400px] md:h-[500px] rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(88,0,0,0.75), rgba(0,0,0,0.3)), url(${vrlBus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full w-fit mb-4">
            PREMIUM PRIVATE TRANSIT
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Private Tourist Bus Guide <br /> Karnataka
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
            Reliable private operators connecting Bengaluru to heritage
            circuits, coastal getaways, and luxury hill station retreats.
          </p>

          {/* READY TO EXPLORE BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/places")}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
          >
            Ready to Explore →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bushero;
