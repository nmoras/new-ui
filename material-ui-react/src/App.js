import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container} from '@material-ui/core';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { ThemeProvider, useTheme, makeStyles, createMuiTheme } from '@material-ui/core/styles'
// import { red, green } from '@material-ui/core/colors'
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Routing from './Routing';

function App() {
  return (  
    <> 
      
      <CssBaseline />
      <Navbar />  
      <Container maxWidth="lg" className='App-header'> 
        <Routing />
      </Container>
     

    </>
  );
}

export default App;

//https://material-ui.com/getting-started/templates/