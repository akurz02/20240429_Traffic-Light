import React, {useState} from "react";
import styles from "../../styles/stoplight.css";

const Stoplight = () => {

    const [flash, setFlash] = useState("");

	return (
        <div>
            <div className="stem"></div>
            <div className="light-base">
                <div className={
                    flash === "green-light" ? "green-light flash" : "green-light"
                } onClick={() => setFlash("green-light")}
                ></div>
                <div className="gap"></div>
                <div className={
                    flash === "yellow-light" ? "yellow-light flash" : "yellow-light"
                } onClick={() => setFlash("yellow-light")}
                ></div>
                <div className="gap"></div>
                <div className={
                    flash === "red-light" ? "red-light flash" : "red-light"
                } onClick={() => setFlash("red-light")}
                ></div>
            </div>
        </div>
	);
};

export default Stoplight;
