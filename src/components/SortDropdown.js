import React, { useEffect, useRef, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';

const DropdownInput = withStyles((theme) => ({
  input: {
    borderRadius: '4px 4px 0px 0px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    minWidth: '177px',
    minHeight: '43px',
    lineHeight: '18px',
    padding: '7px 10px 7px 10px',
    fontWeight: '500',
    fontFamily: 'Work Sans',
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  formStyle: {
    borderRadius: '4px 4px 0px 0px',
  },
  hiddenStyle: {
    display: 'none',
  },
  dropdownOptionStyle: {
    fontWeight: '500',
  },
}));

export default function SortDropdown({
  inputSortMethodList,
  defaultSortMethod,
  setSortMethod,
}) {
  const classes = useStyles();
  const [isDropdownExpand, setIsDropdownExpand] = useState(false);
  const sortMethodList = inputSortMethodList;
  const [selectedSortMethod, setSelectedSortMethod] =
    useState(defaultSortMethod);
  const [sortMethodMap] = useState({
    'best match': 'Best Match',
    'updated': 'Last Updated',
    'stars': 'Stargazer Count',
  });
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    // Reset the Dropdown Arrow Icon if there is mouse click outside of the dropdown menu or mouse scroll event.
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      if (isDropdownExpand) {
        setIsDropdownExpand(false);
      }
    }
  };

  const handleClickInside = () => {
    setClickedOutside(false);
    if (isDropdownExpand && clickedOutside) {
      setIsDropdownExpand(false);
    }
  };

  const handleChange = (event) => {
    const sortMethodVal = event.target.value;
    setSelectedSortMethod(sortMethodVal);
    setSortMethod(sortMethodVal);
  };
  const handleDropdownOpen = () => {
    setIsDropdownExpand(!isDropdownExpand);
  };
  const generateOptions = () => {
    return sortMethodList.map((sortMethod) => {
      let optionName;
      let isSortMethodSelected = false;
      optionName = sortMethodMap[sortMethod];
      if (selectedSortMethod === sortMethod) {
        optionName = 'Sort: ' + optionName;
        isSortMethodSelected = true;
      }
      return (
        <option
          className={
            isSortMethodSelected
              ? classes.hiddenStyle
              : classes.dropdownOptionStyle
          }
          key={sortMethod}
          value={sortMethod}
        >
          {optionName}
        </option>
      );
    });
  };

  return (
    <FormControl
      className={classes.formStyle}
      ref={myRef}
      onClick={handleClickInside}
    >
      <NativeSelect
        onClick={handleDropdownOpen}
        value={selectedSortMethod}
        onChange={handleChange}
        input={<DropdownInput />}
        IconComponent={isDropdownExpand ? ExpandLessIcon : ExpandMoreIcon}
      >
        {generateOptions()}
      </NativeSelect>
    </FormControl>
  );
}
