// Component to display the formatted Discord text
import { Paper, Code } from "@mantine/core";

const OutputDisplay = ({ formattedText }) => {
  return (
    <Paper shadow="xs" p="md">
      {/* <Code block>{formattedText}</Code> */}
      {formattedText}
    </Paper>
  );
};

export default OutputDisplay;
