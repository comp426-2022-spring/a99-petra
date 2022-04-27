import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { EditProfileBox } from "../components/EditProfileBox";

export default function Main() {
  return (
    <Page layout="0">
      <EditProfileBox></EditProfileBox>
    </Page>
  );
}