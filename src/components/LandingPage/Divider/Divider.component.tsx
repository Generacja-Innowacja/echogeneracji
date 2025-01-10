import loudspeakerIcon from "@/assets/svg/pillars/loudspeaker.svg";
import relationsIcon from "@/assets/svg/pillars/relations.svg";
import targetIcon from "@/assets/svg/pillars/target.svg";
import Image from "next/image";

type Props = {
  pillar: 'relacje' | 'glos' | 'wplyw';
};

const ICONS = {
  relacje: {
    image: relationsIcon,
    text: "Relacje",
  },
  glos: {
    image: loudspeakerIcon,
    text: "Głos",
  },
  wplyw: {
    image: targetIcon,
    text: "Wpływ",
  },
};

export const Divider = ({ pillar }: Props) => {
  const { image, text } = ICONS[pillar] || { image: null, text: "" };

  return (
    <>
      <div className="flex flex-wrap place-content-center">
        <div className="h-[36px] pr-[16px]">
          <Image src={image} alt="icon h-[28px] w-[40px]" />
        </div>
        <div className="h-[36px] text-[24px] font-bold text-violet pr-[16px]">
          <h1>{text}</h1>
        </div>
        <div className="h-[36px] grow place-content-center">
          <hr />
        </div>
      </div>
    </>
  );
};
