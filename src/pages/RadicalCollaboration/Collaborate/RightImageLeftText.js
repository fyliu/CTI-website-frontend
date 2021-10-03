/* eslint-disable max-lines-per-function */
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import NavButton from '../../../components/NavButton';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

  rightContainerStyle: {
    display:"flex",
    justifyContent:"space-between",
    alignItems : 'center',
    flexWrap:'wrap',
    marginBottom: '40px',
  },
  rightinnerTextCardContainer: {
    background: 'none',
    width: '45%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: '3px',
    },
  },
  rightcardHeading: {
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
  rightsubcardHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
    },
  },
  rightdescription: {
    marginTop: '7px',
    fontSize:'18px',
    textAlign: 'justify',
    '& a:visited': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:'16px',
    },
  },
  rightbuttonStyle: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    padding: '8px 32px',
    top: '21px',
    [theme.breakpoints.down('sm')]: {
      top: '14px',
      padding: '16px 0px',
      width: '192px',
      height: '42px',
      fontSize: '13px',
    },
  },
  rightimgCard: {
    background: 'none',
    width: '45%',
    marginTop: '30px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  rightcardMedia: {
    borderRadius: '8px',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))
const RightImageLeftText = (props,href) => {

  const mainHeading = props.mainHeading;
  const subHeading = props.subHeading;
  const description = props.description;
  const buttonText = props.buttonText;
  const buttonHref = props.buttonHref;

  const classes = useStyles(props);
  return (
    <Grid container className={classes.rightContainerStyle}>
      <Card className={classes.rightimgCard}>
        <CardMedia
          className={classes.rightcardMedia}
          component='img'
          alt={props.alt}
          image={props.src}
          title={props.alt}
        />
      </Card>
      <Paper elevation={0} className={classes.rightinnerTextCardContainer}>
        <Typography className={classes.rightcardHeading} variant='h4'> {mainHeading} </Typography>
        <Typography variant="h6" color='primary' className={classes.rightsubcardHeading}>{subHeading}</Typography>
        <Typography className={classes.rightdescription}>{description}</Typography>
        {/^https?:\/\//.test(buttonHref) ? <Button href='https://www.hackforla.org/projects/civic-tech-index.html' className={classes.rightbuttonStyle}>{buttonText}</Button>:  <NavButton component={Link} to={buttonHref} style={{ color:"#FEFEFE" }}  className={classes.rightbuttonStyle}>{buttonText} </NavButton> }
      </Paper>
    </Grid>

  );
};
export default RightImageLeftText;
