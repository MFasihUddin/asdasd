import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { isDarkTheme: false, chickenLikeTail: true };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, changeColor: this.changeColor }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
