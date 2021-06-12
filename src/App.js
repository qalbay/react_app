import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard'
import { orange,blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'fontsource-muli';
import DashboardLayout from './components/DashboardLayout';
import { Stepper } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    }
  }
})

const useStyles = makeStyles({
  root: {
    background: 'orange',
    border: 0,
    borderRadius: 25,
    color: 'white',
    padding: '6px 30px',
  },

});

function StyledBtn() {
  const classes = useStyles();
  return <Button className={classes.root}>Submit</Button>;
}


function App() {

  return (
    <>


      <ThemeProvider theme={theme}>
        <Router>
          <Header title="App-Title" showDisabled={false} />
          {/* <StyledBtn /> */}

          <DashboardLayout />
          <div className="ml-5">
          <Stepper/>

          </div>


          {/* <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/todo-item">
              <TodoItem />
            </Route>
            <Route path="/footer">
              <Footer />
            </Route>
          </Switch> */}



        </Router>
      </ThemeProvider>
    </>

  );
}
export default App;
