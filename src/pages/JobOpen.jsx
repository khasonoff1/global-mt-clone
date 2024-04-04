const JobOpen = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between mt-24">
        <div className="">
          <h1 className="text-5xl">Odamlar bizning asosiy kapitalimiz</h1>
          <p className="pt-12 text-2xl text-zinc-400">
            Kompaniyaning muvaffaqiyati har birining minglab shaxsiy va <br />
            professional yutuqlaridir. Xodimlar rivojlanganda Uzum Bank <br />
            rivojlanadi. Biz bilan ishlash aqlli va erkin odamlar hamjamiyatida{" "}
            <br />
            mustaqil bank bilan birga o`sish imkoniyatidir. Shuhratparast <br />
            muammolarni hal qilish, muhim natijalarga erishish, yaxshiroq <br />
            bo`lish va yaxshi pul topish.
          </p>
        </div>
        <div>
          <img
            src="https://jobs.comcast.com/media/img/original/2023/06/jobs_Browse-by-team.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 mt-24 ">
        <div className="">
          <div className="p-14 px-14 border w-[500px]  bg-slate-200 border-spacing-4">
            <img
              className="w-[150px] ml-[120px]"
              src="https://uzumbank.uz/_nuxt/img/dev.555d14b.png"
              alt=""
            />
          </div>
          <h1 className="text-3xl text-yellow-800">Бизнес-аналитик</h1>
          <p className="pt-4 text-2xl">Batafsil</p>
        </div>
        <div>
          <div className="p-14 px-12 border w-[500px] bg-slate-200 border-spacing-4">
            <img
              className="w-[150px] ml-[120px]"
              src="https://uzumbank.uz/_nuxt/img/dev.555d14b.png"
              alt=""
            />
          </div>
          <h1 className="text-3xl text-yellow-800">
            Специалист казначейства по <br /> пруденциальной отчетности
          </h1>
          <p className="pt-4 text-2xl">Batafsil</p>
        </div>
        <div>
          <div className="p-14 px-12 border w-[500px] bg-slate-200 border-spacing-4">
            <img
              className="w-[150px] ml-[120px]"
              src="https://uzumbank.uz/_nuxt/img/dev.555d14b.png"
              alt=""
            />
          </div>
          <h1 className="text-3xl text-yellow-800">
            Специалист контактного центра
          </h1>
          <p className="pt-4 text-2xl">Batafsil</p>
        </div>
        <div>
          <div className="p-14 px-12 border w-[500px] bg-slate-200 border-spacing-4">
            <img
              className="w-[150px] ml-[120px]"
              src="https://uzumbank.uz/_nuxt/img/dev.555d14b.png"
              alt=""
            />
          </div>
          <h1 className="text-2xl text-yellow-800">
            QA тестировщик - автоматизация процессов <br /> фронта
          </h1>
          <p className="pt-4 text-2xl">Batafsil</p>
          <h2 className="mt-12 text-2xl text-blue-700">
            AJ `Uzum Bank`  ishga qabul qilish tartibi
          </h2>
        </div>
      </div>
      <div className="mt-24 ">
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

export default JobOpen;
