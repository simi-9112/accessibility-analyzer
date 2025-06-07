export function buildPrompt(violation) {
  return `
Accessibility Issue: ${violation.help}
Description: ${violation.description}
HTML Snippet: ${violation.nodes?.[0]?.html || "Not provided"}

Explain this issue and suggest a fix with code if possible.
`;
}
