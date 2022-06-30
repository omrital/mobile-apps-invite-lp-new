import {InviteDetails} from "./types";

export const inviteDetails: InviteDetails = {
  appType: 'spaces',
  title: 'Kicksmini',
  subtitle: 'Secondary Line',
  description: 'Download the Spaces by Wix app and join “Kicksmini” to check out their blog on the go and stay updated with new posts.',
  placeImageUrl: 'https://wixmp-01fd07bebf1fbe0cb8eea7be.wixmp.com/pages/wix-style-react/tag.pr_9866/9dbb1640-f616-11ec-ad7f-73c92fe859f1/storybook/example.jpg',
//  placeImageUrl: undefined,
  coverImageUrl: 'https://wixmp-01fd07bebf1fbe0cb8eea7be.wixmp.com/pages/wix-style-react/tag.pr_9866/9dbb1640-f616-11ec-ad7f-73c92fe859f1/storybook/TravelExample6.jpg',
//  coverImageUrl: undefined,
//  itemImageUrl: 'https://wixmp-01fd07bebf1fbe0cb8eea7be.wixmp.com/pages/wix-style-react/tag.pr_9866/9dbb1640-f616-11ec-ad7f-73c92fe859f1/storybook/TravelExample6.jpg',
  itemImageUrl: undefined,
  itemName: 'Find Your Perfect Hobby Right Away',
  itemDescription: 'Blog Post',
  vertical: 'blog',
//  vertical: 'stores',
//  inviteLevel: '1st',
  inviteLevel: '2nd',
};

export const config = {
  assets: {
    LP_BACKGROUND_SPACES: '/lp_background_spaces.png',
    QR_CODE_FRAME: '/qr_code_frame.png',
    LOGO_APPLE: 'logo_apple.png',
    LOGO_GOOGLE_PLAY: 'logo_google_play.png'
  },
  marginLeft: {
    COVER_IMAGE_1st: "130px",
    COVER_IMAGE_2nd: "151px",
    PLACE_IMAGE_FRAME_1st: "90px",
    PLACE_IMAGE_FRAME_2nd: "111px",
    PLACE_IMAGE_1st: "101px",
    PLACE_IMAGE_2nd: "122px",
    PLACE_TITLE_1st: "150px",
    PLACE_TITLE_2nd: "171px"
  }
};
