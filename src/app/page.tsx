"use client";

import { Col, Row } from "antd";
import Image from "next/image";
import imageJeremy from "../../public/images/image-jeremy.png";
import data from "@/app/data.json";
import FolderCard from "./components/FolderCard";
import { useState } from "react";

type timeFrameType = "weekly" | "daily" | "monthly";

export default function Home() {
  const [timeframe, setTimeframe] = useState<timeFrameType>("weekly");
  const [activeTimeFrame, setActiveTimeFrame] = useState(1);

  const timeNav: timeFrameType[] = ["daily", "weekly", "monthly"];

  const handleTimeNav = ({
    duration,
    index,
  }: {
    duration: timeFrameType;
    index: number;
  }) => {
    setTimeframe(duration);
    setActiveTimeFrame(index);
  };

  return (
    <div className="w-full  max-w-[1400px] ">
      <Row justify={"center"} className="md:flex md:justify-center  md:items-center ">
        <Col xs={22}>
          <Row justify={"center"} align={'middle'} gutter={32}>
            <Col xs={24} md={6}>
              <div className="h-full block my-10 md:my-0 w-full bg-darkBlue rounded-2xl">
                <div className="bg-blue w-full flex gap-8 md:flex-col md:gap-10 rounded-2xl md:py-20 py-5 px-8">
                  <span>
                    <Image
                      src={imageJeremy}
                      width={65}
                      height={65}
                      alt="profile image"
                    />
                  </span>
                  <div>
                    <span>
                      <p className="text-paleBlue font-rubikRegular">
                        Report for
                      </p>
                    </span>
                    <span className="text-white font-rubikLight text-2xl md:text-4xl">
                      <p>Jeremy Robson</p>
                    </span>
                  </div>
                </div>
                <div className="p-8 flex justify-between items-center md:items-start md:flex-col md:gap-y-2 font-rubikRegular text-desaturatedBlue">
                  {timeNav.map((duration, index) => (
                    <span
                      key={index}
                      onClick={() => handleTimeNav({ duration, index })}
                      className={`cursor-pointer capitalize text-base hover:text-white ${
                        activeTimeFrame === index
                          ? "text-white"
                          : "text-desaturatedBlue"
                      }`}
                    >
                      {" "}
                      {duration}{" "}
                    </span>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={24} md={18}>
              <div className="h-full w-full">
                <Row justify={"center"} gutter={[32, 32]}>
                  {data.map((item) => (
                    <Col key={item.title} xs={24} md={8}>
                      <FolderCard
                        icon={item.icon}
                        tag={item.title}
                        hoursTracked={item.timeframes[timeframe].current}
                        lastWeekHour={item.timeframes[timeframe].previous}
                        variant={item.variant}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
