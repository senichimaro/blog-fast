import React from 'react';
import {
  Container, Grid, FormControl, TextField, Input, InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



const FormEl = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Container>

        <TextField siz="medium" id="standard-basic" label="Standard" />

        <TextField siz="medium"
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          minRows={4}
        />

        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            id="standard-adornment-amount"
          />
        </FormControl>

        </Container>
    </form>
  );
}

export default FormEl;
