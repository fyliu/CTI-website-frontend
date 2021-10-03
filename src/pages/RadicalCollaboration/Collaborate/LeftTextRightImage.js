/* eslint-disable max-lines-per-function */
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import NavButton from '../../../components/NavButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

  leftContainerStyle: {
    display:"flex",
    justifyContent:"space-between",
    alignItems : 'center',
    flexWrap:'wrap',
    marginBottom: '40px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap-reverse',
    },
  },

  leftinnerTextCardContainer: {
    background: 'none',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      background: 'none',
      marginTop: '14px',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '3px',
      width: '100%',
    },
  },
  leftcardHeading: {
    color: theme.palette.secondary.dark,
    fontSize: '42px',
    lineHeight: '48px',
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '27px',
    },
  },
  leftsubcardHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
    },
  },
  leftdescription: {
    marginTop: '7px',
    fontSize:'18px',
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'16px',
      textAlign: 'justify',
    },
  },
  leftbuttonStyle: {
    padding: '8px 32px',
    top: '21px',
    color:'#FEFEFE',
    [theme.breakpoints.down('sm')]: {
      top: '14px',
      padding: '16px 0px',
      width: '192px',
      fontSize: '13px',
    },
  },
  leftimgCard: {
    background: 'none',
    width: '45%',
    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  leftcardMedia: {
    borderRadius: '8px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))
const LeftTextRightImage= (props) => {

  const mainHeading = props.mainHeading;
  const subHeading = props.subHeading;
  const description = props.description;
  const buttonText = props.buttonText;
  const buttonHref = props.buttonHref;

  const classes = useStyles(props);


  return (
    <Grid container className={classes.leftContainerStyle}>
      <Paper elevation={0} className={classes.leftinnerTextCardContainer}>
        <Typography className={classes.leftcardHeading} variant='h4'> {mainHeading} </Typography>
        <Typography variant="h6" color='primary' className={classes.leftsubcardHeading}>{subHeading}</Typography>
        <Typography className={classes.leftdescription}>{description}</Typography>
        {/^https?:\/\//.test(buttonHref) ? <Button href='https://www.hackforla.org/projects/civic-tech-index.html' className={classes.leftbuttonStyle}>{buttonText}</Button>:  <NavButton component={Link} to={buttonHref} style={{ color:"#FEFEFE" }} className={classes.leftbuttonStyle}>{buttonText} </NavButton> }

      </Paper>
      <Card className={classes.leftimgCard}>
        <CardMedia
          className={classes.leftcardMedia}
          component='img'
          alt={props.alt}
          image={props.src}
          title={props.alt}
        />
      </Card>
    </Grid>

  );
};
export default LeftTextRightImage;
