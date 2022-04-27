import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { ProfileBox } from "../components/ProfileBox";

export default function Main() {
  return (
    <Page layout="0">
      <ProfileBox></ProfileBox>
    </Page>
  );
}