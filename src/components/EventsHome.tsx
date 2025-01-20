import { Github, Instagram, Linkedin, MessageSquare, Youtube } from "lucide-react";
import Link from "next/link";

type eventHomeProps = {
  Classname: string;
  eventName: string;
  display?: boolean;
  rules?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  whatsapp?: string;
};

const EventHome = ({
  Classname,
  eventName,
  display = true,
  rules,
  linkedin,
  instagram,
  youtube,
  github,
  whatsapp,
}: eventHomeProps) => {
  return (
    <div className={`flex w-full justify-center px-4 sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-10 ${Classname}`}>
      <div className="flex w-full items-center justify-between rounded-md border-[1px] border-[#5f5f5f] bg-[#111111] bg-opacity-40 px-4 py-2 text-xl md:h-[65px] md:py-0 md:text-2xl">
        <div className={`cursor-default border-l-4 border-green-500 py-1 pl-4 font-semibold text-white
          ${display ? "text-base" : "text-lg md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px]"}`}>
          {eventName}
        </div>
        <div className="flex flex-row items-center gap-4">
          {rules && (
            <Link href={rules} target="_blank"
              className="cursor-pointer bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-lg font-semibold text-transparent hover:from-[#3BABCF] hover:to-[#0070C5] md:text-xl 2xl:text-[1.4vw] 3xl:text-[25px]">
              Rules
            </Link>
          )}
          <div className="flex gap-3">
            {linkedin && (
              <Link href={linkedin} target="_blank" className="text-[#3BABCF] hover:text-[#0070C5]">
                <Linkedin size={24} />
              </Link>
            )}
            {instagram && (
              <Link href={instagram} target="_blank" className="text-[#3BABCF] hover:text-[#0070C5]">
                <Instagram size={24} />
              </Link>
            )}
            {youtube && (
              <Link href={youtube} target="_blank" className="text-[#3BABCF] hover:text-[#0070C5]">
                <Youtube size={24} />
              </Link>
            )}
            {github && (
              <Link href={github} target="_blank" className="text-[#3BABCF] hover:text-[#0070C5]">
                <Github size={24} />
              </Link>
            )}
            {whatsapp && (
              <Link href={whatsapp} target="_blank" className="text-[#3BABCF] hover:text-[#0070C5]">
                <MessageSquare size={24} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHome;
