import React from "react";
import { Text } from "./..";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardStackorders({
  orderstext = "Orders",
  totaltext = "Total",
  zipcodetext = "123456",
  upcomingtext = "Upcoming",
  upcomingcount = "50",
  ongoingtext = "Ongoing",
  ongoingcount = "100",
  completedtext = "Completed",
  completedcount = "50",
  ...props
}) {
  return (
    <div {...props}>
      <CircularProgressbar
        strokeWidth={15}
        value={30}
        styles={buildStyles({
          trailColor: "#4fd2b5",
          pathColor: `linear-gradient(to right, #ff5733 0%, #ff5733 15%, #f1c40f 15%, #f1c40f 30%, #ffff00 30%, #ffff00 45%, #2ecc71 45%, #2ecc71 60%, #3498db 60%, #3498db 100%)`,
          strokeLinecap: "square",
        })}
        className="mt-[20px] h-[110px] w-[63%] ml-10"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center">
        <Text size="md" as="p" className="self-start">
          {orderstext}
        </Text>
        <Text as="p" className="mt-[47px] !text-gray-700">
          {totaltext}
        </Text>
        <Text as="p" className="!font-medium mb-6">
          {zipcodetext}
        </Text>
        <div className="mt-[54px] flex flex-wrap justify-between gap-5 self-stretch rounded bg-gradient">
          <Text as="p" className="self-end">
            {upcomingtext}
          </Text>
          <Text
            as="p"
            className="mr-2 h-[15px] w-[14px] self-start p-3 items-center flex"
          >
            {upcomingcount}
          </Text>
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-5 self-stretch rounded bg-gradient1">
          <Text as="p" className="self-end">
            {ongoingtext}
          </Text>
          <Text as="p" className="self-start p-1.5">
            {ongoingcount}
          </Text>
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-5 self-stretch rounded bg-gradient2">
          <Text as="p" className="self-end">
            {completedtext}
          </Text>
          <Text
            as="p"
            className="mr-2 h-[15px] w-[14px] self-start p-3  flex items-center"
          >
            {completedcount}
          </Text>
        </div>
      </div>
    </div>
  );
}
