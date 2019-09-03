import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//Components
import DealCard from '../DealCard/DealCard.js';
import { ThemeProvider } from '@material-ui/styles';


//Component Stylings
const styles = {
  cardGrid : {
    paddingLeft: '24px',
    paddingTop: '16px',
    width: '100%'
  }
};

class DealCardList extends React.Component {
  render() {
    let newsData = this.props.newsData;
    const{ classes, value } = this.props;

    return (        
      <Grid className={classes.cardGrid} container spacing={3}>
        {newsData.map(newsData => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <DealCard newsTitle={newsData.title}/>
          </Grid>
        ))}
      </Grid>

    );
  }
}
export default withStyles(styles)(DealCardList);