import React, { FunctionComponent } from 'react';
import { Grid, Paper, TextField, Button, Divider} from '@material-ui/core'
import PinInput from "react-pin-input";

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import './AuthDigitCode.scss';
// import set = Reflect.set;

// https://codesandbox.io/s/8jnlxw359?file=/src/App.js
// https://www.npmjs.com/package/react-pin-input

const AuthDigitCode: FunctionComponent<any> = () => {
  const [state, setState] = React.useState({
    sendEmails: true
  });
  const [pin, setPin] = React.useState(null);
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  const { sendEmails } = state;

  const paperStyle = {padding: 25, height: '74vh', width: 800, margin: "40px auto"}
  // @ts-ignore
  // @ts-ignore
  return (
    <Grid>
      <Paper elevation = {0} style = {paperStyle}>
        <div>
          <div className='align-elements-sign-up' style = {{margin: "10px 100px"}}>Check your email for a code</div>
        </div>
        <div className = "text" style = {{margin: "10px 0px"}}>
          We've sent a 6-digit code to slackclone1@gmail.com. The code expires shortly so please
        </div>
        <div className = "text" style = {{margin: "10px 300px"}}>
          enter it soon.
        </div>
        <PinInput
          length={6}
          focus
          style = {{margin: "20px 200px"}}
          // disabled
          // secret
          // ref={p => (setPin(p))}
          type="numeric"
          // onChange={setPin(onChange)}
        />

        <div className = "private-policy"  style = {{margin: "20px 200px"}}>
          Can't find your code? Check your spam folder!
        </div>
      </Paper>

    </Grid>
  );
}

export default AuthDigitCode;