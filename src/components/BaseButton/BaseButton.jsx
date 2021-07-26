import React from 'react';
import Button from "react-bootstrap/Button";

export default function BaseButton(props) {

    const {children, variant} = props;

    return (
        <Button
            variant={variant}>
            {children}
        </Button>
    )
}
