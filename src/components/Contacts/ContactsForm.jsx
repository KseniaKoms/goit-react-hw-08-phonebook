import { Notify } from 'notiflix';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsApi';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact, { isLoading: adding, isSuccess }] =
    useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Contact was added to your phonebook');
      setName('');
      setNumber('');
    }
  }, [isSuccess]);

  const handleSubmit = e => {
    e.preventDefault();

    if (data.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      Notify.warning(`${name} is already in contacts!`);
      return;
    }

    addContact({ name, number });
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Phonebook
          </Typography>
          <Box
            component="form"
            sx={{ mt: 1 }}
            // noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              onChange={handleChange}
              id="name"
              label="Name"
              margin="normal"
              value={name}
              fullWidth
              required
              name="name"
              type="text"
              inputProps={{
                inputMode: 'text',
                pattern:
                  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              }}
            />

            <TextField
              id="number"
              label="Number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {adding ? <p>adding...</p> : <p>+ add contact</p>}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
