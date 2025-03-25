export const formatDiscordText = (text, color) => {
  const syntaxMap = {
    diff: `\`\`\`diff\n- ${text}\n\`\`\``,
    css: `\`\`\`css\n[${text}]\n\`\`\``,
    ini: `\`\`\`ini\n[${text}]\n\`\`\``,
    fix: `\`\`\`fix\n${text}\n\`\`\``,
    json: `\`\`\`json\n{ "text": "${text}" }\n\`\`\``,
    apache: `\`\`\`apache\n${text}\n\`\`\``,
    arm: `\`\`\`arm\n${text}\n\`\`\``,
    ml: `\`\`\`ml\n${text}\n\`\`\``,
  };
  
  return syntaxMap[color] || `\`\`\`${color}\n${text}\n\`\`\``;
};