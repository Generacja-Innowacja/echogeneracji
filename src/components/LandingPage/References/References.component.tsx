import Image from "next/image";

type Props = {
  text: string;
  name: string;
  organisation: string;
  image: string;
};

export const References = ({ text, name, organisation, image }: Props) => {
  return (
    <>
      <div className="bg-gradient-to-r from-verydarkblue to-darkblue text-white p-[32px] rounded-[32px] w-fit text-[16px]">
        <div className="bg-white/10 p-[32px] rounded-[24px] w-[300px] leading-[24px]">
          {text}
        </div>
        <div className="flex flex-wrap mt-[16px]">
          <div className="mr-[16px] rounded-[50%] bg-white/10">
            <Image
              className="rounded-[50%]"
              src={image}
              width={48}
              height={48}
              alt="icon"
            />
          </div>
          <div>
            <p className="font-[700] leading-[24px]">{name}</p>
            <p className="leading-[24px]">{organisation}</p>
          </div>
        </div>
      </div>
    </>
  );
};
