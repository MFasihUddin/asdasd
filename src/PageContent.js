import React, { Component } from "react";
import { ThemeContext } from "./context/ThemeProvider";

class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkTheme } = this.context;
    const styles = {
      background: isDarkTheme ? "black" : "white",
      width: "100vw",
      height: "100vh",
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}

export default PageContent;
