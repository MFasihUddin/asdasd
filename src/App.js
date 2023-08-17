import React, { Component } from "react";
import PageContent from "./PageContent";
import Navbar from "./Navbar";
import Form from "./Form";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
    );
  }
}

export default App;
