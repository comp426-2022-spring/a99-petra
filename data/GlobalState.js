import React, { createContext } from "react";

const initialState = {
    signedin: false,
    email: "",
    firstname: "",
    lastname: "",
    phone: "",
    lastlogin: ""
}

export const GlobalContext = createContext(initialState);