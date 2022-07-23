import './App.css';
import VerticalLinearStepper from "./components/stepper";
import {Card} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import * as React from 'react';
import { appTheme } from "./themes/theme";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function App() {
  const [activeForm, setActiveForm] = React.useState(false);

  const openForm = () => {
    setActiveForm(true)
  }


  return (
      <ThemeProvider theme={appTheme}>
    <div className="App solution-box">
      <header className="App-header">
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </header>
        <p>Pathways: Mobile Food Application</p>
      {!activeForm && (<Card className="initial-card-box">
        <h1>Sell Mobile Food in Calgary</h1>


        <Button variant="contained" onClick={openForm}>Get Started Building Your Dreams</Button>
      </Card>)}
      {activeForm && (<Card className="card-box">
            <VerticalLinearStepper/>
        </Card>)}
    </div>
      </ThemeProvider>
  );
}

export default App;
