import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    maxWidth: '8rem',
  },
  query: {
    color: theme.palette.secondary.main,
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      width: '55vw',
    },
  },
  selectedSort: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '7px 10px',
    minHeight: '42px',
    background: '#FFFFFF',
    color: '#0F1D2F',
    borderRadius: 4,
    border: '1px solid #6D6E74',
  },
  itemMenuStyle: {
    
  }
}));

const ResultHeader = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('match');

  const changeHandler = (event) => {
    const val = event.target.value;
    setValue(val);
    // call function that sends it to ResultContainer
  };

  const options = [
    { value: 'match', label: 'Best Match' },
    { value: 'stars', label: 'StarGazer Count' },
    // { value: 'udpated', label: 'Last Updated' },
  ];

  const resultCount = (
    <Typography variant='body2' color='primary'>
      Displaying {props.itemLength} of {props.totalCount} results matching:
      <span className={classes.query}> “{props.queryStr}”</span>
    </Typography>
  );
  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        mb={2}
      >
        {props.variant === 'large' ? (
          resultCount
        ) : (
          <Button className={classes.button} onClick={props.onHeaderClick}>
            <FilterListIcon />
            Filter
          </Button>
        )}
        <FormControl variant="outlined">
          <Select
            value={value}
            className={classes.select}
            onChange={changeHandler}
            classes={{
              root: classes.selectedSort,
            }}
          >
            {options.map((option) => {
              const selected = option.value === value;
              return (
                <MenuItem value={option.value} selected={selected} classes={{
                  root: classes.itemMenuStyle,
                }}>
                  {selected ? 'Sort: ' : null}
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      {props.variant === 'small' && resultCount}
    </>
  );
};

export default ResultHeader;
