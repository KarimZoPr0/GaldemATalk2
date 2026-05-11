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
        className="relative bg-[#F4F3EF] text-[#0F0F0F] py-20 md:py-28 border-t-2 border-[#0F0F0F] scroll-mt-24 md:scroll-mt-28"
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="flex items-baseline gap-4 mb-10 md:mb-14">
            <span className="font-sub uppercase tracking-[0.25em] text-[11px]">
              Galleri
            </span>
            <span className="flex-1 h-px bg-[#0F0F0F]/20" />
            <span className="font-sub uppercase tracking-[0.25em] text-[11px] opacity-60 hidden sm:inline">
              Klicka för större
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-14">
            <h2 className="col-span-12 md:col-span-7 font-display uppercase leading-[0.86] text-[clamp(2.25rem,6vw,4.5rem)]">
              Ögonblick
              <br />
              från oss.
            </h2>
            <p className="col-span-12 md:col-span-5 font-body text-[15px] md:text-[16px] text-[#4B5563] max-w-md md:ml-auto">
              Ett urval foton från events, festival och vardag i föreningen. Välj en
              bild för att visa den större.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {GALLERY.map((item) => (
              <button
                key={item.id}
                type="button"
                data-testid={`gallery-thumb-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className="group relative aspect-[4/3] overflow-hidden border-2 border-[#0F0F0F] bg-[#E8E6E0] p-0 text-left cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F0F0F]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]"
                  loading="lazy"
                  draggable={false}
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F0F0F]/75 to-transparent px-3 py-3 md:px-4 md:py-4 pt-10 md:pt-12">
                  <span className="font-sub text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-[#F4F3EF] line-clamp-2">
                    {item.caption}
                  </span>
                </span>
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
          className="max-w-[min(96vw,960px)] w-full gap-0 rounded-none border-2 border-[#0F0F0F] bg-[#F4F3EF] p-0 shadow-none sm:rounded-none"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">
            {active ? active.caption : "Bild"}
          </DialogTitle>
          {active && (
            <div className="flex flex-col">
              <div className="relative bg-[#0F0F0F]">
                <img
                  src={active.image}
                  alt={active.alt}
                  className="w-full max-h-[min(72vh,800px)] object-contain"
                />
              </div>
              <p className="font-body text-[15px] md:text-[16px] text-[#4B5563] px-5 py-4 md:px-6 md:py-5 border-t-2 border-[#0F0F0F]">
                {active.caption}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
