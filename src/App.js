import React, { useState } from "react";
import Settings from "./components/Settings";
import { QrCode } from "react-qrcode-pretty";
import { ReactComponent as Menu } from "./assets/images/menu.svg";
import { ReactComponent as Close } from "./assets/images/close.svg";

function App() {
  const [qrLink, setQrLink] = useState("");
  const [qrVisible, setQrVisible] = useState(false);
  const [cdColor, setcdColor] = useState("black");
  const [bdColor, setBdColor] = useState("black");
  const [bgColor, setbgColor] = useState("white");
  const [eyes, seteyes] = useState("standard");
  const [body, setbody] = useState("standard");
  const [media, setmedia] = useState("");
  const [canvas, setcanvas] = useState();
  const [disp, setdisp] = useState(false);

  const qrInput = (e) => {
    setQrVisible(false);
    setQrLink(e.target.value);
  };

  const createQr = (e) => {
    e.preventDefault();
    setQrVisible(true);
  };

  const eyesColor = (value) => {
    setcdColor(value);
  };

  const bodyColor = (value) => {
    setBdColor(value);
  };

  const bgChange = (value) => {
    setbgColor(value);
  };
  const eyesChange = (value) => {
    seteyes(value);
  };
  const bodyChange = (value) => {
    setbody(value);
  };
  const mediaLogo = (value) => {
    setmedia(value);
    console.log(value);
  };

  const removeLogo = () => {
    setmedia("");
  };

  const saveImage = (e) => {
    let link = e.currentTarget;
    link.setAttribute("download", "canvas.png");
    let image = canvas.toDataURL("image/png");
    link.setAttribute("href", image);
  };

  return (
    <div className="bg-purple-900 w-screen h-screen flex justify-center items-center ">
      <div
        onClick={() => setdisp(!disp)}
        className={`max-md:hidden${
          !disp
            ? "absolute top-0 left-0 z-20"
            : "absolute bottom-0 right-0 z-20"
        }`}
      >
        {!disp ? (
          <Menu className="text-violet-300 w-11 h-10" />
        ) : (
          <Close className="w-11 h-10 fill-red-700" />
        )}
      </div>
      {disp ? (
        <Settings
          onChange={eyesColor}
          onBodyColor={bodyColor}
          onBgChange={bgChange}
          onEyes={eyesChange}
          onBody={bodyChange}
          onMedia={mediaLogo}
          onRemove={removeLogo}
        />
      ) : null}
      <form
        onSubmit={createQr}
        className="w-3/5 rounded-3xl border-purple-800 bg-purple-700 shadow-xl h-4/5 border flex flex-col justify-around items-center max-sm:w-4/5"
      >
        <h1 className=" text-3xl text-white font-serif font-bold max-sm:text-lg">
          QR Code Generator
        </h1>
        <input
          className="w-4/6 max-sm:w-5/6 h-12 rounded-full pl-5 text-purple-900 outline-none shadow-2xl shadow-purple-900 font-serif animate-[ping_1s_ease-in-out_reverse] delay-1000"
          placeholder="Link"
          type="text"
          onChange={qrInput}
        />
        {qrVisible ? (
          <QrCode
            // type={"image/webp"}
            color={{
              eyes: cdColor,
              body: bdColor,
            }}
            variant={{
              eyes,
              body,
            }}
            // margin={10}
            bgColor={bgColor}
            // modules={5}
            value={qrLink}
            padding={5}
            size={200}
            level="H"
            image={media !== "" ? `./images/${media}.svg` : undefined}
            // imageBig
            bgRounded
            divider
            className=" border w-52 h-52 border-purple-900 rounded-3xl animate-[ping_500ms_ease-in-out_reverse]"
            onReady={(canvas) => setcanvas(canvas)}
          />
        ) : (
          <div className="flex justify-center items-center border w-52 h-52 border-purple-900 bg-purple-650 shadow-2xl shadow-purple-900 rounded-3xl font-serif text-white text-opacity-60 text-lg ">
            <h1>Your Qr Here...</h1>
          </div>
        )}
        {!qrVisible ? (
          <button
            className="w-56 h-12 rounded-full shadow-md text-lg font-serif font-bold text-white bg-purple-900 hover:bg-purple-950 hover:shadow-md  hover:shadow-purple-950 transition-all ease-in-out duration-500"
            type="submit"
          >
            Generate
          </button>
        ) : (
          <a
            className="w-56 h-12 rounded-full shadow-md text-lg font-serif font-bold text-white bg-violet-800 hover:bg-violet-900 hover:shadow-md  hover:shadow-violet-900 transition-all ease-in-out duration-500 flex justify-center items-center"
            id="download"
            href="download_link"
            onClick={saveImage}
          >
            Download
          </a>
        )}
      </form>
    </div>
  );
}

export default App;
