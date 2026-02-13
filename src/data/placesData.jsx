// ================= BEACHES =================
import kapuBeach from "../assests/Kapu-Beach.webp";
import devbaghBeach from "../assests/devbagh-beach.jpg";
import Malpe from "../assests/Malpe.jpg";
import Mattu from "../assests/Mattu.jpg";
import Murudeshwara from "../assests/murudeshwara-beach.jpg";
import Ombeach from "../assests/om-beach.jpg";
import PanamburuBeach from "../assests/panambur-beach.jpg";
import SomeshwaraBeach from "../assests/someshwara.jpg";
import StMarryBeach from "../assests/St.Marry-island.jpg";
import SurathkalBeach from "../assests/surathkal-beach.jpg";
import ThannirbhaviBeach from "../assests/tannirbhavi-beach.jpg";
import MaravantheBeach from "../assests/Maravanthe.avif";
import PadubidriBeach from "../assests/padubidri.jpg";

// ================= HILL STATIONS =================
import sakleshpur from "../assests/sakleshpur.webp";
import coorg from "../assests/coorg.jpg";
import chikmangalur from "../assests/chikmangalur.avif";
import Agumbe from "../assests/Agumbe.jpeg";
import biligiri from "../assests/biligiri.jpg";
import gangamoola from "../assests/ganga mula.jpg";
import Kemmannugundi from "../assests/kemmannugundi.jpg";
import Kodachadri from "../assests/kodachadri.webp";
import Kundadri from "../assests/kundadri.jpg";
import Madikeri from "../assests/madikeri.jpg.webp";
import nandihills from "../assests/nandi hills.jpg";

// ================= WATERFALLS / HISTORY =================
import jog from "../assests/jog-falls.jpg";
import belur from "../assests/belur.jpg";
import badami from "../assests/badami.webp";

export const placesData = [
  // 🌊 BEACHES
  { id: 1, name: "Kapu Beach", location: "Udupi", img: kapuBeach, category: "beach" },
  { id: 2, name: "Devbagh Beach", location: "Karwar", img: devbaghBeach, category: "beach" },
  { id: 3, name: "Malpe Beach", location: "Udupi", img: Malpe, category: "beach" },
  { id: 4, name: "Mattu Beach", location: "Udupi", img: Mattu, category: "beach" },
  { id: 5, name: "Murudeshwara Beach", location: "Bhatkal", img: Murudeshwara, category: "beach" },
  { id: 6, name: "Om Beach", location: "Gokarna", img: Ombeach, category: "beach" },
  { id: 7, name: "Panamburu Beach", location: "Mangaluru", img: PanamburuBeach, category: "beach" },
  { id: 8, name: "Someshwara Beach", location: "Mangaluru", img: SomeshwaraBeach, category: "beach" },
  { id: 9, name: "St. Mary's Island", location: "Udupi", img: StMarryBeach, category: "beach" },
  { id: 10, name: "Surathkal Beach", location: "Mangaluru", img: SurathkalBeach, category: "beach" },
  { id: 11, name: "Thannirbhavi Beach", location: "Mangaluru", img: ThannirbhaviBeach, category: "beach" },
  { id: 12, name: "Maravanthe Beach", location: "Kundapura", img: MaravantheBeach, category: "beach" },
  { id: 13, name: "Padubidri Beach", location: "Udupi", img: PadubidriBeach, category: "beach" },

  // ⛰️ HILL STATIONS
  { id: 101, name: "Sakleshpur", location: "Hassan", img: sakleshpur, category: "hill-station" },
  { id: 102, name: "Coorg", location: "Kodagu", img: coorg, category: "hill-station" },
  { id: 103, name: "Chikmagalur", location: "Chikmagalur", img: chikmangalur, category: "hill-station" },
  { id: 104, name: "Agumbe", location: "Shivamogga", img: Agumbe, category: "hill-station" },
  { id: 105, name: "Biligiri Hills", location: "Chamarajanagar", img: biligiri, category: "hill-station" },
  { id: 106, name: "Gangamoola", location: "Chikmagalur", img: gangamoola, category: "hill-station" },
  { id: 107, name: "Kemmannugundi", location: "Chikmagalur", img: Kemmannugundi, category: "hill-station" },
  { id: 108, name: "Kodachadri", location: "Shivamogga", img: Kodachadri, category: "hill-station" },
  { id: 109, name: "Kundadri", location: "Shivamogga", img: Kundadri, category: "hill-station" },
  { id: 110, name: "Madikeri", location: "Madikeri", img: Madikeri, category: "hill-station" },
  { id: 111, name: "Nandi Hills", location: "Chikkaballapura", img: nandihills, category: "hill-station" },

  // 💧 WATERFALLS / HISTORY
  { id: 201, name: "Jog Falls", location: "Shivamogga", img: jog, category: "waterfall" },
  { id: 202, name: "Belur Temple", location: "Hassan", img: belur, category: "history" },
  { id: 203, name: "Badami Caves", location: "Bagalkot", img: badami, category: "history" },
];
