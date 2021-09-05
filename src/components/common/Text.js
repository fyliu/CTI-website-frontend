import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  h1: {
    fontSize: '3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  h2: {
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  h3: {
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
    },
  },
  h4: {
    fontSize: '1.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  h5: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  h6: {
    fontSize: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  body0: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.35,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  body1: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
  body2: {
    color: theme.palette.spectrum.darkBlue,
    fontSize: '0.875rem',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
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
      variant={variant === 'body0' ? 'body1' : variant}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
