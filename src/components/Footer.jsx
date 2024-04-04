import { CiFacebook } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { PiTreePalmBold } from "react-icons/pi";

const Footer = () => {
  return (
   <div>
    <div className=" bg-violet-700">
     <div className="container flex gap-10 mx-auto text-white">
      <ul className="gap-2 ">
        <h5 className="my-3 text-xl ">Mahsulotlar</h5>
        <li className="cursor-pointer ">Plastik cartalar</li>
        <li className="cursor-pointer ">Kreditlar</li>
        <li className="cursor-pointer ">Omonotlar</li>
        <li className="cursor-pointer ">Hisob raqamlari</li>
        <li className="cursor-pointer ">Hamyonlar</li>
        <li className="cursor-pointer ">Pul utkazmalar</li>
      </ul>
      <ul className="">
        <h5 className="my-3 text-xl ">
          Hizmatlar
        </h5>
        <li className="cursor-pointer ">Mening uyim</li>
        <li className="cursor-pointer ">UzASBO</li>
        <li className="cursor-pointer ">HUMO Pay</li>
        <li className="cursor-pointer ">Rekvizitlar bo`yicha o`tkazma</li>
        <li className="cursor-pointer ">MTTga to`lovlar</li>
      </ul>
      <ul className="">
        <h5 className="my-3 text-xl ">Bank haqida</h5>
        <li className="cursor-pointer ">Bank tuzilishi</li>
        <li className="cursor-pointer ">Rahbariyat</li>
        <li className="cursor-pointer ">Bank rekvizitlari</li>
        <li className="cursor-pointer ">Bank ustavi</li>
        <li className="cursor-pointer ">Davlat ramzlari</li>
        <li className="cursor-pointer ">Muhim faktlar</li>
        <li className="cursor-pointer ">Mahalliy aktlar
</li>
        <li className="cursor-pointer ">Rivojlanish strategiyasi</li>
        <li className="cursor-pointer ">Bankning missiyasi</li>
        <li className="cursor-pointer ">Hujjatlar</li>
        <li className="cursor-pointer ">`Uzum Bank` AJ litsenziyasi</li>
        <li className="cursor-pointer ">Tadbirlar</li>
      </ul>
      <ul className="">
        <h5 className="my-3 text-xl">Aksiyadorlar va investorlar</h5>
        <li className="cursor-pointer ">Aksiyadorlar yig`ilishi</li>
        <li className="cursor-pointer ">Audit</li>
        <li className="cursor-pointer ">Dividendlar haqida ma`lumot</li>
        <li className="cursor-pointer ">Affillangan shaxslar</li>
        <li className="cursor-pointer ">Qimmatli qog`ozlar emissiyasi</li>
        <li className="cursor-pointer ">Biznes plan</li>
        <li className="cursor-pointer ">Korporativ boshqaruv</li>
        <li className="cursor-pointer ">Moliyaviy ko`rsatkichlar</li>
        <li className="cursor-pointer ">Aksiyalar</li>
        <li className="cursor-pointer ">Axborotni ochish</li>
      </ul>
      <ul className="">
        <h5 className="my-3 text-xl ">Elektron pochta</h5>
        <li>info@uzumbank.uz</li>
        <h5 className="text-xl ">Interaktiv xizmatlar</h5>
        <li className="cursor-pointer ">Jismoniy va yuridik shaxslarning <br/>
         murojaatlari</li>
      </ul>
      
    </div>
   </div>
    <div className="container flex gap-2 mx-auto mt-1">
      <button className="items-center justify-center w-10 h-10 px-1 rounded-full hover:bg-indigo-600 bg-opacity-30 bg-slate-500"><CiFacebook className="w-8 h-8 hover:text-white"/></button>
      <button className="items-center justify-center w-10 h-10 px-1 rounded-full hover:bg-indigo-600 bg-opacity-30 bg-slate-500"><FaTelegramPlane className="w-8 h-8 hover:text-white"/></button>
      <button className="items-center justify-center w-10 h-10 px-1 rounded-full hover:bg-indigo-600 bg-opacity-30 bg-slate-500"><SlSocialVkontakte  className="w-8 h-8 hover:text-white"/></button>
      <button className="items-center justify-center w-10 h-10 px-1 rounded-full hover:bg-indigo-600 bg-opacity-30 bg-slate-500"><PiTreePalmBold  className="w-8 h-8 hover:text-white"/></button>
      <p>
© 2019 - 2024 AJ “Uzum Bank”. Bank o`z faoliyatini 2022-yil 28-noyabrdagi 88-sonli litsenziyasi asosida amalga oshiradi. <br />
Barcha huquqlar himoyalangan. Ushbu veb-saytdagi materiallardan foydalanganda, manbaaga havola bo`lishi shart.</p>
    </div>
   </div>
  )
}

export default Footer
