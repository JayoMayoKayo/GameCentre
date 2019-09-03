import React from 'react';
import axios from 'axios';

//Components
import Navbar from '../Navbar/Navbar.js';
import DealCardList from './DealCardList/DealCardList.js';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

//Component Stylings
const styles = {
  searchBar : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px'
  },
  materialSearchBar : {
    width : '50%',
    alignContent : 'center',
    justifyContent : 'center' 
  }
}

class PriceChecker extends React.Component {
  state = {
    gameSearchResult : []
  }

  gameDealSearch = (nameInput) => {
    axios.get(`http://localhost:8081/deals/findGame/${nameInput}`)
      .then((response) => {
        console.log(response);
        this.setState({
          gameSearchResult : response.data.list
        })
        console.log(this.state.gameSearchResult);
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const{ classes } = this.props;
    return (
      <>
        <Navbar />
        <h1>PriceChecker</h1>
        
        <Paper className={classes.searchBar} >
          <Input className={classes.materialSearchBar}
            placeholder='Enter the game you want to save moolah on...' 
            onChange={(e) => {this.gameDealSearch(e.target.value)}} />
          <p>hello hello hello hello hello hello hello hello hello hello hello hello</p>
        </Paper>
        

      </>
    );
  }
}
export default withStyles(styles)(PriceChecker);