import React from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

export const AffiliationQuestionSection = ({
  value,
  handleChange,
  question,
}) => {
  return (
    <>
      <Grid container style={{ paddingTop: '30px' }}>
        <Grid item xs={12} sm={8} style={{ padding: '10px' }}>
          <Typography variant='h6' style={{ fontWeight: '500' }}>
            {question}
          </Typography>
        </Grid>
        <Grid item xs={4} sm={8}>
          <Radio
            checked={value === 'yes'}
            data-cy='radio-yes'
            onChange={handleChange}
            value='yes'
            name='yes'
            inputProps={{ 'aria-label': 'true' }}
          />{' '}
          Yes
        </Grid>
        <Grid item xs={4} sm={8}>
          <Radio
            checked={value === 'no'}
            data-cy='radio-no'
            onChange={handleChange}
            value='no'
            name='no'
            inputProps={{ 'aria-label': 'false' }}
          />{' '}
          No
        </Grid>
      </Grid>
    </>
  );
};
