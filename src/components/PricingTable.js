import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid } from '@material-ui/core';
import contracts from 'assets/contracts.json';
import AxiosService from 'utils/services/AxiosService';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles({
  flexG: {
    floxGrow: 1
  },
  root: {
    minWidth: 275,
    maxWidth: 380,
    height: 390,
    borderRadius: '32px',
    backgroundColor: '#222b36'
  },
  header: {
    height: 100,
    backgroundColor: '#688eff',
    padding: '0 30px',
    justifyContent: 'space-between'
  },
  logo: {
    height: 60,
    width: 60,
    margin: '0 20px',
    borderRadius: '37px'
  }
});

const PricingTable = () => {
  const classes = useStyles();
  const [tokens, setTokens] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    if (loading) {
      Promise.all(
        contracts.map((contract) =>
          AxiosService.getTokenPrice(contract)
            .then((response) => response)
            .catch((e) => console.log(e))
        )
      ).then((responses) => {
        let allPrices = [];
        responses.map((response, index) => {
          allPrices = [...allPrices, response.data];
          return <React.Fragment key={`1${index}`} />
        });
        setTokens(allPrices);
      });
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      <Box marginBottom='30px'>
        <Button
          startIcon={<RefreshIcon />}
          color='primary'
          variant='contained'
          onClick={() => setLoading(true)}
        >
          <Typography>Refresh</Typography>
        </Button>
      </Box>
      <Grid
        container
        className={classes.flexG}
        direction='row'
        justify='flex-start'
        alignItems='center'
        spacing={3}
      >
        {contracts.map((token, index) => {
          let priceObj = tokens.find(
            (x) => x.symbole === token.targetTokenSymbol
          );

          return (
            <Grid key={`grid ${index}`} item xs={12} sm={6} md={4} lg={4}>
              <Card className={classes.root}>
                <Box
                  className={classes.header}
                  display='flex'
                  alignItems='center'
                >
                  <Typography variant='h1'>{token.tokenName}</Typography>
                  <img src={token.logo} className={classes.logo} alt={token.targetTokenSymbol}/>
                </Box>
                <Box
                  marginTop='50px'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Typography variant='h2' style={{ textAlign: 'center' }}>
                    USDT Price:{' '}
                  </Typography>
                  <Typography variant='h3' style={{ textAlign: 'center' }}>
                    {priceObj?.price.toFixed(4)}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default PricingTable;
