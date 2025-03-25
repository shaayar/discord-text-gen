// Main component that ties everything together
import { useState, useMemo, useCallback } from "react";
import { Container, Title, Space, Code } from "@mantine/core";
import TextInput from "./components/TextInput";
import ColorSelector from "./components/ColorSelector";
import OutputDisplay from "./components/OutputDisplay";
import CopyToClipboard from "./components/CopyButton";
import { formatDiscordText } from "./utils/discordFormatter";

const DiscordTextGenerator = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("diff");
  const [customColor, setCustomColor] = useState("");
  const [useCustom, setUseCustom] = useState(false);

  // Memoized formatted text to optimize re-renders
  const formattedText = useMemo(() => 
    useCustom && customColor ? formatDiscordText(text, customColor, "") : formatDiscordText(text, color, ""), 
    [text, color, customColor, useCustom]
  );

  const handleTextChange = useCallback((event) => setText(event.target.value), []);
  const handleColorChange = useCallback((newColor) => {
    setColor(newColor);
    setUseCustom(false);
  }, []);
  const handleCustomColorChange = useCallback((event) => {
    setCustomColor(event.target.value);
    setUseCustom(true);
  }, []);

  return (
    <Container>
      <Title>Discord Colored Text Generator</Title>
      <Space h="md" />

      <TextInput value={text} onChange={handleTextChange} />
      <Space h="md" />

      <ColorSelector 
        selectedColor={color} 
        customColor={customColor} 
        onSelectColor={handleColorChange} 
        onCustomColorChange={handleCustomColorChange} 
        useCustom={useCustom}
      />
      <Space h="md" />

      <Title order={4}>Formatted Discord Text:</Title>
      <Space h="md" />

      <OutputDisplay formattedText={formattedText} />
      <Space h="md" />

      <Title order={4}>Live Discord Preview:</Title>
      <div className="discord-preview">
        {formattedText}
      </div>
      <Space h="md" />

      <CopyToClipboard text={formattedText} />
    </Container>
  );
};

export default DiscordTextGenerator;
