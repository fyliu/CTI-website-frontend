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
    backgroundColor: '#FFFFFF',
    height: '186px',
    border: '1px solid',
    borderRadius: '4px',
    borderColor: theme.palette.background.darkGray,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    boxShadow: '0px 6px 30px rgba(4, 45, 95, 0.08)',
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
    border: '1px solid',
    borderRadius: '4px',
    borderColor: theme.palette.background.darkGray,
    // boxSizing: 'border-box',
    boxShadow: '0px 6px 30px rgba(4, 45, 95, 0.08)',
    width: '600px',
  },
}));

export default useStyles;
