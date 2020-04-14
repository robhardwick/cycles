import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export const Start = ({ onClick }) => (
    <button className="start" onClick={onClick}>
        <FontAwesomeIcon icon={faPlayCircle} size="10x" />
    </button>
);