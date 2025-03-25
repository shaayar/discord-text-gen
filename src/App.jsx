// Root application component
import { useState } from "react";
import { Paper, Switch, Group } from "@mantine/core";
import DiscordTextGenerator from "./DiscordTextGenerator";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Paper className={darkMode ? "dark-mode" : "light-mode"}>
      <Group position="right" mb="md">
        <Switch 
          label="Dark Mode" 
          checked={darkMode} 
          onChange={(event) => setDarkMode(event.currentTarget.checked)}
        />
      </Group>
      <DiscordTextGenerator />
    </Paper>
  );
};

export default App;
