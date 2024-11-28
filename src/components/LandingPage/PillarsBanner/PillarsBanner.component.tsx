import loudspeakerIcon from "@/assets/svg/pillars/loudspeaker.svg";
import relationsIcon from "@/assets/svg/pillars/relations.svg";
import targetIcon from "@/assets/svg/pillars/target.svg";
import Image from "next/image";

export const PillarsBanner = () => {
  return (
    <>
      <div className="w-full rounded-[32px] border-dashed border-[2px] text-[24px] font-bold text-violet p-[32px] border-darkgray">
        <div className="mb-[32px]">
          <p>
            <span className="text-lightviolet">Filary </span>Echa Generacji
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="bg-lightviolet/10 rounded-[32px] p-[16px] h-[100px] mr-[32px] mb-[16px] flex grow min-w-[220px]">
            <div className="w-[40px] h-[28px] m-[16px]">
              <Image
                src={relationsIcon}
                alt="relations icon h-[28px] w-[40px]"
              />
            </div>
            <div className="w-[91px] m-[16px]">
              <p>Relacje</p>
            </div>
          </div>
          <div className="bg-lightviolet/10 rounded-[32px] p-[16px] h-[100px] mr-[32px]  mb-[16px] flex grow min-w-[220px]">
            <div className="w-[40px] h-[28px] m-[16px]">
              <Image
                src={loudspeakerIcon}
                alt="relations icon h-[28px] w-[40px]"
              />
            </div>
            <div className="w-[91px] my-[16px]">
              <p>Głos</p>
            </div>
          </div>
          <div className="bg-lightviolet/10 rounded-[32px] p-[16px] h-[100px] mr-[32px] mb-[16px] flex grow min-w-[220px]">
            <div className="w-[40px] h-[28px] m-[16px]">
              <Image src={targetIcon} alt="relations icon h-[28px] w-[40px]" />
            </div>
            <div className="w-[91px] my-[16px]">
              <p>Wpływ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
