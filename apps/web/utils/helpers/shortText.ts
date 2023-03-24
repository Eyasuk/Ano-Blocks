export function shortenText(text: string | undefined): string {
  if (!text) return '';
  const shorten = text.slice(0, 4) + '....' + text.slice(text.length - 4);
  return shorten;
}
