import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GenericHeaderSection } from '../../../components/';

const useStyles = makeStyles((theme) => ({
  headerStyle: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0px 32px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '0px 100px',
    },
    '& h6': {
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        fontWeight: '700',
        margin: '0px 0px 71px 0px',
        color: theme.palette.text.secondary,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
        fontWeight: '700',
        margin: '0px 0px 86px 0px',
        color: theme.palette.text.secondary,
      },
    },
  },
  formStyle: {
    textAlign: 'left',
    padding: '48px 0px',
    justifyContent: 'center',
    '& h3': {
      fontSize: '20px',
      fontWeight: '500',
      margin: '32px 0px 8px 0px',
      color: theme.palette.text.primary,
    },
    '& h4': {
      fontSize: '20px',
      fontWeight: '500',
      margin: '8px 0px 0px 0px',
      color: theme.palette.text.primary,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Contact', href: '/about/contact' },
  ];

  return (
    <Box>
      <GenericHeaderSection
        mainTitle='Contact Us'
        breadCrumbLinks={breadCrumbLinks}
      >
        <Grid container justify='center' className={classes.headerStyle}>
          <Grid item xs={12} md={10}>
            <Typography variant='h6'>
              We would love to hear your thoughts or feedback on how we can
              improve your experience with the Civic Tech Index!
            </Typography>
          </Grid>
        </Grid>
      </GenericHeaderSection>
      <div style={{ textAlign: 'center' }}>
        <iframe
          title='googleContactForm'
          src='https://docs.google.com/forms/d/e/1FAIpQLSeTVA3JJdzS1Hftq5CmpGVYcn60KRXqu2ajM85NgF2vxEgghg/viewform?embedded=true'
          width='640'
          height='1179'
          frameBorder='0'
          marginHeight='0'
          marginWidth='0'
        >
          Loading…
        </iframe>
      </div>
    </Box>
  );
};

export default Contact;
