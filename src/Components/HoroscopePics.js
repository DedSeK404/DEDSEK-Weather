export const HoroscopePics = ({togglePopup}) => {
    return(
        <div className="astroBox">
        <img
          className="H_img"
          src="/aries.png"
          alt="0"
          onClick={(e) => togglePopup("aries")}
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
    )
}