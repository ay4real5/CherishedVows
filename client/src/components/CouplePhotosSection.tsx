import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import photo1 from "@assets/DSC_6689 2_1759826058166.jpg";
import photo2 from "@assets/DSC_6448 2_1759826058167.jpg";
import photo3 from "@assets/IMG_4297_1759826058168.jpeg";
import photo4 from "@assets/IMG_4352_1759826058170.jpeg";
import photo5 from "@assets/IMG_4718_1759826058171.jpeg";
import photo6 from "@assets/IMG_0366_1759826058171.jpeg";
import photo7 from "@assets/IMG_4942_1759826058172.jpeg";
import photo8 from "@assets/IMG_0355_1759826058173.jpeg";

const couplePhotos = [
  { id: 1, src: photo1, alt: "Yemisi & Abisoye - Photo 1" },
  { id: 2, src: photo2, alt: "Yemisi & Abisoye - Photo 2" },
  { id: 3, src: photo3, alt: "Yemisi & Abisoye - Photo 3" },
  { id: 4, src: photo4, alt: "Yemisi & Abisoye - Photo 4" },
  { id: 5, src: photo5, alt: "Yemisi & Abisoye - Photo 5" },
  { id: 6, src: photo6, alt: "Yemisi & Abisoye - Photo 6" },
  { id: 7, src: photo7, alt: "Yemisi & Abisoye - Photo 7" },
  { id: 8, src: photo8, alt: "Yemisi & Abisoye - Photo 8" },
];

export function CouplePhotosSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section id="our-photos" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Journey Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cherished moments from our love story
          </p>
          <div className="inline-block mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
        </div>

        {/* Photo Grid - Masonry Style Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* First Column */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[0].src)}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-1"
            >
              <img
                src={couplePhotos[0].src}
                alt={couplePhotos[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[4].src)}
              className="relative w-full aspect-square overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-5"
            >
              <img
                src={couplePhotos[4].src}
                alt={couplePhotos[4].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Second Column */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[1].src)}
              className="relative w-full aspect-square overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-2"
            >
              <img
                src={couplePhotos[1].src}
                alt={couplePhotos[1].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[5].src)}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-6"
            >
              <img
                src={couplePhotos[5].src}
                alt={couplePhotos[5].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Third Column */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[2].src)}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-3"
            >
              <img
                src={couplePhotos[2].src}
                alt={couplePhotos[2].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[6].src)}
              className="relative w-full aspect-square overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-7"
            >
              <img
                src={couplePhotos[6].src}
                alt={couplePhotos[6].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Fourth Column */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[3].src)}
              className="relative w-full aspect-square overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-4"
            >
              <img
                src={couplePhotos[3].src}
                alt={couplePhotos[3].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => setSelectedPhoto(couplePhotos[7].src)}
              className="relative w-full aspect-[3/4] overflow-hidden rounded-lg hover-elevate group"
              data-testid="couple-photo-8"
            >
              <img
                src={couplePhotos[7].src}
                alt={couplePhotos[7].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Lightbox Dialog */}
        {selectedPhoto && (
          <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
            <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                data-testid="button-close-photo-lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedPhoto}
                alt="Selected photo"
                className="w-full h-auto max-h-[90vh] object-contain"
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}
