import React, { FunctionComponent } from 'react';
import { Grid, Paper, TextField, Button, Divider} from '@material-ui/core'
import GoogleIcon from '@material-ui/icons/Google';
import FacebookIcon from '@material-ui/icons/Facebook';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import './SignUp.scss';

const SignUp: FunctionComponent<any> = () => {
  const [state, setState] = React.useState({
    sendEmails: true
  });
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const { sendEmails } = state;

  const paperStyle = {padding: 20, height: '74vh', width: 500, margin: "40px auto"}
  // @ts-ignore
  return (
    <Grid>
      <Paper elevation = {0} style = {paperStyle}>
        <div>
          <div className='align-elements-sign-up'>First, enter your email</div>
        </div>
        {/*<Divider style = {{margin: "30px 0px"}}>OR</Divider>*/}
        <div className = "text" style = {{margin: "10px 0px"}}>
          We suggest using the email address you use at work.
        </div>
        <TextField placeholder = 'name@work-email.com' fullWidth required />
        <Button type={'submit'} style = {{color: 'white', background: 'purple', margin: "15px 0px"}} fullWidth> Continue</Button>
        <FormControlLabel
          control={<Checkbox checked={sendEmails} name="send emails" />}
          label="It’s okay to send me emails about Slack."
        />
        <Box boxShadow={0} bgcolor="background.paper" m={1} p={1} style={{ width: '28rem', height: '5rem', background: '#F8F8F8' }}>
          <div className = "private-policy">
            By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.
          </div>
        </Box>
      </Paper>

    </Grid>
  );
}

export default SignUp;