import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gethoroscopedata } from "../JS/Actions/HoroscopeActions";
import Spinner from "react-bootstrap/Spinner";

export const HoroscopePopup = ({ select }) => {
  const dispatch = useDispatch();

  const astro = useSelector((state) => state.horoscope.horoscopedata);
  const loading = useSelector((state) => state.horoscope.loadinghoroscope);

  useEffect(() => {
    dispatch(gethoroscopedata(select));
  }, [select, dispatch]);

  return (
    <>
      {loading ? (
        <Spinner
          variant="warning"
          animation="border"
          role="status"
          style={{ marginLeft: "50%" }}
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p">Current Date:</p>
            <p style={{ color: "white" }}>{astro.current_date}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p">Compatibility:</p>
            <p style={{ color: "white" }}>{astro.compatibility}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p">Lucky Number:</p>
            <p style={{ color: "white" }}>{astro.lucky_number}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p">Lucky Time:</p>
            <p style={{ color: "white" }}>{astro.lucky_time}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            {" "}
            <p className="a_p">Color:</p>
            <p style={{ color: "white" }}>{astro.color}</p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p"> Date Range:</p>
            <p style={{ color: "white" }}>{astro.date_range}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p"> Mood:</p>
            <p style={{ color: "white" }}>{astro.mood}</p>{" "}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p className="a_p"> Description:</p>
            <p style={{ color: "white" }}>{astro.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
