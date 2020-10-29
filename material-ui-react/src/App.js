import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container} from '@material-ui/core';
// import { ThemeProvider, useTheme, makeStyles, createMuiTheme } from '@material-ui/core/styles'
// import { red, green } from '@material-ui/core/colors'
import SignIn from './components/SignIn';
import Routing from './Routing';


function App() {
 

  return (  
    <>
      <Routing />
      <CssBaseline />
      <Container maxWidth="lg" className='App-header'>
        <SignIn />
      </Container>  
    </>
  );
}

export default App;

//https://material-ui.com/getting-started/templates/