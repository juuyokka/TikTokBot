const tikTokRegex = /^https?:\/\/(.+\.)*tiktok.com\/\S+/

/**
 * Finds the first TikTok link from a string
 * 
 * @param s The string to process
 * @returns The first occurance of a TikTok link or `null` if one was not found
 */
export default (s: string): string | null => {
    return s.match(tikTokRegex)?.[0] ?? null;
}
