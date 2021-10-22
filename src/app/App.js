import React, { useEffect, useState } from "react";

// Libs
import gsap from "gsap";

import { Draggable } from "gsap/Draggable";

// Components
import Microscope from "../components/Microscope";
import Wheel from "../components/Wheel";
import Overlay from "../components/Overlay";

// Assets
import xpl from "../assets/img/xpl";
import ppl from "../assets/img/ppl";

import "./App.css";

gsap.registerPlugin(Draggable);

const App = () => {
    const [rotation, setRotation] = useState(0);
    const smooth = true;
    const step = xpl.length === 36 ? 10 : 1;
    useEffect(() => {
        Draggable.create(".wheel", {
            type: "rotation",
            minimumMovement: 1,

            onDrag: function () {
                console.log(this.rotation);
                // градус поворота
                setRotation(
                    // Math.floor(
                    //     (this.rotation -
                    //         360 * Math.floor(this.rotation / 360)) /
                    //         10
                    // ) * 10

                    this.rotation - 360 * Math.floor(this.rotation / 360)
                );
            },
        });
    }, []);

    return (
        <div className="container">
            <div className="content">
                <div className="wrap">
                    <div className="microscope-container">
                        <Overlay name="plane polarised light" />
                        <Wheel />
                        <Microscope
                            images={ppl}
                            rotation={rotation}
                            smoothness={smooth}
                        />
                    </div>

                    {/* <p className="degrees">{Math.floor(rotation / 10) * 10}°</p> */}
                    <p className="degrees">{Math.floor(rotation)}°</p>

                    <div className="microscope-container">
                        <Overlay name="between crossed polars" />
                        <Wheel />
                        <Microscope
                            images={xpl}
                            rotation={rotation}
                            smoothness={smooth}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
