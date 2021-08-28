import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * Re-uses and extends Material-UI Typography with additional variants.
 * If you pass a variant prop not listed below, it will use Typography with variant settings from the theme.
 */

const useStyles = makeStyles((theme) => ({
  h7: {
    color: theme.palette.spectrum.darkBlue,
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  body1: {
    color: theme.palette.spectrum.darkBlue,
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.35,
  },
  body2: {
    color: theme.palette.spectrum.darkBlue,
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.35,
  },
  body3: {
    color: theme.palette.spectrum.darkBlue,
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.35,
  },
}));

const Text = (props) => {
  const { children, className, variant, ...rest } = props;
  const classes = useStyles();
  const isCustom = Object.keys(classes).indexOf(variant) > -1;

  return (
    <Typography
      className={isCustom ? clsx(classes[variant], className) : className}
      variant={isCustom ? undefined : variant}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
