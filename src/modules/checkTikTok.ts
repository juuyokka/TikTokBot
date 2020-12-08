const tikTokRegex = /https?:\/\/(.+\.)*tiktok.com\/\S+/g

/**
 * Finds all TikTok links from a string
 * 
 * @param s The string to process
 * @returns An array of the matches
 */
export default (s: string): RegExpMatchArray | null => {
    return s.match(tikTokRegex);
}
