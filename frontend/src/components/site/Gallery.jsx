import { useState } from "react";
import { GALLERY } from "@/data/site";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export const Gallery = () => {
  const [activeId, setActiveId] = useState(null);
  const active = GALLERY.find((g) => g.id === activeId) ?? null;

  return (
    <>
      <section
        id="galleri"
        data-testid="gallery-section"
        aria-label="Bildgalleri"
        className="relative bg-[#F4F3EF] text-[#0F0F0F] py-16 md:py-20 border-t-2 border-[#0F0F0F] scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {GALLERY.map((item) => (
              <button
                key={item.id}
                type="button"
                data-testid={`gallery-thumb-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className="group relative aspect-[4/3] overflow-hidden border-2 border-[#0F0F0F] bg-[#E8E6E0] p-0 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActiveId(null);
        }}
      >
        <DialogContent
          className="max-w-[min(96vw,960px)] w-full gap-0 rounded-none border-2 border-[#0F0F0F] bg-[#0F0F0F] p-0 shadow-none sm:rounded-none"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {active ? active.alt : "Bild"}
          </DialogTitle>
          {active && (
            <img
              src={active.image}
              alt={active.alt}
              className="w-full max-h-[min(72vh,800px)] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
