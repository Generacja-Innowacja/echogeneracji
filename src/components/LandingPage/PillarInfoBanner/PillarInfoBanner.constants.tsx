import influencePillarImage from "@/assets/images/pillars-info/wplyw.png";
import relationsPillarImage from "@/assets/images/pillars-info/relacje.png";
import voicePillarImage from "@/assets/images/pillars-info/glos.png";

type PillarName = "relacje" | "glos" | "wplyw";

interface ImageObject {
  [src: string]: any;
}

interface Pillar {
  headerVerb: string;
  headerNoun: string;
  description: JSX.Element;
  image: ImageObject;
  button: JSX.Element;
}

export const PILLAR_DATA: Record<PillarName, Pillar> = {
  relacje: {
    headerVerb: "Budujemy",
    headerNoun: "relacje",
    description: (
      <>
        Organizujemy sesje networkingowe, w ramach których wymieniamy się
        doświadczeniami i wiedzą. Na każde z wydarzeń przychodzi{" "}
        <b>kilkanaście osób</b>, w tym goście międzynarodowi!
      </>
    ),
    image: relationsPillarImage,
    button: (
      <div
        className={`text-[#42419D] bg-[#D8D8E5] p-[16px] w-fit font-bold text-[16px] rounded-[16px]`}
      >
        Dzięki Echu powstały już liczne wspólne projekty
      </div>
    ),
  },
  glos: {
    headerVerb: "Nadajemy",
    headerNoun: "głos",
    description: (
      <>
        Zbudowaliśmy jedyną w Polsce platformę publicystyczną dla organizacji
        społecznych. To tutaj, na portalu Echa, opublikowane zostało już{" "}
        <b>kilkadziesiąt artykułów eksperckich</b> przygotowanych przez młode
        Polki i Polaków!
      </>
    ),
    image: voicePillarImage,
    button: (
      <div
        className={`text-white bg-[#42419D] p-[16px] w-fit font-bold text-[16px] rounded-[16px]`}
      >
        <a
          href="https://www.instagram.com/p/C74uLpqI5Mj/?img_index=1"
          target="_blank"
        >
          Sprawdź artykuły
        </a>
      </div>
    ),
  },
  wplyw: {
    headerVerb: "Budujemy",
    headerNoun: "wpływ",
    description: (
      <>
        Nadajemy ton naszemu spojrzeniu na świat. Publikujemy stanowiska w
        sprawach kluczowych dla przyszłości Polski. Łączymy know-how,
        doświadczenie i świeże spojrzenie młodych
      </>
    ),
    image: influencePillarImage,
    button: (
      <div
        className={`text-white bg-[#42419D] p-[16px] w-fit font-bold text-[16px] rounded-[16px]`}
      >
        Stanowisko ws. EuroWyborów 2024
      </div>
    ),
  },
};
