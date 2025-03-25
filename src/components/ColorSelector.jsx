// Component for selecting text color
import { SegmentedControl, ColorInput } from "@mantine/core";

const predefinedColors = [
  { label: "Red", value: "diff" }, // Uses -Text (Red)
  { label: "Green", value: "css" }, // Uses [Text] (Green)
  { label: "Blue", value: "ini" }, // Uses [Text] (Blue)
  { label: "Yellow", value: "fix" }, // Uses Text (Yellow)
  { label: "Cyan", value: "json" }, // Uses "Text" (Cyan)
  { label: "Gray", value: "apache" }, // Uses # Text (Gray)
  { label: "Orange", value: "arm" }, // Uses @Text (Orange)
  { label: "Pink", value: "ml" }, // Uses Text (Pink/Magenta)
  { label: "Custom", value: "custom" }, // User-defined color
];

const ColorSelector = ({ selectedColor, customColor, onSelectColor, onCustomColorChange }) => {
  return (
    <div>
      <SegmentedControl
        data={predefinedColors}
        value={selectedColor}
        onChange={onSelectColor}
      />
      {selectedColor === "custom" && (
        <ColorInput
          label="Pick a color"
          defaultValue="#C5D899"
          value={customColor}
          onChange={onCustomColorChange}
          disallowInput
          format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
        />
      )}
    </div>
  );
};

export default ColorSelector;
