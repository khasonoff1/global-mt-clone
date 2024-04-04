import Dict from "../components/Dict";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-24 mt-24">
        <div className="">
          <div>
            <h1 className="text-blue-600 text-7xl">
              Ishonchli bank <br /> har doim yoningizda
            </h1>
            <p className="mt-12 text-2xl">
              Uzum Bank - bu to`lov tizimi va ishonchli online-bank yagona
              <br /> mobil ilovada.
            </p>
          </div>

          <div className="flex gap-12 mt-12 ">
            <div>
              <img
                className="w-[300px] border p-4  rounded-lg "
                src="https://static.vecteezy.com/system/resources/previews/013/722/213/non_2x/sample-qr-code-icon-png.png"
                alt=""
              />
            </div>
            <div className="flex gap-8 mt-52">
              <div>
                <button className="p-2 px-2 border rounded-lg bg-slate-600">
                  <span className="flex justify-between gap-4">
                    <i className=" mr-[20px] text-[40px] fa-brands fa-apple"></i>
                    <span>
                      <p className="text-lg">Oching</p>
                      <h1 className="text-xl">App Store</h1>
                    </span>
                  </span>
                </button>
              </div>
              <div>
                <button className="p-2 px-2 border rounded-xl bg-slate-500">
                  <span className="flex justify-between gap-4">
                    <i className=" mr-[20px] text-[40px]  fa-brands fa-google-play"></i>
                    <span>
                      <h1 className="text-xl">Google Play</h1>
                      <p className="text-xl"> da mavjud</p>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="w-[600px]"
            src="https://uzumbank.uz/_nuxt/img/applications.59d741a.png"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="pt-24 text-5xl text-center text-blue-700">
          Uzum bu nima?
        </h1>
        <div className="flex justify-around gap-24 mt-24">
          <div>
            <img
              className="w-[700px]"
              src="https://static.tildacdn.com/tild3334-3833-4032-b537-306463346336/--2.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="mt-32 text-2xl">
              Uzum - bu raqamli ekotizimni rivojlantiruvchi <br /> kompaniyalar
              guruhi, ushbu guruhning ichiga <br /> moliyaviy xizmat va keng
              assortimentli marketpleys <br /> hamda tezkor yetkazib berish
              xizmatlari kiradi. <br />
              <br />
              Uzum Bank Uzum brendining uchinchi servisiga <br /> aylandi.
              <br />
              <br />
              Shuningdek, hozirda ekotizimga keng assortimentli <br /> va tez
              yetkazib beriladigan “Uzum Market” <br /> marketpleysi, “Uzum
              Nasiya” muddatli to`lov servisi, <br /> “Uzum Tezkor” restoran va
              do`konlardan tez yetkazib <br /> berish servislari kiradi.
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <Dict />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
