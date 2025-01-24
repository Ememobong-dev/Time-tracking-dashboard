import React from "react";
import tripleDot from "../../../public/images/icon-ellipsis.svg";
import Image from "next/image";

const FolderCard = ({
  icon,
  tag,
  hoursTracked,
  lastWeekHour,
  variant,
}: {
  icon: string;
  tag: string;
  hoursTracked: number;
  lastWeekHour: number;
  variant: string;
}) => {
  return (
    <div className=" h-[250px] border border-darkBlue rounded-2xl relative ">
      <div style={{ background: variant }} className={`h-[30%] rounded-t-2xl`}>
        <span className="z-[1] absolute top-0 right-5">
          <Image
            src={icon}
            className="object-fill"
            width={80}
            height={80}
            alt=""
          />
        </span>
      </div>

      <div className="py-16 font-rubikRegular hover:bg-desaturatedBlue text-white absolute h-[80%] bottom-0 w-full rounded-2xl z-50 bg-darkBlue p-5">
        <div className="flex mb-5 items-center justify-between">
          <p className="text-base font-rubikRegular">{tag}</p>
          <span className="cursor-pointer">
            <Image src={tripleDot} alt="triple dots" />
          </span>
        </div>
        <div className="flex justify-between md:flex-col ">
          <h3 className="text-4xl font-rubikLight ">{hoursTracked}hrs</h3>
          <p className="text-paleBlue  mt-2">Last Week - {lastWeekHour}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;
