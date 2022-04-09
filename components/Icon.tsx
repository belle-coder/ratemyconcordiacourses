import React from "react";
import {Ionicons} from "@expo/vector-icons";
import {IconT} from "../assets/data/types";

const Icon = ({color, name, size, style}: IconT) => (
    <Ionicons name={name} size={size} color={color} style={style}/>
);

export default Icon;
