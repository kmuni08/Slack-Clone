import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './Nav.scss';

import AppIcon from './app-icon/AppIcon';
import ProductMenu from './product-menu/ProductMenu';
import { motion } from 'framer-motion';
import { toolBar, toolBarItem } from './variants.motion';

const Nav: FunctionComponent<any> = () => {

  return (
    <AppBar position="static" color={'secondary'} >
      <Toolbar
        component={motion.div} variants={toolBar} initial={'hidden'} animate={'visible'}>
        <Link
          to={'/'} className={'nav-icon'} >
          <Button
            component={motion.button} variants={toolBarItem}
            color={'inherit'}><AppIcon/></Button>
        </Link>
        <div>
          <ProductMenu variants={toolBarItem}/>
          <Button
            component={motion.button} variants={toolBarItem}
            className='font-cap my-8' color={'inherit'}>Enterprise</Button>
          <Button
            component={motion.button} variants={toolBarItem}
            className='font-cap my-8' color={'inherit'}>Resources</Button>
          <Button
            component={motion.button} variants={toolBarItem}
            className='font-cap my-8' color={'inherit'}>Pricing</Button>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <IconButton
            component={motion.button} variants={toolBarItem}
            color={'inherit'}>
            <SearchIcon/>
          </IconButton>
          <Link
            to={'/signin'} className={'sign-in'}>
            <Button
              component={motion.button} variants={toolBarItem}
              className='font-cap my-8' variant={'text'} color={'inherit'}>
              Sign in
            </Button>
          </Link>
          <Button
            component={motion.button} variants={toolBarItem}
            variant={'outlined'} color={'inherit'}>
            TALK TO SALES
          </Button>
          <Button
            component={motion.button} variants={toolBarItem}
            className='my-8' style={{ boxShadow: 'none', background: '#FFFFFF', color: '#7429A3' }} variant={'contained'}>
            TRY FOR FREE
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default Nav;
