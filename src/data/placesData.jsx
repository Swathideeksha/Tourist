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
import Kodachadri from "../assests/kodachadri.png";
import Kundadri from "../assests/KundadriHills.webp";
import Madikeri from "../assests/places/madikeri.jpg";
import nandihills from "../assests/NandiHills.jpg";


// ================= HISTORY =================
import hampi from "../assests/hampi.jpg";
import mysore from "../assests/places/Mysore.webp";
import bijapur from "../assests/places/Bijapur.webp";
import shimoga from "../assests/places/Shimoga.webp";
import badami from "../assests/places/Badami.webp";
import halebidu from "../assests/places/Halebidu.webp";
import srirangapatna from "../assests/places/Srirangapatna.webp";
import aihole from "../assests/places/Aihole.webp";
import dandeli from "../assests/places/Dandeli.webp";
import ramanagaram from "../assests/places/Ramanagaram.webp";
import hassan from "../assests/places/Hassan.webp";
import bidar from "../assests/places/Bidar.webp";
import talakadu from "../assests/places/Talakadu.webp";
import melukote from "../assests/places/Melukote.webp";
import somnathpur from "../assests/places/Somnathpur.webp";
import sringeri from "../assests/places/Sringeri.webp";
import pattadakal from "../assests/places/Pattadakal.webp";

// ================= RELIGIOUS =================
import murudeshwaraTemple from "../assests/places/murudeshwara.jpg";
import kotilingeshwara from "../assests/places/koti.lingeswara.jpg";
import banashankari from "../assests/places/Banashankari.jpg";
import mookambika from "../assests/Mookambika.jpeg";
import kedareshwara from "../assests/Kedareshwara.jpg";
import amrutheshwara from "../assests/Amrtesvara.webp";

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
  { id: 101, name: "Sakleshpur", location: "Hassan", img: sakleshpur, category: "hill-station"},
  { id: 102, name: "Coorg", location: "Kodagu", img: coorg, category: "hill-station"},
  { id: 103, name: "Chikmagalur", location: "Chikmagalur", img: chikmangalur, category: "hill-station" },
  { id: 104, name: "Agumbe", location: "Shivamogga", img: Agumbe, category: "hill-station" },
  { id: 105, name: "Biligiri Hills", location: "Chamarajanagar", img: biligiri, category: "hill-station" },
  { id: 106, name: "Gangamoola", location: "Chikmagalur", img: gangamoola, category: "hill-station"},
  { id: 107, name: "Kemmannugundi", location: "Chikmagalur", img: Kemmannugundi, category: "hill-station" },
  { id: 108, name: "Kodachadri", location: "Shivamogga", img: Kodachadri, category: "hill-station" },
  { id: 109, name: "Kundadri", location: "Shivamogga", img: Kundadri, category: "hill-station" },
  { id: 110, name: "Madikeri", location: "Madikeri", img: Madikeri, category: "hill-station"},
  { id: 111, name: "Nandi Hills", location: "Chikkaballapura", img: nandihills, category: "hill-station" },

  // 🏛️ HISTORY (17 Places)
  { id: 201, name: "Hampi", location: "Vijayanagara", img: hampi, category: "history" },
  { id: 202, name: "Mysore Palace", location: "Mysore", img: mysore, category: "history" },
  { id: 203, name: "Bijapur Fort", location: "Bijapur", img: bijapur, category: "history" },
  { id: 204, name: "Shimoga Fort", location: "Shimoga", img: shimoga, category: "history" },
  { id: 205, name: "Badami Caves", location: "Bagalkot", img: badami, category: "history" },
  { id: 206, name: "Halebidu Temple", location: "Hassan", img: halebidu, category: "history" },
  { id: 207, name: "Srirangapatna Fort", location: "Mandya", img: srirangapatna, category: "history" },
  { id: 208, name: "Aihole Temples", location: "Bagalkot", img: aihole, category: "history" },
  { id: 209, name: "Dandeli Fort", location: "Uttara Kannada", img: dandeli, category: "history" },
  { id: 210, name: "Ramanagaram Fort", location: "Ramanagaram", img: ramanagaram, category: "history" },
  { id: 211, name: "Hassan Historic Site", location: "Hassan", img: hassan, category: "history" },
  { id: 212, name: "Bidar Fort", location: "Bidar", img: bidar, category: "history" },
  { id: 213, name: "Talakadu", location: "Mysore", img: talakadu, category: "history" },
  { id: 214, name: "Melukote Temple", location: "Mandya", img: melukote, category: "history" },
  { id: 215, name: "Somnathpur Temple", location: "Mysore", img: somnathpur, category: "history" },
  { id: 216, name: "Sringeri Temple", location: "Chikmagalur", img: sringeri, category: "history" },
  { id: 217, name: "Pattadakal Temple", location: "Bagalkot", img: pattadakal, category: "history" },

  // 🛕 RELIGIOUS
  { id: 301, name: "Murudeshwara Temple", location: "Uttara Kannada", img: murudeshwaraTemple, category: "religious" },
  { id: 302, name: "Koti Lingeshwara", location: "Kolar", img: kotilingeshwara, category: "religious" },
  { id: 303, name: "Banashankari Temple", location: "Bagalkot", img: banashankari, category: "religious" },
  { id: 304, name: "Mookambika Temple", location: "Kollur", img: mookambika, category: "religious" },
  { id: 305, name: "Kedareshwara Temple", location: "Halebidu", img: kedareshwara, category: "religious" },
  { id: 306, name: "Amrutheshwara Temple", location: "Chikkamagalur", img: amrutheshwara, category: "religious" },
];
