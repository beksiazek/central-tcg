import React from 'react';
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineShopping } from "react-icons/ai";

export default function KartWidget() {
    return (
        <BaseButton variant="outline-light">
            <AiOutlineShopping />
        </BaseButton>
    )
}
