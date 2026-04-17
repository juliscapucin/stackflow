export type ClassValue = string | undefined | null | false;

/** Merges class names; trims falsy entries. Prefer tailwind-merge when added to the project. */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
