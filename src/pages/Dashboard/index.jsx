import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../../components";
import DashboardStackorders from "../../components/DashboardStackorders";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";

const data = [
  {
    orderstext: "Orders",
    totaltext: "Total",
    zipcodetext: "123456",
    upcomingtext: "Upcoming",
    upcomingcount: "50",
    ongoingtext: "Ongoing",
    ongoingcount: "100",
    completedtext: "Completed",
    completedcount: "50",
  },
  {
    orderstext: "Trips",
    totaltext: "Total",
    zipcodetext: "123456",
    upcomingtext: "Upcoming",
    upcomingcount: "50",
    ongoingtext: "Ongoing",
    ongoingcount: "100",
    completedtext: "Completed",
    completedcount: "50",
  },
  {
    orderstext: "Revenue",
    totaltext: "Total",
    zipcodetext: "123456",
    upcomingtext: "Upcoming",
    upcomingcount: "50",
    ongoingtext: "Ongoing",
    ongoingcount: "100",
    completedtext: "Completed",
    completedcount: "50",
  },
  {
    orderstext: "Expences",
    totaltext: "Total",
    zipcodetext: "123456",
    upcomingtext: "Freight Charge",
    upcomingcount: "50",
    ongoingtext: "Driver Charge",
    ongoingcount: "100",
    completedtext: "Other Charges",
    completedcount: "50",
  },
];
const data1 = [
  { income: "Income", price: "100000 CAD", payments: "2 payments received" },
  { income: "Expenses", price: "50000 CAD", payments: "5 payments paid" },
];

