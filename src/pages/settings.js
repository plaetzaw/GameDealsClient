import React, { Component } from "react";
import UserSettings from "../components/userSettings";

export class settings extends Component {
  render() {
    return (
      <div>
        This page will display the users settings
        <UserSettings />
      </div>
    );
  }
}

export default settings;
