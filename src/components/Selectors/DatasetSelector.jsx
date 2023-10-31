import React, { useState, useContext } from "react";
import arrow from "../../assets/arrow.svg";
import DatasetPicker from "./DatasetPicker";
import { AnimatePresence } from "framer-motion";
import DatasetContext from "../../context/DatasetContext";


function DatasetSelector() {
    const [showPicker, setShowPicker] = useState(false);

    const togglePicker = () => {
        setShowPicker((prev) => !prev);
    };

    const { datasetName } = useContext(DatasetContext)

    console.log(datasetName, '<--- DATASET NAME')

    return (
        <div className="dataset-selector selector">
            <AnimatePresence>{showPicker && <DatasetPicker />}</AnimatePresence>
            <div className="dataset-selector-btn">
                <button className="btn selector-arrow" onClick={togglePicker}>
                    <img src={arrow} alt="arrow" />
                </button>

                <div className="dataset-selector-text selector-text">
                    <p className="weather-type">TEMPERATURE</p>
                    <p className="weather-variable">
                        {datasetName}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DatasetSelector;
