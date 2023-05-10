import { createTheme } from '@mui/material/';

export const Theme = createTheme({

    palette: {
        primary: {
            main: '#19363f ',
      
        },
        secondary: {
            main: '#FFB6C1',
            light: "#00a39f",
        },
        info: {
            main: '#097969',
            light: "#066b8a"
        },
        background: {
            default: "#64748B"
        }
    },

    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

export default Theme;
