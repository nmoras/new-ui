import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';
import { ThemeProvider, useTheme, makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

function App() {
  const classes = styles(); //className={classes.root}
  const theme = useTheme();

  

  return (
    <ThemeProvider theme={theme}>
      <container>

      </container>
    </ThemeProvider>
    
  );
}

export default App;
