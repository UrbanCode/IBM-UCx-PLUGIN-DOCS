export function indexTokenize(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

export function searchTokenize(text: string): string[] {
  text = text.trim()
  if (text.startsWith('"') && text.endsWith('"')) {
    text = text.slice(1, -1);
  }

  if (text.startsWith("'") && text.endsWith("'")) {
    text = text.slice(1, -1);
  }

  return text.split(/\s+/).filter(Boolean);
}