export default function DashboardPage() {
  return (
    <>
      <Helmet>
        <title>VirajDashboard</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      {/* main dashboard section */}
      <div className="w-full bg-gray-50">
        {/* navigation sidebar section */}
        <div className="flex items-start md:flex-col">
          {/* sidebar menu section */}
          <Sidebar1 className="!sticky top-0 flex h-screen w-[66px] flex-col gap-[23px] overflow-auto bg-white-A700 p-4 shadow-xs md:hidden md:p-5" />

          {/* dashboard content section */}
          <div className="ml-5 mt-5 flex flex-1 flex-col items-start self-start md:ml-0 md:self-stretch md:p-5">
            {/* header section */}
            <Header className="flex items-center justify-between gap-5 self-stretch" />

            {/* stats overview section */}
            <div className="mt-4 flex gap-3 self-stretch md:flex-col">
              {data.map((d, index) => (
                <DashboardStackorders
                  {...d}
                  key={"listorders" + index}
                  className="relative h-[266px] w-full rounded-[12px] bg-white-A700 p-[11px] shadow-xs md:h-auto"
                />
              ))}
            </div>

            {/* quick actions section */}
            <Text size="lg" as="p" className="mt-6">
              Quick Actions
            </Text>
            <div className="mt-[13px] flex justify-around gap-5 self-stretch rounded-[16px] bg-white-A700 p-3.5 shadow-xs md:flex-col">
              <div className="flex flex-col items-center gap-[7px]">
                <Img
                  src="images/img_fleet_icons.svg"
                  alt="fleeticons"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p" className="!font-medium">
                  Create Indents
                </Text>
              </div>
              <div className="border-r border-gray-400 h-full" />{" "}
              {/* Vertical line */}
              <div className="flex flex-col items-center gap-[7px]">
                <Img
                  src="images/img_regular_used_icons_black_900.svg"
                  alt="regularused"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p" className="text-center !font-medium">
                  Add Vehicle
                </Text>
              </div>
              <div className="border-r border-gray-400 h-full" />{" "}
              {/* Vertical line */}
              <div className="flex flex-col items-center gap-[7px]">
                <Img
                  src="images/img_rv_hookup_fill0.svg"
                  alt="rvhookupfillzer"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p" className="text-center !font-medium">
                  Add Trailer
                </Text>
              </div>
              <div className="border-r border-gray-400 h-full" />{" "}
              {/* Vertical line */}
              <div className="flex flex-col items-center gap-[7px]">
                <Img
                  src="images/img_regular_used_icons_black_900_20x20.svg"
                  alt="regularused"
                  className="mr-3.5 h-[20px] w-[20px] md:mr-0"
                />
                <Text as="p" className="!font-medium">
                  Add Driver
                </Text>
              </div>
              <div className="border-r border-gray-400 h-full" />
              {/* Vertical line */}
              <div className="flex flex-col items-center gap-[7px]">
                <Img
                  src="images/img_regular_used_icons_black_900.svg"
                  alt="regularused"
                  className="h-[20px] w-[20px]"
                />
                <Text as="p" className="!font-medium">
                  Add Indents
                </Text>
              </div>
            </div>

            {/* alerts section */}
            <div className="mt-6 self-stretch">
              <div className="flex flex-col gap-[13px] mt-2">
                <div className="flex items-center justify-between gap-3">
                  <Text size="lg" as="p">
                    High Priority alerts (14)
                  </Text>
                  <div className="flex items-center gap-[5px]">
                    <a href="#">
                      <Text size="md" as="p" className="!text-indigo-900">
                        View All
                      </Text>
                    </a>
                    <Img
                      src="images/img_arrow_right.svg"
                      alt="arrowright"
                      className="h-[20px] w-[20px]"
                    />
                  </div>
                </div>
                <div className="flex gap-[52px] md:flex-col">
                  <div className="flex w-full rounded-[16px] bg-white-A700 p-[11px] shadow-xs">
                    <div className="flex w-full flex-col items-end gap-[13px]">
                      <div className="flex gap-2 self-stretch">
                        <Button
                          color="blue_50"
                          size="sm"
                          shape="round"
                          className="w-[32px]"
                        >
                          <Img src="images/img_regular_used_icons_black_900_20x20.svg" />
                        </Button>
                        <div className="flex flex-1 flex-col gap-[3px]">
                          <div className="flex flex-wrap items-center justify-between gap-5">
                            <Text
                              size="md"
                              as="p"
                              className="!font-medium !text-gray-900"
                            >
                              Driver Raised Concern
                            </Text>
                            <Text as="p" className="self-start !text-gray-900">
                              13 Fab 24
                            </Text>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Text size="xs" as="p" className="!text-gray-900">
                              Load No : 12454,
                            </Text>
                            <Text size="xs" as="p" className="!text-gray-900">
                              Bill To : RoaDo demo Bangalore
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="w-full leading-4 !text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius mod tempor incididunt ut labore et dolore
                        magna aliqua
                      </Text>
                      <div className="flex w-[46%] items-center justify-between gap-5 md:w-full">
                        <Text
                          size="md"
                          as="p"
                          className="mb-[5px] self-end !text-indigo-900 underline"
                        >
                          Ignore
                        </Text>
                        <Button shape="round" className="min-w-[73px]">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full rounded-[16px] bg-white-A700 p-3 shadow-xs">
                    <div className="flex w-full flex-col items-end gap-[13px]">
                      <div className="flex gap-2 self-stretch">
                        <Button
                          color="blue_50"
                          size="sm"
                          shape="round"
                          className="w-[32px]"
                        >
                          <Img src="images/img_laptop.svg" />
                        </Button>
                        <div className="flex-1">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex flex-wrap items-center justify-between gap-5">
                              <Text
                                size="md"
                                as="p"
                                className="!font-medium !text-gray-900"
                              >
                                Reefer Temp. out of range
                              </Text>
                              <Text
                                as="p"
                                className="self-start !text-gray-900"
                              >
                                13 Fab 24
                              </Text>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <Text size="xs" as="p" className="!text-gray-900">
                                Load No : 12454,
                              </Text>
                              <Text size="xs" as="p" className="!text-gray-900">
                                Bill To : RoaDo demo Bangalore
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text as="p" className="w-full leading-4 !text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eius mod tempor incididunt ut labore et dolore
                        magna aliqua
                      </Text>
                      <div className="flex w-[47%] items-center justify-between gap-5 md:w-full">
                        <Text
                          size="md"
                          as="p"
                          className="mb-[5px] self-end !text-indigo-900 underline"
                        >
                          Ignore
                        </Text>
                        <Button shape="round" className="min-w-[73px]">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* highlights section */}
          <div className="ml-2.5 flex w-[29%] flex-col gap-[13px] bg-white-A700 p-4 shadow-xs md:ml-0 md:w-full md:p-5">
            <div className="mt-2 flex flex-col items-start gap-1">
              <Text size="lg" as="p">
                Todays Highlights (14)
              </Text>
              <Text as="p" className="!text-gray-700">
                19 Mar 2024
              </Text>
            </div>
            <div className="mb-[5px]">
              <div className="flex gap-[18px] md:flex-row">
                {data1.map((d, index) => (
                  <div
                    key={"listincome" + index}
                    className="flex w-full flex-col items-start gap-[5px] rounded border border-solid border-gray-400 bg-white-A700 p-2.5"
                  >
                    <Text as="p" className="!font-medium !text-gray-700">
                      {d.income}
                    </Text>
                    <Text
                      size="lg"
                      as="p"
                      className={
                        index % 2 === 0 ? "text-green-600" : "text-red-500"
                      }
                    >
                      {d.price}
                    </Text>
                    <Text as="p" className="!text-gray-700">
                      {d.payments}
                    </Text>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                <Text size="md" as="p" className="font-extrabold">
                  Completed Activities (14)
                </Text>
                <a href="#" className="self-start">
                  <Text as="p" className="!text-gray-900 underline font-bold">
                    View All
                  </Text>
                </a>
              </div>
              <div className="mt-3 flex flex-col items-center gap-[13px] rounded border border-solid border-gray-400 bg-white-A700 py-[13px]">
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <Text
                    as="p"
                    className="w-[93%] leading-4 !text-gray-700 md:w-full"
                  >
                    <span className="text-indigo-900 font-medium">
                      Gurpreet Singh
                    </span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">
                      &nbsp;(Dispatch team) has created&nbsp;
                    </span>
                    <span className="text-black-900 font-medium">
                      Load No. I-I-AAA-1325
                    </span>
                  </Text>
                  <div className="h-px w-full self-stretch bg-gray-400" />
                </div>
                <Text
                  as="p"
                  className="w-[93%] leading-4 !text-gray-700 md:w-full md:p-5"
                >
                  <span className="text-indigo-900 font-bold">Aman</span>
                  <span className="text-gray-700">&nbsp;</span>
                  <span className="text-gray-700">(Driver)&nbsp;</span>
                  <span className="text-gray-900 font-medium">Picked Up</span>
                  <span className="text-gray-700">&nbsp;goods at&nbsp;</span>
                  <span className="text-gray-900 font-medium">
                    Location_Name
                  </span>
                  <span className="text-gray-700">&nbsp;for&nbsp;</span>
                  <span className="text-black-900 font-medium">
                    Load No. I-I-AAA-1325
                  </span>
                </Text>
                <div className="h-px w-full self-stretch bg-gray-400" />
                <Text
                  as="p"
                  className="w-[93%] leading-4 !text-gray-700 md:w-full md:p-5"
                >
                  <span className="text-indigo-900 font-bold">
                    Gurpreet Singh
                  </span>
                  <span className="text-black-900">&nbsp;</span>
                  <span className="text-gray-700">
                    &nbsp;(Dispatch team) has created&nbsp;
                  </span>
                  <span className="text-black-900 font-medium">
                    Load No. I-I-AAA-1325
                  </span>
                </Text>
                <div className="flex flex-col items-center gap-3.5 self-stretch">
                  <div className="h-px w-full self-stretch bg-gray-400" />
                  <Text as="p">
                    <span className="text-black-900 font-medium">
                      Load No. I-I-AAA-1325&nbsp;
                    </span>
                    <span className="text-gray-700">will</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">start added by&nbsp;</span>
                    <span className="text-indigo-900 font-bold">
                      Gurpreet Singh
                    </span>
                  </Text>
                </div>
              </div>
              <div className="mt-12 flex flex-wrap items-center justify-between gap-5">
                <Text size="md" as="p" className="!font-medium">
                  Scheduled Activities (14)
                </Text>
                <a href="#" className="self-start">
                  <Text as="p" className="!text-gray-900 underline font-bold">
                    View All
                  </Text>
                </a>
              </div>
              <div className="mt-3 flex flex-col gap-[13px] rounded border border-solid border-gray-400 bg-white-A700 py-[13px]">
                <div className="flex flex-col items-center justify-center px-3 pb-3 md:p-5">
                  <Text as="p">
                    <span className="text-black-900 font-medium">
                      Load No. I-I-AAA-1325&nbsp;
                    </span>
                    <span className="text-gray-700">will be</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-900">delivered</span>
                    <span className="text-indigo-900">&nbsp;by</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-indigo-900 font-medium">Aman</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-indigo-900 font-medium">
                      (Driver)
                    </span>
                  </Text>
                </div>
                <div className="h-px w-full bg-gray-400" />
                <Text
                  as="p"
                  className="w-[93%] leading-4 !text-gray-700 md:w-full md:p-5 pl-12"
                >
                  <span className="text-indigo-900 font-medium">Aman</span>
                  <span className="text-gray-700">&nbsp;</span>
                  <span className="text-gray-700">(Driver) will&nbsp;</span>
                  <span className="text-gray-900 font-medium">Picked Up</span>
                  <span className="text-gray-700">&nbsp;goods at&nbsp;</span>
                  <span className="text-gray-900 font-medium">
                    Location_Name
                  </span>
                  <br />
                  <span className="text-gray-700">&nbsp;for&nbsp;</span>
                  <span className="text-black-900">Load No. I-I-AAA-1325</span>
                </Text>
                <div className="h-px w-full bg-gray-400" />
                <div className="flex flex-col items-center justify-center p-3 md:p-5">
                  <Text as="p">
                    <span className="text-black-900 mr-1 font-medium">
                      Load No. I-I-AAA-1325&nbsp;
                    </span>
                    <span className="text-gray-700">will</span>
                    <span className="text-black-900">&nbsp;</span>
                    <span className="text-gray-700">start added by&nbsp;</span>
                    <span className="text-indigo-900 font-medium">
                      Gurpreet Singh
                    </span>
                  </Text>
                </div>
                <div className="h-px w-full bg-gray-400" />
                <Text as="p" className="md:p-5">
                  <span className="text-black-900 ml-12 font-medium">
                    Load No. I-I-AAA-1325&nbsp;
                  </span>
                  <span className="text-gray-700">will</span>
                  <span className="text-black-900">&nbsp;</span>
                  <span className="text-gray-700">start added by&nbsp;</span>
                  <span className="text-indigo-900 font-medium">
                    Gurpreet Singh
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
