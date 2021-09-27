/* eslint-disable max-lines-per-function */
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import BottomCallToAction from '../../components/BottomCallToAction';
import useStyles from './styles.js';
import { GenericHeaderSection } from '../../components/';
const RadicalCollaboration = () => {
  const breadCrumbLinks = [
    { name: 'Home', href: '/home' },
    { name: 'Collaborate with Us', href: '/support' },
  ];
  const classes = useStyles();
  return (
    <Box className='pageContainer'>
      <Box className='boxBackground'>
        <Container className='containerDefault'>
          <GenericHeaderSection
            mainTitle='Your help goes a long way'
            breadCrumbLinks={breadCrumbLinks}
          />
        </Container>
      </Box>
      <Box className='containerGray'>
        <Container>
          <Grid container item>
            <Grid>
              <Paper elevation={0} className={classes.innerTextCardContainer}>
                <Typography className={classes.cardHeading} variant='h4'>Donate </Typography>
                <Typography variant="h6" color='primary' className={classes.subcardHeading}>Every gift helps us continue our work.</Typography>
                <Typography className={classes.dtpLine1}>
                 Your tax-deductible gift today will help make more open-source solutions easily available for the
                 communities who need it the most. Thank You
                </Typography>
                <Button component={Link} to="/donate"  color='textSecondary' className={classes.donateButton}>
                 Make a Donation
                </Button>
                <br></br>
              </Paper>
            </Grid>
            <Grid>
              <Card className={classes.imgCard}>
                <CardMedia
                  className={classes.cardMedia}
                  image={'/images/Donate-to-Us.png'}
                />
              </Card>
            </Grid>
            <Grid>
              <Paper elevation={0} className={classes.innerLeftTextCardContainer}>
                <Typography className={classes.shareCardHeading} variant='h4'>Share the CTI </Typography>
                <Typography variant="h6" color='primary' className={classes.subcardHeading}>Love the Index? Be an evangelist!</Typography>
                <Typography className={classes.rightDtpLine1}>
                 Help others and their communities discover, share and benefit from contributed projects on the index.
                </Typography>
                <Button component={Link} to='/support/share'  className={classes.buttonRight}>
                 Share the CTI
                </Button>
                <br></br>
              </Paper>
            </Grid>
            <Grid>
              <Card className={classes.imgCardLeft}>
                <CardMedia
                  className={classes.cardMedia}
                  image={'/images/Evangelize-Us.png'}
                />
              </Card>
            </Grid>
            <Grid item>
              <Paper elevation={0} className={classes.innerVolunteerTextCardContainer}>
                <Typography className={classes.cardHeading} variant='h4'>Volunteer With Us</Typography>
                <Typography variant="h6" color='primary' className={classes.subcardHeading}>Help us improve the Civic Tech Index.</Typography>
                <Typography className={classes.dtpLine1}>
                 Please <a className={classes.inLineLinkText} href="https://www.hackforla.org/#about" target="_blank" rel="noopener noreferrer">complete this application</a>
                 if you would like us to reach out to you directly or find us on our <a className={classes.inLineLinkText} href="https://www.hackforla.org/projects/civic-tech-index" target="_blank" rel="noopener noreferrer">project team page.</a>.
                </Typography>
                <Button href='https://www.hackforla.org/projects/civic-tech-index.html' color='textSecondary' className={classes.volButton}>
                 Become a Volunteer
                </Button>
                <br></br>
              </Paper>
            </Grid>
            <Grid>
              <Card className={classes.imgCardVolunteer}>
                <CardMedia
                  className={classes.cardMedia}
                  image={'/images/Volunteer-With-Us.png'}
                />
              </Card>
            </Grid>
            <Grid item>
              <Paper elevation={0} className={classes.innerHelpTextCardContainer}>
                <Typography className={classes.shareCardHeading} variant='h4'>Need Help?</Typography>
                <Typography variant="h6" color='primary' className={classes.subcardHeading}>Can&apos;t find the answer youre looking for?</Typography>
                <Typography className={classes.rightDtpLine1}>
                   We&apos;ve shared some of our most frequently asked questions to help you out!  View our   <Link to="/faq"> FAQ  </Link>
                  <span> to find answers or <a className={classes.inLineLinkText} href='/contact'>contact us.</a> </span>
                </Typography>
                <Button component={Link} to='/faq' className={classes.donateButton}>
                  View FAQ
                </Button>
                <br></br>
              </Paper>
            </Grid>
            <Grid>
              <Card className={classes.imgHelpCardLeft}>
                <CardMedia
                  className={classes.cardMedia}
                  image={'/images/FAQ.png'}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className='containerWhite'>
        <Container>
          <BottomCallToAction
            heading='Want to support in other ways?'
            buttonHref='/contact'
          />
        </Container>
      </Box>
    </Box>
  );
};

export default RadicalCollaboration;
