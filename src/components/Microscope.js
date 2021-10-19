import React from "react";

import "./Microscope.css";

const Microscope = ({ images = [], rotation = 0 }) => {
    const sectionDeg = 360 / images.length;
    const sectionPercent = (rotation / sectionDeg) % 1;

    const index = Math.floor(rotation / sectionDeg);

    return (
        <div className="microscope" style={{}}>
            {images.map((image, i, all) => {
                const isCurr = i === index;

                const getVisibility = () => {
                    return isCurr ? "visible" : "hidden";
                };

                const getRotation = () => {
                    return isCurr
                        ? `rotate(${sectionPercent * sectionDeg}deg)`
                        : "";
                };

                const getOpacity = () => {
                    if (isCurr > 0) {
                        return 1;
                    } else {
                        return 0;
                    }
                };

                const style = {
                    zIndex: 10 + i,
                    visibility: getVisibility(),
                    transform: getRotation(),
                    opacity: getOpacity(),
                };

                return (
                    <img
                        className={`img ${isCurr ? "yes" : ""}`}
                        style={{ ...style }}
                        src={image}
                        key={i}
                        alt=""
                    />
                );
            })}
        </div>
    );
};

export default Microscope;
