import {SERVICE_TYPE} from './types';

export const config = {
  defaults: {
    verticalFallback: "default",
    inviteDetails: {
      appType: 'WixOneApp',
      placeName: '',
      placeImageUrl: undefined,
      coverImageUrl: undefined,
      itemImageUrl: undefined,
      itemName: '',
      itemDescription: '',
      vertical:  "default",
      inviteLevel: '1st',
      businessId: ''
    },
    inviteCode1stExample: 'YVDKFT',
    inviteCode2ndExample: 'OCEIPO',
  },
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
  },
  verticalsPriority: [
    SERVICE_TYPE.STORES,
    SERVICE_TYPE.BOOKINGS,
    SERVICE_TYPE.GROUPS,
    SERVICE_TYPE.NEW_BLOG,
    SERVICE_TYPE.FORUM,
    SERVICE_TYPE.EVENTS,
    SERVICE_TYPE.ACHIEVEMENTS,
  ]
};
