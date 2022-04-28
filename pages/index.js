import React, { useState, useEffect } from 'react'
import { TextBox } from '../components/TextBox'
import { Page } from '../components/Page'
import { getUserData } from './api/users/UserData';

export default function Main() {
  const userData = getUserData();

  return (
      <Page layout="0" userData={userData}>
        <TextBox>
          <h1>Team Petra</h1>
          <h2>Members:</h2>
          <p>
          Andrew Byerle, Ashwin Yerramsetty, Matthew Bare, Sofia Wong, Winfield Warren
          </p>
          <h2>Website Description:</h2>
          <p>
          Our team has created a simple COVID-19 reporting dashboard with user signup and login functionality.
          </p>
        </TextBox>
      </Page>
  );
}
