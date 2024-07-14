import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-[#0e262b] h-screen w-screen flex flex-col justify-center items-center text-3xl text-white">
      <Link to={"/admin/products"}>
        <button className="flex flex-col items-center justify-center">
          <img src="./Images/notFound.png" alt="" className="w-[40%] " />
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
