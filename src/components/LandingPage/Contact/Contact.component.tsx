import icon from "@public/images/contact-icon.png";
import envelope from "@/assets/svg/contact/envelope.svg";
import Image from "next/image";

export const Contact = () => {
  return (
    <>
      <div className="w-full bg-lightgray rounded-[32px] p-[32px]">
        <div className="mb-[16px]">
          <h1 className="text-[24px] font-bold text-violet">Kontakt</h1>
        </div>

        <div className="rounded-[32px] p-[32px] bg-violet text-white w-fit">
          <div className="flex flex-wrap  mb-[16px]">
            <div className="mr-[16px] rounded-[50%] bg-white/10">
              <Image
                className="rounded-[50%]"
                src={icon}
                width={48}
                height={48}
                alt="icon"
              />
            </div>
            <div>
              <p className="font-[700] leading-[24px]">
                Baruch Jaakov Janowicz
              </p>
              <p className="leading-[24px]">Primum movens Echa Generacji</p>
            </div>
          </div>
          <a href="mailto:bj[@gi](https://github.com/gi).org.pl">
            <div className="bg-white/10 rounded-[16px] text-[16px] font-bold w-fit p-[16px] flex flex-wrap">
              <Image
                className="mr-[8px]"
                src={envelope}
                width={21.33}
                height={16}
                alt=""
              />
              <p>bj@gi.org.pl</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
