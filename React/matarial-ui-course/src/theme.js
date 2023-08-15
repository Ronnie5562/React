import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue",
        },
        secondary: {
            main: "#15c630"
        },
        otherColor: {
            main: "#999"
        }
    }
})

export default responsiveFontSizes(theme);