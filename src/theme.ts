import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4FDBCB', contrastText: '#00201C' },
    secondary: { main: '#B0CCC7' },
    background: { default: '#0E1514', paper: '#1A2220' },
    text: { primary: '#DDE4E2', secondary: '#BEC9C6' },
  },
  shape: { borderRadius: 28 },
  typography: {
    fontFamily: '"Roboto Flex","Roboto",sans-serif',
    h1: { fontWeight: 850, letterSpacing: '-0.035em', lineHeight: 1.02 },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h5: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 650 },
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 999, padding: '12px 26px' } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 12, fontWeight: 600 } } },
    MuiStack: { styleOverrides: { root: { flexWrap: 'wrap' } } },
    MuiCard: { styleOverrides: { root: { backgroundImage: 'none', borderRadius: 28 } } },
  },
});
