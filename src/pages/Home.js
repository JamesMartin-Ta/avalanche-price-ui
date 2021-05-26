import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PricingTable from 'components/PricingTable';

const Home = () => {
  return (
    <Box paddingTop='64px' paddingLeft='24px' paddingRight='24px'>
      <Box>
        <Typography variant='h1'>Avalanche DEFI Pricing</Typography>
      </Box>
      <Box paddingTop='10px' paddingBottom='40px'>
        <Typography variant='h3'>Avalanche DEFI Pricing</Typography>
      </Box>
      <Box>
        <PricingTable />
      </Box>
    </Box>
  );
};
export default Home;
