import React from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error={!value}
          helperText={!value ? 'Required' : 'Way to go!'}
        />
        <TextField label="Disabled Input" disabled />
        <TextField label="Read-Only Input" InputProps={{ readOnly: true }} />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone!"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
        />
        <TextField
          label="Weight"
          InputProps={{ endAdornment: <InputAdornment position="end">lb</InputAdornment> }}
        />
        <TextField
          label="Password"
          type="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
