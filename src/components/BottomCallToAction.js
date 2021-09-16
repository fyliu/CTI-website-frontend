import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typoHeading: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
}));

const defaultBackgroundColor = 'transparent'; // see https://developer.mozilla.org/en-US/docs/Web/CSS/background-color - 'transparent' is initial value
const defaultButtonHref = 'mailto:civictechindex@hackforla.org';
const defaultButtonText = 'Contact Us';

const BottomCallToAction = ({
  color,
  buttonHref = defaultButtonHref,
  buttonText = defaultButtonText,
  heading,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  let bgColor = defaultBackgroundColor;
  if (color === 'primary') {
    bgColor = theme.palette.background.default;
  }
  const boxStyle = {
    backgroundColor: bgColor,
  };

  return (
    <Box style={boxStyle} py={8} mx={-3}>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        spacing={4}
      >
        <Grid item>
          <Typography variant='h3' className={classes.typoHeading}>
            {heading}
          </Typography>
        </Grid>
        <Grid item>
          <Button href={buttonHref}>{buttonText}</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BottomCallToAction;
