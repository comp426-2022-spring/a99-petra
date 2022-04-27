import React, { useState } from 'react'
import { TextBox } from '../components/TextBox'
import { Page } from '../components/Page'

export default function Main() {
  return (
      <Page layout="0">
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
