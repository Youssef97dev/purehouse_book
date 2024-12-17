import Logo from "./components/Logo";
import ReservationForm from "./components/ReservationForm";

const page = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Purehouse/occ7tv3ne5z4sfmu3lfm')] bg-cover bg-center bg-no-repeat w-full h-[120vh] px-4 lg:px-20 xl:px-80 py-14 lg:py-10 flex flex-col justify-start items-center gap-5">
      <Logo />
      <ReservationForm />
    </div>
  );
};

export default page;
