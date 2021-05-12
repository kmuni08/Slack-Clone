import React, { FunctionComponent, MouseEvent, useState, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { motion, Variants } from 'framer-motion';
import { toolBarItem } from '../variants.motion';

const ProductMenu: FunctionComponent<{ variants: Variants }> = ({ variants }) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        component={motion.button} variants={toolBarItem}
        className='font-cap my-8' color={'inherit'} onClick={handleClick}
        endIcon={!anchorEl ? <ExpandMoreIcon/> : <ExpandLessIcon/>}
      >
        Product
      </Button>
      <Menu
        id="product-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={handleClose}>Channels</MenuItem>
        <MenuItem onClick={handleClose}>Integrations</MenuItem>
        <MenuItem onClick={handleClose}>Security</MenuItem>
        <MenuItem onClick={handleClose}>Slack Connect</MenuItem>
        <MenuItem onClick={handleClose}>Solutions</MenuItem>
        <MenuItem onClick={handleClose}>Customers</MenuItem>
        <Divider light />
        <MenuItem onClick={handleClose} style={{ margin: '5px 0 0 0'}}>
          <CloudDownloadOutlinedIcon style={{ marginRight: 10 }}/>
          <span>Download Slack</span>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

export default ProductMenu;