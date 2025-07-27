import Image from 'next/image';
import {CiTwitter, CiInstagram, CiLinkedin} from "react-icons/ci";

const TeamMember = ({ name, position, imagepath }) => {  return (
    <div className="text-center">
        <Image
            src={imagepath}
            alt={name}
            width={160}
            height={160}
            className="mx-auto rounded-full object-cover h-40 w-40"
        />
        <h3 className="mt-4 font-semibold text-base sm:text-lg">{name}</h3>
        <p className="text-gray-500 text-sm">{position}</p>
        <div className={"flex justify-evenly w-1/2 m-auto mt-3"}>
            <a href={""}><CiTwitter className={"h-7 w-7 font-bold hover:text-[#1da1f2]"}/></a>
            <a href={""}><CiInstagram className={"h-7 w-7 font-bold hover:text-[#E1306C]"}/></a>
            <a href={""}><CiLinkedin className={"h-7 w-7 font-bold hover:text-[#0077b5]"}/></a>
        </div>
    </div>
);
}

export default TeamMember