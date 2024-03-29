export const GITHUB_API_URL = 'https://api.github.com/graphql';
export const GITHUB_PROFILE_URL = 'https://github.com/henriquecesp/';
export const LINKEDIN_PROFILE_URL = 'https://www.linkedin.com/in/henriquecesp/';
export const YOUTUBE_PROFILE_URL = 'https://youtube.com/henriquecesp?sub_confirmation=1';
export const YOUTUBE_API_URL = (token: string) =>
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUokKk0O5EhS9hRcTNm__bYg&maxResults=10&key=${token}`;
export const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/henriquecesp/';
export const CONTACT_EMAIL = 'henriquecesps4@gmail.com';
export const WEBSITE_DOMAIN = 'https://henriquecesp.dev/';
export const WEBSITE_NAME = 'henriquecesp.dev';
export const WEBSITE_TITLE = 'HenriqueCesp - FullStack Dev';
export const GA_TRACKING_ID = 'G-RX2N9J7LJ7';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
