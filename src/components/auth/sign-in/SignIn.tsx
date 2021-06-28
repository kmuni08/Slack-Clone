import React, { FunctionComponent } from 'react';
import { Grid, Paper, TextField, Button, Divider} from '@material-ui/core'
import GoogleIcon from '@material-ui/icons/Google';
import FacebookIcon from '@material-ui/icons/Facebook';
import Box from '@material-ui/core/Box';
import './SignIn.scss';

const SignIn: FunctionComponent<any> = () => {
  const paperStyle = {padding: 20, height: '74vh', width: 500, margin: "100px auto"}
  // @ts-ignore
  return (
    <Grid>
      <Paper elevation = {0} style = {paperStyle}>
        <div>
          <div className='align-elements'>Sign in to Slack</div>
        </div>
        <Button style = {{color: 'red', background: 'white', margin: "10px 0px", borderBlockColor: 'red', border: '2px solid red'}} fullWidth>
          <GoogleIcon className = "google icon" />
          Sign In With Google
        </Button>
        <Button style = {{color: 'blue', background: 'white', margin: "10px 0px", borderBlockColor: 'blue', border: '2px solid blue'}} fullWidth>
          <FacebookIcon className = "facebook icon" />
          Sign In With Facebook
        </Button>
        <Divider style = {{margin: "30px 0px"}}>OR</Divider>
        <TextField placeholder = 'name@work-email.com' fullWidth required />
        <Button type={'submit'} style = {{color: 'white', background: 'purple', margin: "15px 0px"}} fullWidth> Sign In With Email</Button>
        <Box boxShadow={0} bgcolor="background.paper" m={1} p={1} style={{ width: '28rem', height: '5rem', background: '#F8F8F8' }}>
          <div className = "secret-text">
            We’ll email you a magic code for a password-free sign in. Or you can sign in manually instead.
          </div>
        </Box>
      </Paper>

    </Grid>
  );
}

export default SignIn;