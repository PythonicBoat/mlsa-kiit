import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/Github.svg";
import LinkdIcon from "../../../public/LinkedIn.svg";
import InstaIcon from "../../../public/instagram.svg";
const imgStyle: any = {
  objectPosition: "center",
  objectFit: "cover",
};

const Item = ({ into, isActive, onClick }: any) => {
  const handleImageClick = () => {
    onClick();
  };

  return (
    <div className={`h-[220px] md:h-[270px] bg-gray-950 lg:h-[350px] 2xl:h-[400px] w-full rounded-md md:rounded-xl transition-transform duration-300 hover:scale-[1.02] shadow-lg ${into.lead ?
      'shadow-[0_0_15px_rgba(0,149,255,0.4)] hover:shadow-[0_0_25px_rgba(0,149,255,0.6)] relative before:absolute before:inset-0 before:-z-10 before:rounded-md before:md:rounded-xl before:shadow-[0_0_20px_rgba(0,149,255,0.3)] after:absolute after:top-2 after:md:top-4 after:right-2 after:md:right-4 after:px-2 after:md:px-4 after:py-0.5 after:md:py-1.5 after:text-xs after:md:text-sm after:font-bold after:text-blue-400 after:content-["LEAD"] after:bg-[#1a1a1a]/90 after:backdrop-blur-md after:rounded-full after:z-40 after:border-[1px] after:border-blue-400/30 after:shadow-[0_0_10px_rgba(0,149,255,0.5)]' : ''
      }`}>
      <div className={`image-members rounded-md md:rounded-xl hover:cursor-pointer z-40 relative h-[175px] md:h-[230px] lg:h-[290px] 2xl:h-[340px] w-full transition-all duration-300 ease-in-out hover:shadow-xl ${into.lead ? 'border-2 border-blue-400/40' : ''
        }`} onClick={handleImageClick}>
        <Image
          src={into.img}
          style={imgStyle}
          className={`${isActive
            ? "h-full z-30 w-full rounded-t-md rounded-b-none md:rounded-t-xl md:rounded-b-none"
            : "h-full z-30 w-full rounded-md md:rounded-xl"} transition-all duration-300`}
          width={700}
          height={700}
          alt={into.name || "team member"}
        />
      </div>

      <div className={`
        pb-[8px] md:pb-[10px]  bg-gray-950 backdrop-blur-sm w-full px-[10px] py-[8px] flex rounded-[10px] rounded-t-none h-max
        justify-between items-end transition-all  duration-300 ease-in-out z-10`}>
        <div className="flex flex-col items-center relative w-full gap-2">
          <div className="text-[13px] lg:text-[17px] 2xl:text-[21px] text-[#FFF] font-medium leading-tight capitalize text-center">
            {into.name}
          </div>

          <div className="flex items-center gap-2.5 md:gap-4">
            {into.instagram && (
              <Link href={into.instagram} className="transform transition-all duration-200 hover:scale-125 hover:-translate-y-1">
                <Image src={InstaIcon} alt="Instagram" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]" />
              </Link>
            )}
            {into.linkedIn && (
              <Link href={into.linkedIn} className="transform transition-all duration-200 hover:scale-125 hover:-translate-y-1">
                <Image src={LinkdIcon} alt="LinkedIn" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]" />
              </Link>
            )}
            {into.github && (
              <Link href={into.github} className="transform transition-all duration-200 hover:scale-125 hover:-translate-y-1">
                <Image src={GithubIcon} alt="GitHub" className="h-[15px] w-[15px] md:h-[17px] md:w-[17px] 2xl:h-[24px] 2xl:w-[24px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;

