import React, { useEffect, useState } from 'react'
import icon from "../../asset/logo-i.png"
import "./footer.css"
import { useBattery } from "react-use"
import BatteryGauge from 'react-battery-gauge';

function Footer() {
    
    const battery = useBattery();

    const [ctime, setCTime] = useState();
    const [value, setValue] = useState("");
    const [charging, setCharging] = useState(false);

    const UpdateTime = () => {
        let time = new Date().toLocaleTimeString();
        time = new Date().toLocaleTimeString()
        setCTime(time);

    }
    setInterval(UpdateTime)

    useEffect(() => {
        const UpdateBattery = () => {
            setCharging(battery.charging)
            setValue(battery.level * 100)
        }
        setInterval(UpdateBattery)
    }, [battery])



    // Destructuring battery properties


    return (
        <div>
            <div className="footer">
                <div className="f-left">
                    <div className="icon-logo">
                        <img src={icon} alt="" />
                    </div>
                    <div className="icon-file">
                        <div className="b-icon">
                            <i className="bx bxl-instagram-alt"></i>
                        </div>
                        <div className="b-icon">
                            <i className="bx bxs-envelope"></i>
                        </div>
                        <div className="b-icon">
                            <i className="bx bxl-twitter"></i>
                        </div>
                        <div className="b-icon">
                            <i className="bx bxl-github"></i>
                        </div>
                    </div>
                </div>

                <div className="f-right">
                    {battery.isSupported && (<div className="r-icons">
                        <BatteryGauge charging={charging} size={30} value={value || 0} />
                    </div>)}
                    <div className="r-icons">
                        <div id="net">
                            <i className="bx bx-wifi"></i>
                        </div>
                    </div>
                    <div className="r-icons">
                        <i className="bx bx-volume-full"></i>
                    </div>
                    <div className="r-icons">
                        <p>ENG</p>
                    </div>
                    <div className="r-icons">
                        <h1 className='clock'>{ctime}</h1>
                    </div>

                    <div className="m-icons">
                        <i className='bx bx-log-out'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

