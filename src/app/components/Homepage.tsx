import { Music, Mic2, Piano } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// @ts-ignore
import pregomus from "./images/pregomus.jpeg";
// @ts-ignore
import singmus from "./images/singmus.jpeg";
// @ts-ignore
import razzled from "./images/razzled.jpeg";
// @ts-ignore
import loungemus from "./images/loungemus.jpeg";
// @ts-ignore
import soldiermus from "./images/soldiermus.jpeg";
import { Link } from "react-router-dom";

export function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <img
          src={pregomus}
          alt="Pregomus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl text-white mb-4">Welcome</h1>
            <p className="text-xl md:text-2xl text-[#F5F1E8] mb-8">
              Pianist & Vocalist
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/sample/about"
                className="px-8 py-3 bg-[#D4C5A0] text-[#3D3326] rounded-md hover:bg-[#C4B590] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div id="about" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-[#3D3326] mb-6">About Me</h2>
            <p className="text-lg text-[#5C4E3A] mb-6 leading-relaxed">
              I'm a passionate musician dedicated to creating memorable musical
              experiences. Whether it's the elegant touch of piano keys or the
              emotional depth of vocal performance, I bring artistry and soul
              to every piece.
            </p>
            <p className="text-lg text-[#5C4E3A] mb-8 leading-relaxed">
              Available for concerts, private events, weddings, and special
              occasions. Let's create something beautiful together.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src={singmus}
              alt="Singmus"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-[#E8DCC4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-[#3D3326] text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F1E8] p-8 rounded-lg text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4C5A0] rounded-full mb-4">
                <Piano className="w-8 h-8 text-[#5C4E3A]" />
              </div>
              <h3 className="text-2xl text-[#3D3326] mb-3">Piano Performance</h3>
              <p className="text-[#5C4E3A]">
                Classical and contemporary piano pieces performed with
                precision and emotion.
              </p>
            </div>
            <div className="bg-[#F5F1E8] p-8 rounded-lg text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4C5A0] rounded-full mb-4">
                <Mic2 className="w-8 h-8 text-[#5C4E3A]" />
              </div>
              <h3 className="text-2xl text-[#3D3326] mb-3">Vocal Performance</h3>
              <p className="text-[#5C4E3A]">
                Versatile vocal performances across multiple genres and styles.
              </p>
            </div>
            <div className="bg-[#F5F1E8] p-8 rounded-lg text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4C5A0] rounded-full mb-4">
                <Music className="w-8 h-8 text-[#5C4E3A]" />
              </div>
              <h3 className="text-2xl text-[#3D3326] mb-3">Live Events</h3>
              <p className="text-[#5C4E3A]">
                Professional performances for weddings, concerts, and special
                occasions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl text-[#3D3326] text-center mb-12">
          Recent Performances
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={razzled}
              alt="Scaredmus"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={loungemus}
              alt="Loungemus"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src={soldiermus}
              alt="Soldiermus"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/sample/gallery"
            className="inline-block px-8 py-3 bg-[#D4C5A0] text-[#3D3326] rounded-md hover:bg-[#C4B590] transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </div>
  );
}
