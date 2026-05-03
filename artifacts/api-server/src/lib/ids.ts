const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789";

export function makeId(prefix: string, length = 8): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return `${prefix}${out}`;
}
