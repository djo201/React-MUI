import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ullamcorper erat
        vel rutrum. Nam vel velit nec massa mattis luctus. Etiam finibus condimentum lacus in
        mollis. Pellentesque mattis et neque quis molestie. Aliquam a blandit augue. Vestibulum
        auctor consectetur justo eget finibus. Nulla malesuada felis nec interdum condimentum.
        Nullam imperdiet ex eu ullamcorper consectetur. Donec lacinia tincidunt quam ut condimentum.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis ullamcorper erat
        vel rutrum. Nam vel velit nec massa mattis luctus. Etiam finibus condimentum lacus in
        mollis. Pellentesque mattis et neque quis molestie. Aliquam a blandit augue. Vestibulum
        auctor consectetur justo eget finibus. Nulla malesuada felis nec interdum condimentum.
        Nullam imperdiet ex eu ullamcorper consectetur. Donec lacinia tincidunt quam ut condimentum.
      </Typography>
    </div>
  );
};
