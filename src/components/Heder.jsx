import { NavLink } from "react-router-dom"
import ExtensionIcon from '@mui/icons-material/Extension';

const Menu = () => {
  return (
    <>
      <div className="container flex justify-between mx-auto border-b">
        <ul className="flex space-x-5 items-center h-[100%]">
          <li>
            <img
              className="w-32"
              src="https://depozit.uz/image_uploads/banks/55/original/1f135319fd6cc7502052a2a5b74831b5_webp.webp"
              alt=""
            />
          </li>
          <li className=" h-[100%]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "py-5"
                  : isActive
                    ? "py-11 border-b-4 border-[#7000ff]"
                    : ""
              }
            >
              Jismoniy shaxs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/busnes"
              className={({ isActive, isPending }) =>
                isPending
                  ? "py-5"
                  : isActive
                    ? "py-11 border-b-4 border-[#7000ff]"
                    : ""
              }
            >
              Busines
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center space-x-5">
          <li>
            <ExtensionIcon />
          </li>
          <li>
            <select
              className="p-3 duration-200 rounded outline-none hover:bg-slate-200"
              name=""
              id=""
            >
              <option value="">Uzbek</option>
              <option value="">English</option>
              <option value="">Rus</option>
            </select>
          </li>
          <li>
            <button className="py-3 px-5 rounded-md bg-[#7000ff] text-white">
              Sign in to account
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu