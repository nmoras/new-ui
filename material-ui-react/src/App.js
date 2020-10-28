import logo from './logo.svg';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography, Container} from '@material-ui/core';
import { ThemeProvider, useTheme, makeStyles, createMuiTheme } from '@material-ui/core/styles'
import { red, green } from '@material-ui/core/colors'

const styles = makeStyles({
  root: {
    backgroundColor: 'beige',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary:{
      main: '#e3f2fd'
    }
  }
})

function App() {
  const classes = styles(); //className={classes.root}
  //const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fluid className='App-header'>
        <Button 
          variant="contained"
          color="secondary"
          >
          Click me
        </Button>

      </Container>
    </ThemeProvider>
    
  );
}

export default App;
