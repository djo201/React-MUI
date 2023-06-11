import React from 'react';
import { Box, TextField, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';

export const MuiSelect = () => {
  const [country, setCountry] = useState('');
  console.log(country);

  const [countries, setCountries] = useState<string[]>([]);
  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };

  const handleMultiSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Stack spacing={2} direction="row">
      <Box width="250px">
        <TextField label="Select country" select value={country} onChange={handleChange} fullWidth>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>

      <Box width="250px">
        <TextField
          label="Select country"
          select
          value={countries}
          onChange={handleMultiSelectChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText={countries.length === 0 ? 'Please select your country' : ''}
          error={countries.length === 0}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
