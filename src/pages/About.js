import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  GetStartedCard,
  PictureCard,
  GenericHeaderSection,
} from '../components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  subHeaderStyle: {
    fontWeight: '700',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      padding: '48px 30px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      padding: '48px 100px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
      padding: '48px 200px',
    },
  },
  frameStyle: {
    border: 'none',
    overflow: 'hidden',
    padding: '0',
    width: '949px',
    height: '629px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
}));

const About = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
  ];

  const classes = useStyles();
  const srcUrl =
    'https://docs.google.com/presentation/d/e/2PACX-1vR7tcbGnftrvXyCPzQW9wIo4fstOf1YFhSbP_VP2E7XXKrk9qCdy7Qq5pYnrA0yudpmH2PS3R8s_oTM/embed?start=false&loop=false&delayms=3000';

  const pictureMarketingPoints = [
    {
      src: '/images/girlCoding.png',
      alt: 'girl coding on her computer',
      children: 'No coding experience needed to submit your project!',
    },
    {
      src: '/images/groupCoding.png',
      alt: 'group coding',
      children:
        'Make your project more visible with GitHub’s open-source communities',
    },
    {
      src: '/images/girlandguyCoding.png',
      alt: 'girl and guy coding',
      children: 'The Index is owned by all who contribute to it',
    },
  ];

  return (
    <Box className='containerDefault'>
      <Box className='boxBackround'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='A movement to index every open source civic tech project on GitHub'
            breadCrumbLinks={breadCrumbLinks}
          >
            <Grid container justify='center'>
              <iframe
                className={classes.frameStyle}
                justify='center'
                title='Overview of CTI'
                frameBorder='0'
                src={srcUrl}
                scrolling='no'
                allowFullScreen='true'
                mozallowfullscreen='true'
                webkitallowfullscreen='true'
              ></iframe>
            </Grid>
            <Typography
              variant='h5'
              color='textSecondary'
              className={classes.subHeaderStyle}
            >
              With your help, we can create a continuously updated repository
              for all civic tech enthusiasts to find open source projects to
              model, connect with, and learn from.
            </Typography>
          </GenericHeaderSection>
        </Container>
      </Box>
      <PictureCard
        items={pictureMarketingPoints}
        style={{ padding: '0 115px' }}
      />
      <GetStartedCard
        headerTitle='Ready to get started?'
        buttonText='Add Your Project'
        buttonHref='/join-index'
      />
    </Box>
  );
};

export default About;
