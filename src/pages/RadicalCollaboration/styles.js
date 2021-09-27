import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({

  titleStyle: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '28px',
    },
  },
  innerTextCardContainer: {
    background: 'none',
    height: '448px',
    width: '608px',
    [theme.breakpoints.down('sm')]: {
      width:'316px',
      background: 'none',
      marginTop: '146px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '11px',
      marginLeft: '11px',
    },
  },
  innerVolunteerTextCardContainer: {
    background: 'none',
    height: '448px',
    width: '608px',
    [theme.breakpoints.down('sm')]: {
      width:'316px',
      height: '384px',
      background: 'none',
      marginTop: '250px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '168px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '0px',
    },
  },
  innerLeftTextCardContainer: {
    height: '448px',
    width: '608px',
    background: 'none',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      width: '314px',
      height: '196px',
      marginTop: '137px',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '479px',
      marginLeft: '37px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '638px',
      marginTop: '0px',
    },
  },
  innerHelpTextCardContainer: {
    height: '448px',
    width: '608px',
    background: 'none',
    [theme.breakpoints.down('sm')]: {
      width:'314px',
      height: '361px',
      background: 'none',
      marginTop: '206px',
      marginLeft: '0px',
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: '368px',
      marginTop: '32px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '657px',
    },
  },
  imgCard: {
    background: 'none',
    top: '462px',
    position: 'absolute',
    height: '382px',
    width: '544px',
    left: '1040px',
    [theme.breakpoints.down('sm')]: {
      top: '378px',
      left: '10px',
      width: '348px',
      height: '382px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '418px',
      left: '387px',
    },
    [theme.breakpoints.up('lg')]: {
      left: '1040px',
      top: '463px',
    },
  },
  imgCardVolunteer: {
    background: 'none',
    position: 'absolute',
    height: '382px',
    width: '544px',
    left: '1040px',
    [theme.breakpoints.down('sm')]: {
      top: '1414px',
      left: '11px',
      width: '319px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '1270px',
      left: '387px',
    },
    [theme.breakpoints.up('lg')]: {
      left: '1046px',
      top: '1351px',
    },
  },
  imgCardLeft: {
    background: 'none',
    maxWidth: 1280,
    position: 'absolute',
    height: '382px',
    width: '544px',
    [theme.breakpoints.down('sm')]: {
      top: '929px',
      left: '7px',
      width: '319px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '926px',
      left: '30',
    },
    [theme.breakpoints.up('lg')]: {
      top: '900px',
    },
  },
  imgHelpCardLeft: {
    background: 'none',
    maxWidth: 1280,
    position: 'absolute',
    height: '382px',
    [theme.breakpoints.down('sm')]: {
      left: '9px',
      top: '1947px',
      width: '340px',
    },
    [theme.breakpoints.up('sm')]: {
      top: '1650px',
      left: '20',
    },
    [theme.breakpoints.up('lg')]: {
      top: '1816px',
    },
  },
  cardMedia: {
    borderRadius: '8px',
    [theme.breakpoints.down('sm')]: {
      width: '307px',
      height: '220px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '400px',
      height: '300px',
    },
    [theme.breakpoints.up('md')]: {
      height: '382px',
      width: '544px',
    },
  },
  cardHeading: {
    color: theme.palette.secondary.dark,
    marginTop: '103px',
    fontSize: '42px',
    lineHeight: '48px',
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
    },
  },
  subcardHeading: {
    [theme.breakpoints.down('sm')]: {
      fontSize:'15px',
    },
  },
  dtpLine1: {
    marginTop: '7px',
    fontSize:'18px',
    textAlign: 'justify',
    marginRight: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize:'16px',
      textAlign: 'justify',
    },
  },
  volButton: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    margin: '0 auto',
    padding: '0px 16px',
    top: '18px',
  },
  shareCardHeading: {
    color: theme.palette.secondary.dark,
    right: '300px',
    fontSize: '42px',
    lineHeight:'48px',
    marginTop: '61px',
    [theme.breakpoints.down('sm')]: {
      fontSize:'30px',
    },
  },
  rightDtpLine1: {
    fontSize: '18px',
    marginTop: '7px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize:'16px',
      marginRight: 0,
    },
    [theme.breakpoints.up('xl')]: {
      marginRight: 0,
    },
  },
  buttonRight: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    margin: '0 auto',
    padding: '8px 32px',
    top: '21px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0px',
      width: '142px',
      height: '42px',
      fontSize: '15px',
    },
  },
  donateButton: {
    backgroundColor: theme.palette.spectrum.lightBlue,
    margin: '0 auto',
    padding: '8px 32px',
    top: '21px',
    [theme.breakpoints.down('sm')]: {
      top: '14px',
      padding: '16px 0px',
      width: '142px',
      height: '42px',
      fontSize: '15px',
    },
  },
  '@media screen and (max-width: 1366px) and (min-width: 1024px)': {
    innerTextCardContainer: {
      width: '348px',
    },
    imgCard: {
      top: '466px',
      left: '446px',
    },
    innerLeftTextCardContainer: {
      marginTop: '0px',
      marginLeft: '5410px',
    },
    rightDtpLine1:{
      marginRight: '176px',
      marginLeft: '7px',
    },
    imgCardVolunteer: {
      top: '1366px',
      left: '463px',
    },
    dtpLine1:{
      marginRight: '12px',
    },
    imgHelpCardLeft:{
      top: '1824px',
      left: '20px',
    },
    innerHelpTextCardContainer: {
      marginTop: '32px',
      marginLeft: '558px',
    },
  },
}))
export default useStyles
