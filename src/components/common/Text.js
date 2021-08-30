import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/**
 * Returns Material-UI Typography and extends it with additional variants.
 * Can replace Typography components or be used as a companion to them.
 */

const useStyles = makeStyles((theme) => ({
  h7: {
    fontSize: '1.125rem',
    fontWeight: 700,
    lineHeight: 1.25,
  },
  body1: {
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
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.35,
  },
  // to overcome 'body2' uniqueness in our theme file:
  colorPrimary: {
    color: theme.palette.spectrum.darkBlue,
  },
  colorSecondary: {
    color: theme.palette.spectrum.lightBlue,
  },
  colorTextPrimary: {
    color: theme.palette.spectrum.yellow,
  },
  colorTextSecondary: {
    color: theme.palette.spectrum.white,
  },
}));

const variantMapping = {
  h7: 'h6',
  body1: 'body1',
  body2: 'body2',
  body3: 'body2',
};

const Text = (props) => {
  const { children, className, variant, ...rest } = props;
  const classes = useStyles();
  const isCustom = Object.keys(classes).indexOf(variant) > -1;

  return (
    <Typography
      classes={
        variant === 'body2'
          ? {
              colorPrimary: classes.colorPrimary,
              colorSecondary: classes.colorSecondary,
              colorTextPrimary: classes.colorTextPrimary,
              colorTextSecondary: classes.colorTextSecondary,
            }
          : {}
      }
      className={isCustom ? clsx(classes[variant], className) : className}
      variant={isCustom ? variantMapping[variant] : variant}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
