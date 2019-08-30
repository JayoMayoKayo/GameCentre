import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//Components
import MaterialCard from '../MaterialCard/MaterialCard.js';
import { ThemeProvider } from '@material-ui/styles';


//Component Stylings
const styles = {
  cardGrid : {
    paddingLeft: '24px',
    paddingTop: '16px',
    width: '100%'
  }
};

class MaterialCardList extends React.Component {
  render() {
    let newsData = this.props.newsData;
    const{ classes, value } = this.props;

    return (        
      <Grid className={classes.cardGrid} container spacing={3}>
        <Grid item xs={12}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialCard />
        </Grid>

        {newsData.map(articleIndex => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <MaterialCard newsData={newsData}/>
          </Grid>
        ))}
      </Grid>

    );
  }
}
export default withStyles(styles)(MaterialCardList);