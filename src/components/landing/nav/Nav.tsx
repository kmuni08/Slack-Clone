import React, { CSSProperties, forwardRef, ForwardRefRenderFunction } from 'react';
import { Link } from 'react-router-dom';

import AppBar, { AppBarTypeMap } from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import AppIcon from '../../app-icon/AppIcon';
import ProductMenu from './product-menu/ProductMenu';

import './Nav.scss';
import { motion } from 'framer-motion';
import { appBar, toolBarItem } from './variants.motion';
import { Theme, ThemeDark, ThemeLight } from '../../../interfaces';
import { ButtonTypeMap } from '@material-ui/core/Button/Button';

const generateTheme = (theme: Theme) => {
  const appBarPosition: Record<Theme, AppBarTypeMap['props']['position']> = { [ThemeDark]: 'static', [ThemeLight]: 'fixed' };
  const appBarColor: Record<Theme, AppBarTypeMap['props']['color']> = { [ThemeDark]: 'secondary', [ThemeLight]: 'info' };
  const appBarStyle: Record<Theme, CSSProperties | undefined> = { [ThemeDark]: undefined, [ThemeLight]: { top: '10px', borderRadius: '50px', width: '98%', left: '1%' } };
  const tryForFreeBtnColor: Record<Theme, ButtonTypeMap['props']['color']> = { [ThemeDark]: 'info', [ThemeLight]: 'secondary' };
  return {
    position: appBarPosition[theme],
    color: appBarColor[theme],
    style: { ...appBarStyle[theme], height: '70px' },
    tryBtnColor: tryForFreeBtnColor[theme],
    variants: appBar[theme]
  };
}

const Nav: ForwardRefRenderFunction<HTMLDivElement, { theme?: Theme }> = ({ theme = ThemeDark }, ref) => {
  const { color, position, style, variants, tryBtnColor } = generateTheme(theme);
  return (
    <AppBar ref={ref}
            color={color} position={position} style={style}
            component={motion.header} variants={variants} initial={'hidden'} animate={'visible'} exit={'exit'} >
      <Container maxWidth={'lg'} disableGutters>
        <Toolbar>
          <Link to={'/'} className={'nav-icon'} >
            <Button
              component={motion.button} variants={toolBarItem}
              color={'inherit'}><AppIcon theme={theme}/></Button>
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
              to={'/auth/sign-in'} className={`sign-in`}>
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
              color={tryBtnColor}
              className='my-8' style={{ boxShadow: 'none'}} variant={'contained'}>
              TRY FOR FREE
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
};

export default forwardRef(Nav);
