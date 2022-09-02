import { setFilter, selectFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const theme = createTheme();

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Contacts
          </Typography>
          <TextField
            id="search"
            label="search"
            type="search"
            variant="standard"
            name="filter"
            onChange={handleChange}
            value={filter}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
