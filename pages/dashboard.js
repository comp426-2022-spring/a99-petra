import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { Dashboard } from "../components/Dashboard";

export default function Main() {
    return (
        <Page layout="0">
            <Dashboard></Dashboard>
        </Page>
    )
}