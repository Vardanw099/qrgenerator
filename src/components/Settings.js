import React from "react";

const Settings = ({
  onChange,
  onBodyColor,
  onBgChange,
  onEyes,
  onBody,
  onMedia,
  onRemove,
}) => {
  const variants = [
    "standard",
    "rounded",
    "dots",
    "fluid",
    "reverse",
    "shower",
    "gravity",
    "morse",
  ];
  const social = ["facebook", "instagram", "linkedin", "github", "youtube"];
  const eyesColor = (e) => {
    onChange(e.target.value);
  };

  const bodyColor = (e) => {
    onBodyColor(e.target.value);
  };

  const bgChange = (e) => {
    onBgChange(e.target.value);
  };

  const eyesChange = (e) => {
    onEyes(e.target.value);
  };
  const bodyChange = (e) => {
    onBody(e.target.value);
  };

  const mediaLogo = (item) => {
    onMedia(item);
  };
  const removeLogo = () => {
    onRemove();
  };

  return (
    <div
      className={
        "absolute left-0 w-1/6 rounded-se-3xl rounded-ee-3xl shadow-2xl overflow-hidden pt-2 pl-2 pr-2 h-5/6 bg-white max-md:w-full max-md:h-full max-md:rounded-none"
      }
    >
      <label
        for="eyesColor"
        className="w-full h-11 md:h-10 md:mt-2 mt-3 bg-purple-600 hover:bg-purple-800 cursor-pointer transition-all duration-300 flex items-center justify-center text-white rounded-full"
      >
        <input
          id="eyesColor"
          type="color"
          className="w-0 h-0 hidden"
          onChange={eyesColor}
        />
        <p className="text-center">Eyes Color</p>
      </label>
      <label
        for="bodyColor"
        className="w-full h-10 md:h-10 md:mt-2 mt-3 bg-purple-600 hover:bg-purple-800 cursor-pointer transition-all duration-300 flex items-center justify-center text-white rounded-full"
      >
        <input
          id="bodyColor"
          type="color"
          className="w-0 h-0 hidden"
          onChange={bodyColor}
        />
        <p className="text-center">Body Color</p>
      </label>
      <label
        for="bgcolor"
        className="w-full h-11 md:h-10 md:mt-2 mt-3 bg-purple-600 hover:bg-purple-800 cursor-pointer transition-all duration-300 flex items-center justify-center text-white rounded-full"
      >
        <input
          id="bgcolor"
          type="color"
          className="w-0 h-0 hidden"
          onChange={bgChange}
        />
        <p className="text-center">Background Color</p>
      </label>

      <select
        className="w-full h-11 md:h-10 md:mt-2 mt-3 border rounded p-2 pl-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={eyesChange}
      >
        <option value="" disabled selected>
          Eyes Style:
        </option>
        {variants.map((item, index) => (
          <option className="text-black" value={item} key={index}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="w-full h-11 md:h-10 md:mt-2 mt-3 border rounded p-2 pl-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        onChange={bodyChange}
      >
        <option value="" disabled selected>
          Body Style:
        </option>
        {variants.map((item, index) => (
          <option className="text-black" value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <h1 className="md:mt-2 mt-3 text-gray-800 text-center">
        Social Media Logo
      </h1>
      <div className="w-full md:mt-2 mt-3 pl-2 flex flex-wrap justify-center">
        {social.map((item, index) => (
          <img
            src={`../../images/${item}.svg`}
            onClick={() => mediaLogo(item)}
            className="w-14 md:p-1 p-2 md:w-8"
            alt=""
          />
        ))}
      </div>
      <h1
        onClick={removeLogo}
        className="md:mt-1 mt-3 text-gray-800 text-center"
      >
        Remove Logo
      </h1>
    </div>
  );
};

export default Settings;
