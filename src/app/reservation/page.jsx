import Logo from "./components/Logo";
import ReservationForm from "./components/ReservationForm";

const page = () => {
  return (
    <div className="bg-primary_10 w-full h-[100vh] px-4 lg:px-20 xl:px-80 py-14 lg:py-10 flex flex-col justify-start items-center gap-5">
      <Logo />
      <ReservationForm />
    </div>
  );
};

export default page;
