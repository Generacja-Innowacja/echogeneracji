import { ORGANISATIONS } from "@/constants/organisations";
import { paths } from "@/constants/paths";
import Image from "next/image";
import Link from "next/link";

export const HeroBanner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-verydarkblue to-darkblue rounded-[32px] min-h-[312px] text-center w-full mx-[16px]">
        <div className="text-[24px] text-white h-[248px] leading-[60px] font-bold min-h-[120px] place-content-center sm:text-[40px]">
          <h1>Budujemy liderów i liderki przyszłości</h1>
        </div>
        <hr className="border-[#383838]" />
        <div className="flex gap-4 mix-blend-luminosity flex-wrap place-content-center min-h-[64px] p-[24px]">
          {ORGANISATIONS.map(({ logo, name, tag }) => (
            <Link key={tag} href={paths.orgArticles(tag)}>
              <Image src={logo.light} alt={name} title={name} height={16} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
