// @ts-ignore
import razzled from "./images/razzled.jpeg";
// @ts-ignore
import loungemus from "./images/loungemus.jpeg";
// @ts-ignore
import soldiermus from "./images/soldiermus.jpeg";
// @ts-ignore
import eightiesmus from "./images/eightiesmus.jpeg";
// @ts-ignore
import beigemus from "./images/beigemus.jpeg";
// @ts-ignore
import spiderpigmus from "./images/spiderpigmus.jpeg";
// @ts-ignore
import beachmus from "./images/beachmus.jpeg";
// @ts-ignore
import mmmus from "./images/mmmus.jpeg";
import { Link } from "react-router-dom";


export function Gallery() {
  const images = [
    {
      url: razzled,
      alt: "Scaredmus",
      title: "Rasmus",
    },
    {
      url: loungemus,
      alt: "Loungemus",
      title: "Rasmus",
    },
    {
      url: soldiermus,
      alt: "Soldiermus",
      title: "Rasmus",
    },
    {
      url: eightiesmus,
      alt: "Eightiesmus",
      title: "Rasmus",
    },
    {
      url: beigemus,
      alt: "Beigemus",
      title: "Rasmus",
    },
    {
      url: spiderpigmus,
      alt: "Spiderpigmus",
      title: "Rasmus",
    },
    {
      url: beachmus,
      alt: "Beachmus",
      title: "Rasmus",
    },
    {
      url: mmmus,
      alt: "Mmmus",
      title: "Rasmus",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl text-[#3D3326] mb-4">Gallery</h1>
          <p className="text-xl text-[#5C4E3A]">
            A collection of moments from my musical journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#E8DCC4] rounded-lg p-8 text-center">
          <h2 className="text-3xl text-[#3D3326] mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-[#5C4E3A] mb-6">
            Follow me on social media for updates on upcoming performances and
            behind-the-scenes content.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/about"
              className="px-8 py-3 bg-[#8B7355] text-white rounded-md hover:bg-[#7A6348] transition-colors"
            >
              Book a Performance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
