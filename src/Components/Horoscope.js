import { useState } from "react";
import { HoroscopePics } from "./HoroscopePics";
import { HoroscopePopup } from "./HoroscopePopup";
import Popup from "./Popup";

export const Astro = () => {
  const [select, setSelect] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (value) => {
    setIsOpen(!isOpen);
    setSelect(value);
  };
  return (
    <div className="A_box">
      <p
        style={{
          color: "white",
          marginLeft: "25%",
          fontWeight: "700",
          fontSize: "80px",
          color: "#f0d770",
        }}
      >
        Select your Sign
      </p>
      <HoroscopePics togglePopup={togglePopup} />

      {isOpen && (
        <Popup
          content={<HoroscopePopup select={select} />}
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};
