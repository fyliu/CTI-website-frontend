import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    paddingTop: '96px',
  },
  imageStyle: {
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '36px',
    },
  },
  ctiImageStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '102px',
      height: '62px',
    },
  },
  ctiSquareStyle: {
    maxWidth: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '150px',
      height: '150px',
    },
  },
  starMediaSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  socialMediaSectionStyle: {
    padding: '96px 0 96px',
  },
  mediaInfoStyle: {
    padding: '96px 0 96px',
  },
  card: {
    backgroundColor: theme.palette.spectrum.white,
    height: '186px',
    border: '1px solid',
    borderRadius: '4px',
    borderColor: theme.palette.background.darkGray,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxShadow: '0.1rem 0.1rem 10px #919191',
  },
  cardTypo: {
    textAlign: 'center',
    width: '218px',
  },
  media: {
    height: '64px',
    width: '64px',
  },
  logoPadding: {
      padding: '12px 0'
  },
  tweetGrid: {
    paddingTop: '96px',
  },
  tweetHeading: {
    textAlign: 'center',
    color: theme.palette.spectrum.teal,
  },
  twitterFeedStyle: {
    width: '600px',
    border: '1px solid',
    borderColor: theme.palette.background.darkGray,
    boxShadow: '0.1rem 0.1rem 10px #919191',
  },
}));

export default useStyles;
