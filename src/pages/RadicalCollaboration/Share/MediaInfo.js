import React from 'react';
import useStyles from './styles.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CtiLogoSection = () => {
    return (
      <Grid container>
        <Grid container item xs={6} justify="flex-end">
          <img
            src='/images/OneColor_CTI_Logo.svg'
            alt='CTI logo'
          />
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={6} />
        <Grid container item xs={6} justify="flex-start">
          <img
            src='/images/FullColor_CTI_Logo.svg'
            alt='CTI logo color'
          />
        </Grid>
    </Grid>
    );
  };
  
  const ButtonSection = () => {
    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        style={{ marginTop: '38px' }}
      >
        <Button
          href='https://drive.google.com/drive/folders/1EORoPWmALLXJCfHyDXJemYpO5HvnMzPN'
          target='blank'
        >
          Download the CTI Assets Kit
        </Button>
        <Typography variant='body1' style={{ marginTop: '18px' }}>
          (All sizes & formats listed above in a .zip file)
        </Typography>
      </Grid>
    );
  };

const MediaInfo = () => {
    const classes = useStyles();
    return (
      <Container>
        <Grid container className={classes.mediaInfoStyle}>
          <Grid
            container
            direction='column'
            alignItems='center'
            justify='center'
            item
            lg={6}
            sm={12}
            md={12}
          >
            <Box>
              <Typography
                variant='h3'
                style={{ color: '#004364', marginBottom: '32px' }}
              >
                Use our Logo on your Project!
              </Typography>
              <Typography variant='h6' style={{ marginBottom: '16px' }}>
                If you have done the following:
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '15px' }}>
                • You have listed your project on Civic Tech Index
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '15px' }}>
                • You have added the topic tag &quot;civictechindex&quot;to your
                project repository
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '15px' }}>
                • You have developed your own interface to search the Index
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '15px' }}>
                • In articles or social media posts featuring Civic Tech Index.
              </Typography>
              <Typography variant='body1' style={{ paddingBottom: '15px' }}>
                • For all other uses, please
                <a
                  style={{
                    color: '#0D99C6',
                    textDecoration: ' none',
                  }}
                  href='/contact'
                >
                  {' '}
                  contact us
                </a>{' '}
                for permission.
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            direction='column'
            alignItems='center'
            item
            lg={6}
            sm={12}
            md={12}
          >
            <CtiLogoSection />
            <ButtonSection />
          </Grid>
        </Grid>
      </Container>
    );
  };
  
  export default MediaInfo;