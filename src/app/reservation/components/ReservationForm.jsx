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
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);

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
      await emailjs.send(serviceId, templateId, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        checkin_date: startDate,
        checkout_date: endDate,
        adults_number: adultCount,
        chambre_number: chambreCount,
      });
      alert("email successfully sent check inbox");
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
      <form
        onSubmit={handleSubmit}
        className="relative w-full  flex flex-col justify-center items-center gap-3"
      >
        <div className="w-full  flex flex-col justify-center items-center bg-white shadow-xl p-3 gap-3">
          <div className="w-full flex flex-row justify-center items-center gap-3">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Fisrt Name"
              required
              className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none font-bold text-primary_11"
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none font-bold text-primary_11"
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
              className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none font-bold text-primary_11"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full border border-primary_10 rounded placeholder:text-primary_10 p-2 focus:outline-none font-bold text-primary_11"
            />
          </div>
        </div>
        {openCalendar && (
          <div>
            <Calendar
              onChange={setStartDate}
              value={startDate}
              className="absolute -top-32 left-10"
            />
          </div>
        )}
        {openCalendarTwo && (
          <div>
            <Calendar
              onChange={setEndDate}
              value={endDate}
              className="absolute -top-32 left-10"
            />
          </div>
        )}
        <div className="w-full flex justify-evenly items-center bg-white shadow-xl py-1 px-3">
          <div className="w-full flex justify-center items-center gap-1">
            <div
              className="w-full flex flex-col justify-center items-center gap-2 cursor-pointer"
              onClick={() => {
                setOpenCalendar(!openCalendar);
                setOpenCalendarTwo(false);
              }}
            >
              <span className="text-[10px] leading-[12px] text-[#666666] font-medium uppercase">
                {startDate.toLocaleString("default", { month: "short" })}{" "}
                {startDate.getFullYear()}
              </span>
              <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                {startDate.getDate()}
              </span>
              {!openCalendar ? (
                <IoIosArrowDown size={18} color="#333333" />
              ) : (
                <AiOutlineClose size={18} color="#333333" />
              )}
            </div>
            <div
              className="w-full flex flex-col justify-center items-center gap-2 cursor-pointer"
              onClick={() => {
                setOpenCalendarTwo(!openCalendarTwo);
                setOpenCalendar(false);
              }}
            >
              <span className="text-[10px] leading-[12px] text-[#666666] font-medium uppercase">
                {endDate.toLocaleString("default", { month: "short" })}{" "}
                {endDate.getFullYear()}
              </span>
              <span className="text-[36px] leading-[43.2px] text-[#2A2A2A]">
                {endDate.getDate()}
              </span>
              {!openCalendarTwo ? (
                <IoIosArrowDown size={18} color="#333333" />
              ) : (
                <AiOutlineClose size={18} color="#333333" />
              )}
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-1">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <span className="text-[10px] leading-[12px] text-[#666666] font-medium">
                ADULTES
              </span>
              <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                {adultCount}
              </span>
              <div className="w-full flex justify-center items-center gap-2 text-primary_10">
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
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <span className="text-[10px] leading-[12px] text-[#666666] font-medium">
                CHAMBRES
              </span>
              <span className="text-[36px] leading-[43.2px]  text-[#2A2A2A]">
                {chambreCount}
              </span>
              <div className="w-full flex justify-center items-center gap-2 text-primary_10">
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
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="w-fit bg-primary_10 text-white py-2 px-4 rounded"
              disabled={loading}
            >
              Reserver
            </button>
          </div>
        </div>
      </form>
    )
  );
};

export default ReservationForm;