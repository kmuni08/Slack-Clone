import React, {FunctionComponent} from 'react';
import {Link, useMatch} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import './AuthNav.scss';


// const Nav: ForwardRefRenderFunction<HTMLDivElement, { theme?: Theme, height?: number }> = ({ theme = ThemeDark, height = 70 }, ref) => {
const Nav: FunctionComponent<any> = () => {
  const isMatched = useMatch('/auth/sign-in');
  // console.log(result);

  return (
    <AppBar className={'auth-nav'} position={'static'}>
      <Container maxWidth={'lg'} disableGutters>
        <Toolbar>
          <div className={'auth-nav-container'}>
            <Link to={'/'} className={'auth-nav-icon'}>
              <Button><img src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg" height={34}/></Button>
            </Link>
            {
              isMatched &&
              <div className={'right-section'}>
                <p className='auth-text-create-account'>
                  New to Slack?
                </p>
                <Link
                  to={'/auth/sign-up'} className={`auth-sign-up`}>
                  {/*<Button*/}
                  {/*  size={'small'} variant={'text'} color={'inherit'}>*/}
                  {/*  Create a new account*/}
                  {/*</Button>*/}
                  <div className={`create-new-account`}>
                    Create a new account
                  </div>
                </Link>
              </div>
            }
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
};

// export default forwardRef(Nav);
export default Nav;
