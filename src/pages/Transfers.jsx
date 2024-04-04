const Transfers = () => {
  return (
    <div className="container w-full mx-auto">
      <div className="">
        <h1 className="pt-24 text-4xl">Xalqaro pul o`tkazmalari</h1>
        <div className="p-[1px] mt-12 px-[1px] w-[100%] bg-slate-950"></div>
        <h4 className="pt-12 text-2xl">
          Yuborish va qabul qilish uchun sizga faqat mobil telefon va Uzum Bank
          ilovasi kerak. Va eng yaqin bank filialini izlashning hojati <br />
          yo`q.
        </h4>
      </div>
      <h1 className="pt-24 text-4xl text-center">Bizning hamkorlarimiz</h1>
      <div className="flex justify-between pt-12">
        <div>
          <div className="border bg-slate-200">
            <img
              className="w-[400px] "
              src="https://www.kapital24.uz/upload/media/icons/cards/system-visa_c.png"
              alt=""
            />
          </div>
          <div className="flex justify-between pt-4">
            <h1 className="text-2xl">Visa Direct</h1>
            <h3 className="text-xl">1% dan komissiya</h3>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <h1 className="text-2xl text-blue-900 ">Batafsil</h1>
            <i className=" text-[24px] fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div>
          <div className="pt-24 border bg-slate-200">
            <img
              className="w-[450px] py-[62px]"
              src="https://cbu.uz/upload/iblock/0ef/pqxab3ph1hg7w2h9du7yebl7x6v059iu/mkbank.png"
              alt=""
            />
          </div>
          <div className="flex justify-between pt-4">
            <h1 className="text-2xl text-blue-950">MoneySend</h1>
            <h3 className="text-xl">1%, lekin kamida €2</h3>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <h1 className="text-2xl text-blue-800">Batafsil</h1>
            <i className=" text-[24px] fa-solid fa-angle-right"></i>
          </div>
        </div>
        <div>
          <div className="px-4 py-32 border pt-28 bg-slate-200">
            <img
              className="w-[450px]"
              src="https://humocard.uz/upload/iblock/dbc/qci2ule3xc1qek37rmnanjaq35vsblkz/Yangi-Bank-Logo.png"
              alt=""
            />
          </div>
          <div className="flex justify-between pt-4">
            <h1 className="text-2xl text-amber-950">Western Union</h1>
            <h3 className="text-xl">1.3 dollardan komissiya</h3>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <h1 className="text-2xl text-blue-800">Batafsil</h1>
            <i className=" text-[24px] fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl">Bizning yangiliklarga ulaning</h1>
        <div className="flex justify-between">
          <div className="flex gap-12 mt-12">
            <label className="">
              <input
                className="p-[20px] text-2xl border px-14 text-start"
                type="email"
                name="name"
                id="name"
                placeholder="Elektron pochta"
              />
            </label>
            <button className="p-[20px] px-32 border border-spacing-4 text-2xl bg-teal-300 ">
              Junatish
            </button>
          </div>
          <div className="">
            <h1 className="text-4xl text-black">+998991234567</h1>
            <p className="pt-2 text-2xl text-end text-cyan-950">Telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfers;
