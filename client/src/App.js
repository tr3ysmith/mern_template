import AppLayout from "./components/layout/AppLayout";
import { theme } from "./theme";

function App() {
    return (
        <div className="App">
            <MuiThemeProvider theme={theme} >
                <AppLayout>
                    
                </AppLayout>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
