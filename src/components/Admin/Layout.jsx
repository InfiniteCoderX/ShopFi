import { useState } from "react";
import Aside from "./Aside";

const Layout = ({ children }) => {
  const [asideSize, setAsideSize] = useState(300);
  const [profilOpen, setProfileOpen] = useState(false);
  const [mobileSize, setMobileSize] = useState(0)

  const handleAsideOpen = () => {
    setAsideSize(asideSize === 300 ? 0 : 300);
  };

  const handleMobileOpen = () => {
    setMobileSize(mobileSize === 0 ? 250 : 0);
  };

  const handleProfile = () => {
    setProfileOpen(!profilOpen);
  };

  return (
    <>
    {/* Desktop */}
    <div className="md:block hidden">
      <aside
        className="h-full fixed top-0 left-0 bg-red-500 overflow-hidden"
        style={{
          width: asideSize,
          transition: "0.3s",
        }}
      >
        
        <Aside />
        
      </aside>
      <section
        style={{
          marginLeft: asideSize,
          transition: "0.3s",
        }}
      >
        <nav
          className={`bg-white flex items-center shadow-lg justify-between sticky top-0 left-0`}
        >
          <div className="flex items-center gap-4 px-2 ">
            <button
              onClick={handleAsideOpen}
              className="hover:bg-blue-300 px-2 py-1 rounded-full ease-in-out duration-50"
            >
              <i className="ri-menu-2-line text-2xl"></i>
            </button>
            <h1 className="font-semibold text-xl">ShopFi</h1>
          </div>

          <div className="px-5 py-1">
            <button className="relative" onClick={handleProfile}>
              <img
                src="../Images/profileImg.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              {profilOpen && (
                <div className="absolute top-10 right-5 bg-gray-50 min-w-52 rounded-md shadow-lg">
                  <div className="flex flex-col items-center m-3">
                    <p className="font-semibold">@UserName</p>
                    <p className="font-semibold">example@gmail.com</p>
                    <div className="h-px bg-gray-300 w-40 my-4"></div>
                    <button className="flex gap-2 bg-green-500 px-3 py-1 rounded-lg">
                      <i className="ri-logout-circle-line text-lg"></i>
                      <p className="font-semibold">Logout</p>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="p-4">{children}</div>
      </section>
    </div>

    {/* mobile */}
    <div className="md:hidden block">
      <aside
        className="h-full fixed top-0 left-0 bg-red-500 overflow-hidden z-10"
        style={{
          width: mobileSize,
          transition: "0.3s",
        }}
      >
        <Aside handleMobileOpen={handleMobileOpen}/>
        
      </aside>
      <section>
        <nav
          className={`bg-white flex items-center shadow-lg justify-between sticky top-0 left-0`}
        >
          <div className="flex items-center gap-4 px-2 ">
            <button
              onClick={handleMobileOpen}
              className="hover:bg-blue-300 px-2 py-1 rounded-full ease-in-out duration-50"
            >
              <i className="ri-menu-2-line text-2xl"></i>
            </button>
            <h1 className="font-semibold text-xl">ShopFi</h1>
          </div>

          <div className="px-5 py-1">
            <button className="relative" onClick={handleProfile}>
              <img
                src="../Images/profileImg.jpg"
                alt=""
                className="w-10 h-10 rounded-full"
              />
              {profilOpen && (
                <div className="absolute top-10 right-5 bg-gray-50 min-w-52 rounded-md shadow-lg">
                  <div className="flex flex-col items-center m-3">
                    <p className="font-semibold">@UserName</p>
                    <p className="font-semibold">example@gmail.com</p>
                    <div className="h-px bg-gray-300 w-40 my-4"></div>
                    <button className="flex gap-2 bg-green-500 px-3 py-1 rounded-lg">
                      <i className="ri-logout-circle-line text-lg"></i>
                      <p className="font-semibold">Logout</p>
                    </button>
                  </div>
                </div>
              )}
            </button>
          </div>
        </nav>
        <div className="p-4">{children}</div>
      </section>
    </div>
    </>
  );
};

export default Layout;
