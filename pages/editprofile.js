import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { EditProfileBox } from "../components/EditProfileBox";
import { getUserData } from "./api/users/UserData";

export default function Main() {

  const userData = getUserData();

  return (
    <Page layout="0" userData={userData}>
      <EditProfileBox userData={userData}></EditProfileBox>
    </Page>
  );
}