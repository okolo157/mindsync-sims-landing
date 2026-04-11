/**
 * Utility functions for text transformation
 */

/**
 * Converts a string to sentence case - capitalizes the first letter of each sentence
 * while preserving the rest of the text as-is (doesn't force lowercase)
 * @param str The string to convert
 * @returns The string in sentence case
 */
export const toSentenceCase = (str: string): string => {
  if (!str) return str;
  
  // Split by sentence-ending punctuation while keeping the delimiter
  // This regex matches: period, question mark, exclamation mark followed by space(s)
  const sentences = str.split(/(?<=[.!?])\s+/);
  
  return sentences
    .map((sentence) => {
      if (!sentence) return sentence;
      // Find the first letter and capitalize it
      const trimmed = sentence.trimStart();
      const leadingSpaces = sentence.length - trimmed.length;
      const spaces = sentence.slice(0, leadingSpaces);
      
      if (!trimmed) return sentence;
      
      // Capitalize first character, keep rest as-is
      return spaces + trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    })
    .join(' ');
};

/**
 * Converts a string to title case - capitalizes the first letter of each word
 * @param str The string to convert
 * @returns The string in title case
 */
export const toTitleCase = (str: string): string => {
  if (!str) return str;
  
  return str
    .split(' ')
    .map((word) => {
      if (!word) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

/**
 * Capitalizes only the first letter of a string, leaving rest unchanged
 * @param str The string to capitalize
 * @returns The string with first letter capitalized
 */
export const capitalizeFirst = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
