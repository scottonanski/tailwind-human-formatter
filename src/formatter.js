function formatHtmlHuman(input) {
  return input
    .replace(/class="([^"]+)"/g, (_, classList) => {
      const lines = classList
        .trim()
        .split(/\s+/)
        .map(cls => `    ${cls}`)
        .join('\n');
      return `class="\n${lines}\n"`;
    })
    .replace(/<(\w+)([^>]*?)>/g, (match, tag, attrs) => {
      const lines = [`<${tag}`];
      const attrLines = attrs
        .trim()
        .split(/\s(?=\w+=)/)
        .map(attr => `  ${attr}`);
      return [...lines, ...attrLines, '>'].join('\n');
    });
}

module.exports = { formatHtmlHuman };
