import React, { useState } from 'react';
import { Link } from 'react-router-dom/';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandLessRounded from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRounded from '@material-ui/icons/ExpandMoreRounded';
import useStyles from './styles';

const DropdownList = ({ header, links, route }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleList = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={classes.dropdownHeader} onClick={toggleList}>
        <Typography
          // component={Link} to={route} // uncomment to create Menu header as link
          variant='body2'
          color='textSecondary'
          style={{ fontWeight: 'bold', textDecoration: 'none' }}
        >
          {header}
        </Typography>
        {open ? <ExpandLessRounded color='secondary' /> : <ExpandMoreRounded color='primary' />}
      </Box>
      {open &&
        links.map((link) => {
          return link.isExternal ? (
            <a style={{ textDecoration: 'none' }} href={link.route}>
              {link.header}
            </a>
          ) : (
            <Link style={{ textDecoration: 'none' }} to={link.route}>
              {link.header}
            </Link>
          );
        })}
    </>
  );
};

export default DropdownList;
