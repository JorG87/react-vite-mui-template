import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Copyright: React.FC<React.ComponentProps<any>> = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Captiva Cooling Inc.
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Copyright