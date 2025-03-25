import { Button } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const CopyToClipboard = ({ text }) => {
  const clipboard = useClipboard({ timeout: 1000 });

  return (
    <Button onClick={() => clipboard.copy(text)} color={clipboard.copied ? "green" : "blue"}>
      {clipboard.copied ? "Copied!" : "Copy to Clipboard"}
    </Button>
  );
};

export default CopyToClipboard;
