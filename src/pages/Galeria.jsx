import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { Slideshow, Fullscreen } from "yet-another-react-lightbox/plugins";

const photos = [
  { src: "/images/galeria/001.jpg", width: 800, height: 600, alt: "foto 001" },
  { src: "/images/galeria/002.jpg", width: 800, height: 600, alt: "foto 002" },
  { src: "/images/galeria/003.jpg", width: 800, height: 450, alt: "foto 003" },
  { src: "/images/galeria/004.jpg", width: 800, height: 600, alt: "foto 004" },
  { src: "/images/galeria/005.jpg", width: 800, height: 600, alt: "foto 005" },
  { src: "/images/galeria/006.jpg", width: 800, height: 600, alt: "foto 006" },
  { src: "/images/galeria/007.jpg", width: 800, height: 600, alt: "foto 007" },
  { src: "/images/galeria/017.jpg", width: 450, height: 800, alt: "foto 017" },
  { src: "/images/galeria/008.jpg", width: 800, height: 600, alt: "foto 008" },
  { src: "/images/galeria/009.jpg", width: 800, height: 600, alt: "foto 009" },
  { src: "/images/galeria/010.jpg", width: 800, height: 450, alt: "foto 010" },
  { src: "/images/galeria/011.jpg", width: 800, height: 600, alt: "foto 011" },
  { src: "/images/galeria/012.jpg", width: 800, height: 600, alt: "foto 012" },
  { src: "/images/galeria/016.jpg", width: 800, height: 560, alt: "foto 016" },
  { src: "/images/galeria/013.jpg", width: 800, height: 450, alt: "foto 013" },
  { src: "/images/galeria/014.jpg", width: 800, height: 450, alt: "foto 014" },
  { src: "/images/galeria/015.jpg", width: 800, height: 600, alt: "foto 015" },
  { src: "/images/galeria/018.jpg", width: 800, height: 450, alt: "foto 018" },
];



export function Galeria() {
  const [open, setOpen] = React.useState(false);
  // Estado para armazenar o índice da foto clicada
  const [index, setIndex] = React.useState(-1); 

  return (
    <div className="p-4">
     <h1 className="text-4xl font-core-apoio font-bold text-center pb-10">Galeria de Imagens</h1>
      <MasonryPhotoAlbum
        photos={photos}
        spacing={10}
     
        onClick={({ index }) => {
          setIndex(index); // Define o slide inicial
          setOpen(true);    // Abre o Lightbox
        }}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        // Propriedade chave: diz ao Lightbox qual slide começar
        index={index} 
        plugins={[Zoom, Slideshow, Fullscreen]}
        fullscreen={{ auto: true }}
        slides={photos}
      />
    </div>
  );
}