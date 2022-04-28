import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { ProfileBox } from "../components/ProfileBox";
import { getUserData } from "./api/users/UserData";

export default function Main() {

  const userData = getUserData();

  return (
    <Page layout="0" userData={userData}>
      <ProfileBox userData={userData}></ProfileBox>
    </Page>
  );
}