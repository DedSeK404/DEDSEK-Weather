import axios from "axios";
import { useEffect, useState } from "react";
import Popup from "./Popup";


export const Astro = () => {
  const [select, setSelect] = useState("aries");
  const [astro, setAstro] = useState("");
  useEffect(() => {
    // const fetchSign = async () => {
    //     try {
    //         const URL ="https://aztro.sameerkumar.website/?sign=scorpio&day=today"
    //         const res = await axios.get(URL, {
    //             method: 'POST'
    //         })

    //         setAstro(res.json());

    //       } catch (error) {
    //         console.log(error);
    //       }
    //       fetchSign()

    // }

    const URL = `https://aztro.sameerkumar.website/?sign=${select}&day=today`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((response) => {
        setAstro(response);
      });
  }, [select]);
  const handleClick = (e) => {
    setSelect(e.target.value);
  };

  console.log(astro);

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = (value) => {
    setIsOpen(!isOpen);
    setSelect(value)
  }
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
      <div className="astroBox">
        <img
          className="H_img"
          src="/aries.png"
          alt="0"
          onClick={(e)=>togglePopup("aries")}
        />
        <img
          className="H_img"
          src="/taurus.png"
          alt="1"
          onClick={(e) => togglePopup("taurus")}
        />
        <img
          className="H_img"
          src="/gemini.png"
          alt="2"
          onClick={(e) => togglePopup("gemini")}
        />
        <img
          className="H_img"
          src="/cancer.png"
          alt="3"
          onClick={(e) => togglePopup("cancer")}
        />
        <img
          className="H_img"
          src="/leo.png"
          alt="4"
          onClick={(e) => togglePopup("leo")}
        />
        <img
          className="H_img"
          src="/virgo.png"
          alt="5"
          onClick={(e) => togglePopup("virgo")}
        />
        <img
          className="H_img"
          src="/libra.png"
          alt="6"
          onClick={(e) => togglePopup("libra")}
        />
        <img
          className="H_img"
          src="/scorpio.png"
          alt="7"
          onClick={(e) => togglePopup("scorpio")}
        />
        <img
          className="H_img"
          src="/sagittarius.png"
          alt="8"
          onClick={(e) => togglePopup("sagittarius")}
        />
        <img
          className="H_img"
          src="/capricorn.png"
          alt="9"
          onClick={(e) => togglePopup("capricorn")}
        />
        <img
          className="H_img"
          src="/aquarius.png"
          alt="10"
          onClick={(e) => togglePopup("aquarius")}
        />
        <img
          className="H_img"
          src="/pisces.png"
          alt="11"
          onClick={(e) => togglePopup("pisces")}
        />
      </div>



      {isOpen && <Popup
      content={<>
         <div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p">Current Date:</p>
          <p style={{color:"white"}}>{astro.current_date}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p">Compatibility:</p>
          <p style={{color:"white"}}>{astro.compatibility}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p">Lucky Number:</p>
          <p style={{color:"white"}}>{astro.lucky_number}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p">Lucky Time:</p>
          <p style={{color:"white"}}>{astro.lucky_time}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          {" "}
          <p className="a_p">Color:</p>
          <p style={{color:"white"}}>{astro.color}</p>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p"> Date Range:</p>
          <p style={{color:"white"}}>{astro.date_range}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p"> Mood:</p>
          <p style={{color:"white"}}>{astro.mood}</p>{" "}
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems:"center" }}>
          <p className="a_p"> Description:</p>
          <p style={{color:"white"}}>{astro.description}</p>
        </div>
      </div>
      </>}
      handleClose={togglePopup}
    />}

      
    </div>
  );
};
