"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import {
  TbSquareRoundedMinusFilled,
  TbSquareRoundedPlusFilled,
} from "react-icons/tb";
import Calendar from "react-calendar";
import emailjs from "@emailjs/browser";
import { ClockLoader } from "react-spinners";
import "react-calendar/dist/Calendar.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adultCount, setAdultCount] = useState(2);
  const [chambreCount, setChambreCount] = useState(1);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendarTwo, setOpenCalendarTwo] = useState(false);
  const [isAdultOpen, setIsAdultOpen] = useState(false);
  const [isChambreOpen, setIsChambreOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    emailjs.init("1D9YARxa2KB7aQtKm");
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_zk1myao";
    const templateId = "template_tlihdyh";
    try {
      setLoading(true);
      const res = await emailjs.send(serviceId, templateId, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        checkin_date: startDate,
        checkout_date: endDate,
        adults_number: adultCount,
        chambre_number: chambreCount,
      });
      if (res.status === 200) {
        setMessageSent(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setFormData({
        ...formData,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  return (
    isClient && (
      <>
        {!messageSent ? (
          <form
            onSubmit={handleSubmit}
            className="relative w-full  flex flex-col justify-center items-center gap-5 font-mulish"
          >
            <div className="w-full  flex flex-col justify-center items-center bg-white shadow-xl p-3 gap-3 text-sm">
              <div className="w-full flex flex-row justify-center items-center gap-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Fisrt Name"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                  className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none text-primary_11"
                />
              </div>
            </div>
            {openCalendar && (
              <div className="absolute -top-40 left-1">
                <Calendar onChange={setStartDate} value={startDate} />
              </div>
            )}
            {openCalendarTwo && (
              <div className="absolute -top-40 left-1">
                <Calendar onChange={setEndDate} value={endDate} />
              </div>
            )}
            <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-white shadow-xl py-3 px-20 font-extralight gap-5 lg:gap-24">
              <div className="w-full flex justify-center items-center gap-1">
                <div
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                  onClick={() => {
                    setOpenCalendar(!openCalendar);
                    setOpenCalendarTwo(false);
                  }}
                >
                  <span className="absolute top-[166px] text-[13px] leading-[12px] text-[#fff] font-normal">
                    Check In
                  </span>
                  <span className="text-[10px] leading-[12px] text-[#666666] uppercase">
                    {startDate.toLocaleString("default", { month: "short" })}{" "}
                    {startDate.getFullYear()}
                  </span>
                  <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                    {startDate.getDate()}
                  </span>
                  {!openCalendar ? (
                    <IoIosArrowDown size={15} color="#333333" />
                  ) : (
                    <AiOutlineClose size={15} color="#333333" />
                  )}
                </div>
                <div
                  className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer"
                  onClick={() => {
                    setOpenCalendarTwo(!openCalendarTwo);
                    setOpenCalendar(false);
                  }}
                >
                  <span className="absolute top-[166px] text-[13px] leading-[12px] text-[#fff] font-normal">
                    Check Out
                  </span>
                  <span className="text-[10px] leading-[12px] text-[#666666]  uppercase">
                    {endDate.toLocaleString("default", { month: "short" })}{" "}
                    {endDate.getFullYear()}
                  </span>
                  <span className="text-[36px] leading-[43.2px] text-[#2A2A2A]">
                    {endDate.getDate()}
                  </span>
                  {!openCalendarTwo ? (
                    <IoIosArrowDown size={15} color="#333333" />
                  ) : (
                    <AiOutlineClose size={15} color="#333333" />
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center items-center gap-1">
                <div className="w-full flex flex-col justify-center items-center gap-1">
                  <span className="text-[10px] leading-[12px] text-[#666666] ">
                    ADULTES
                  </span>
                  <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                    {adultCount}
                  </span>
                  <div className="relative">
                    {!isAdultOpen ? (
                      <IoIosArrowDown
                        size={15}
                        color="#333333"
                        className="cursor-pointer"
                        onClick={() => setIsAdultOpen(true)}
                      />
                    ) : (
                      <AiOutlineClose
                        size={15}
                        color="#333333"
                        className="cursor-pointer"
                        onClick={() => setIsAdultOpen(false)}
                      />
                    )}
                    {isAdultOpen && (
                      <div className="absolute bg-white top-4 -left-8 p-3 w-fit flex justify-center items-center gap-2 text-primary_10">
                        <TbSquareRoundedMinusFilled
                          size={25}
                          className="cursor-pointer"
                          onClick={() => setAdultCount(adultCount - 1)}
                        />
                        <TbSquareRoundedPlusFilled
                          size={25}
                          className="cursor-pointer"
                          onClick={() => setAdultCount(adultCount + 1)}
                        />
                      </div>
                    )}
                  </div>

                  {/* <div className="w-full flex justify-center items-center gap-2 text-primary_10">
                <TbSquareRoundedMinusFilled
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setAdultCount(adultCount - 1)}
                />
                <TbSquareRoundedPlusFilled
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setAdultCount(adultCount + 1)}
                />
              </div> */}
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-1 cursor-pointer">
                  <span className="text-[10px] leading-[12px] text-[#666666] ">
                    CHAMBRES
                  </span>
                  <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                    {chambreCount}
                  </span>
                  <div className="relative">
                    {!isChambreOpen ? (
                      <IoIosArrowDown
                        size={15}
                        color="#333333"
                        className="cursor-pointer"
                        onClick={() => setIsChambreOpen(true)}
                      />
                    ) : (
                      <AiOutlineClose
                        size={15}
                        color="#333333"
                        className="cursor-pointer"
                        onClick={() => setIsChambreOpen(false)}
                      />
                    )}
                    {isChambreOpen && (
                      <div className="absolute bg-white top-4 -left-8 p-3 w-fit flex justify-center items-center gap-2 text-primary_10">
                        <TbSquareRoundedMinusFilled
                          size={25}
                          className="cursor-pointer"
                          onClick={() => setChambreCount(chambreCount - 1)}
                        />
                        <TbSquareRoundedPlusFilled
                          size={25}
                          className="cursor-pointer"
                          onClick={() => setChambreCount(chambreCount + 1)}
                        />
                      </div>
                    )}
                  </div>
                  {/* <div className="w-full flex justify-center items-center gap-2 text-primary_10">
                <TbSquareRoundedMinusFilled
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setChambreCount(chambreCount - 1)}
                />
                <TbSquareRoundedPlusFilled
                  size={25}
                  className="cursor-pointer"
                  onClick={() => setChambreCount(chambreCount + 1)}
                />
              </div> */}
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-[80%] bg-primary_10 disabled:bg-primary_6 text-white flex justify-center items-center py-2 px-4 rounded cursor-pointer"
                  disabled={loading}
                >
                  {loading ? <ClockLoader size={20} color="#fff" /> : "Reserve"}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className="w-full flex items-center p-3.5 rounded text-[#00AB55] bg-[#DDF5F0] font-garamond">
            <span className="pr-2">
              <strong className="mr-1">Success!</strong>Thank you for your
              reservation.
            </span>
            <button
              type="button"
              className="ml-auto bg-[#00AB55] text-[#DDF5F0] rounded hover:opacity-80 px-3 py-1"
            >
              Return
            </button>
          </div>
        )}
      </>
    )
  );
};

export default ReservationForm;
