import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  hiddenStyle: {
    display: 'none',
  },
  selectedOptionTextStyle: {
    fontWeight: '500',
    fontFamily: 'Work Sans',
    fontSize: '14px',
    lineHeight: '18px',
    margin: 'auto 0',
  },
  optionTextStyle: {
    fontWeight: '500',
    fontFamily: 'Work Sans',
    fontSize: '14px',
    lineHeight: '18px',
    margin: 'auto 0 auto 10px',
  },
  dropdown: {
    display: 'flex',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.default,
    boxSizing: 'border-box',
    borderRadius: '4px 4px 0px 0px',
    minHeight: '43px',
    minWidth: '177px',
    border: '1px solid #BCBCBC',
  },
  selectedOptionGridStyle: {
    display: 'inline-flex',
    marginLeft: '10px',
  },
  dropdownIconStyle: {
    marginLeft: '10px',
    width: '32px',
    height: '29px',
  },
  iconGridStyle: {
    margin: 'auto',
    paddingTop: '6px',
  },
  optionContainerStyle: {
    display: 'flex',
    minHeight: '43px',
    minWidth: '177px',
    backgroundColor: theme.palette.background.default,
    border: '0.5px solid #BCBCBC',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  optionsGridStyle: {
    position: 'absolute',
    borderRadius: '0px 0px 4px 4px',
    left: '0',
    right: '0',
  },
  dropdownContainer: {
    position: 'relative',
    display: 'inline-block',
  },
}));

export const SortDropdown = ({
  inputSortMethodList,
  defaultSortMethod,
  setSortMethod,
}) => {
  const classes = useStyles();
  const [isDropdownExpand, setIsDropdownExpand] = useState(false);
  const [selectedSortMethod, setSelectedSortMethod] =
    useState(defaultSortMethod);
  const sortMethodMap = {
    'best match': 'Best Match',
    'updated': 'Last Updated',
    'stars': 'Stargazer Count',
  };

  const handleOptionChange = (event) => {
    const sortMethodVal = event.target.dataset.value;
    setSelectedSortMethod(sortMethodVal);
    setSortMethod(sortMethodVal);
    setIsDropdownExpand(!isDropdownExpand);
  };

  const toggleDropdown = () =>{
    setIsDropdownExpand(!isDropdownExpand);
  }

  const generateOptions = () => {
    return inputSortMethodList.map((sortMethod) => {
      let isSortMethodSelected = false;
      const optionName = sortMethodMap[sortMethod];
      if (selectedSortMethod === sortMethod) {
        isSortMethodSelected = true;
      }
      return (
        <Grid
          item
          key={sortMethod}
          data-value={sortMethod}
          onClick={handleOptionChange}
          className={
            isSortMethodSelected
              ? classes.hiddenStyle
              : classes.optionContainerStyle
          }
        >
          <Typography
            onClick={handleOptionChange}
            data-value={sortMethod}
            className={
              isSortMethodSelected
                ? classes.hiddenStyle
                : classes.optionTextStyle
            }
          >
            {optionName}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <Box className={classes.dropdownContainer}>
      <Grid item data-cy='sort-dropdown' className={classes.dropdown} onClick={toggleDropdown}>
        <Grid className={classes.selectedOptionGridStyle}>
          <Typography className={classes.selectedOptionTextStyle}>
            {'Sort: ' + sortMethodMap[selectedSortMethod]}
          </Typography>
        </Grid>
        <Grid className={classes.iconGridStyle}>
          {isDropdownExpand ? (
            <ExpandLessIcon className={classes.dropdownIconStyle} />
          ) : (
            <ExpandMoreIcon className={classes.dropdownIconStyle} />
          )}
        </Grid>
      </Grid>
      <Grid className={classes.optionsGridStyle}>
        {isDropdownExpand && generateOptions()}
      </Grid>
    </Box>
  );
};

export default SortDropdown;
