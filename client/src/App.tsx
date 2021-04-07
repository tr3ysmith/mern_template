import { MuiThemeProvider } from "@material-ui/core";
import Demo from "./components/Demo";
import AppLayout from "./components/layout/AppLayout";
import { theme } from "./theme";

function App() {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme} >
                <AppLayout>
                    <Demo />
                </AppLayout>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
