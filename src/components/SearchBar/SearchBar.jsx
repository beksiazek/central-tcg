import React from 'react';
import { Form, FormControl } from "react-bootstrap";
import BaseButton from "../BaseButton/BaseButton";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
            <BaseButton label={<AiOutlineSearch />} variant="outline-light"></BaseButton>
        </Form>
    )
}
