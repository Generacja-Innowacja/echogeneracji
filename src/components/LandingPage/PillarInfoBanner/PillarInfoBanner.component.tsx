import { PILLAR_DATA } from "@/components/LandingPage/PillarInfoBanner/PillarInfoBanner.constants";

type Props = {
  pillar: "relacje" | "glos" | "wplyw";
};

export const PillarInfoBanner = ({ pillar }: Props) => {
  const { headerVerb, headerNoun, description, image, button } =
    PILLAR_DATA[pillar];
  return (
    <>
      <div
        className={`w-full rounded-[32px] p-[32px] bg-no-repeat`}
        style={{
          backgroundImage: `linear-gradient(to right, rgb(231, 232, 235, 1.0) 75%, rgb(231, 232, 235, 0.0)), url('${image.src}')`,
          backgroundPosition: "right 0px",
          backgroundSize: "contain",
        }}
      >
        <div className="mb-[16px]">
          <h1 className="text-[24px] font-bold text-violet">
            {headerVerb} <span className="text-lightviolet">{headerNoun}</span>
          </h1>
        </div>

        <div className="rounded-[32px] p-[32px] bg-white leading-[24px] max-w-[553px] mb-[16px]">
          <p>{description}</p>
        </div>
        {button}
      </div>
    </>
  );
};
