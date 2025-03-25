import { useState } from "react";
import { Paper, Switch, Group, MantineProvider, ColorSchemeProvider } from "@mantine/core";
import DiscordTextGenerator from "./DiscordTextGenerator";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ColorSchemeProvider colorScheme={darkMode ? "dark" : "light"} toggleColorScheme={() => setDarkMode(!darkMode)}>
      <MantineProvider theme={{ colorScheme: darkMode ? "dark" : "light" }} withGlobalStyles withNormalizeCSS>
        <Paper style={{ minHeight: "100vh", padding: "20px" }} shadow="xs" radius="md" withBorder>
          <Group position="right" mb="md">
            <Switch 
              label="Dark Mode" 
              checked={darkMode} 
              onChange={(event) => setDarkMode(event.currentTarget.checked)} 
            />
          </Group>
          <DiscordTextGenerator />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
