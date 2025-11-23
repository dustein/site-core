import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { Slideshow, Fullscreen } from "yet-another-react-lightbox/plugins";

const photos = [
  { src: "/images/galeria/20230428_0633490.jpg", width: 2560, height: 1440, alt: "20230428 0633490" },
  { src: "/images/galeria/20231009_054039.jpg", width: 2880, height: 2160, alt: "20231009 054039" },
  { src: "/images/galeria/IMG-20240504-WA0009.jpg", width: 720, height: 691, alt: "IMG 20240504 WA0009" },
  { src: "/images/galeria/20250904_135220.jpg", width: 4080, height: 3060, alt: "20250904 135220" },
  { src: "/images/galeria/20230516_122925.jpg", width: 2560, height: 1440, alt: "20230516 122925" },
  { src: "/images/galeria/20250320_064210.jpg", width: 4080, height: 3060, alt: "20250320 064210" },
  { src: "/images/galeria/20250912_084150.jpg", width: 4080, height: 3060, alt: "20250912 084150" },
  { src: "/images/galeria/20231009_055203.jpg", width: 2880, height: 2160, alt: "20231009 055203" },
  { src: "/images/galeria/20240812_135749.jpg", width: 4080, height: 3060, alt: "20240812 135749" },
  { src: "/images/galeria/20250320_063243.jpg", width: 4080, height: 3060, alt: "20250320 063243" },
  { src: "/images/galeria/20241203_053343.jpg", width: 4080, height: 3060, alt: "20241203 053343" },
  { src: "/images/galeria/20230524_084630.jpg", width: 2560, height: 1440, alt: "20230524 084630" },
  { src: "/images/galeria/20230628_065602.jpg", width: 1440, height: 2560, alt: "20230628 065602" },
  { src: "/images/galeria/20250616_122438.jpg", width: 4080, height: 3060, alt: "20250616 122438" },
  { src: "/images/galeria/20241203_055314.jpg", width: 4080, height: 3060, alt: "20241203 055314" },
  { src: "/images/galeria/20230524_055043.jpg", width: 2560, height: 1440, alt: "20230524 055043" },
  { src: "/images/galeria/20230524_063512.jpg", width: 2560, height: 1440, alt: "20230524 063512" },
  { src: "/images/galeria/IMG-20240218-WA0041.jpg", width: 1600, height: 1200, alt: "IMG 20240218 WA0041" },
  { src: "/images/galeria/20250320_061655.jpg", width: 2719, height: 1905, alt: "20250320 061655" },
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