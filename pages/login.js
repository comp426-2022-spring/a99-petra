import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { LoginBox } from "../components/LoginBox";

export default function Main() {
  return (
    <Page layout="1">
      <LoginBox></LoginBox>
    </Page>
  );
}