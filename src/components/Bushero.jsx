import { useNavigate } from "react-router-dom";
import vrlBus from "../assests/touristbus.webp";

const Bushero = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto mt-8 px-6">
      <div
        className="relative h-[420px] rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(88,0,0,0.85), rgba(0,0,0,0.2)), url(${vrlBus})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-10 text-white max-w-2xl">
          <span className="bg-yellow-400 text-black text-xs font-semibold px-4 py-1 rounded-full w-fit mb-4">
            PREMIUM PRIVATE TRANSIT
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Private Tourist Bus <br /> Guide Karnataka
          </h1>

          <p className="mt-4 text-white/90">
            Reliable private operators connecting Bengaluru to heritage
            circuits, coastal getaways, and luxury hill station retreats.
          </p>

          {/* READY TO EXPLORE BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/places")}
            className="mt-8 w-fit inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-red-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
          >
            Ready to Explore →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bushero;
