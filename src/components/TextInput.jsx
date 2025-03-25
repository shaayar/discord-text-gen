// Component for user text input
import { Textarea } from "@mantine/core";

const TextInput = ({ value, onChange }) => {
  return (
    <Textarea
      label="Enter your text"
      placeholder="Type here..."
      autosize
      minRows={3}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
