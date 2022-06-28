import {InviteDetails} from "../config/types";
import {config} from "../config";

const getAppLogo = (inviteDetails: InviteDetails) => {
  return `logo_${inviteDetails.appType}.png`;
};

const getPhoneIllustration = (inviteDetails: InviteDetails) => {
  return `phone_Illustration_${inviteDetails.inviteLevel}_${inviteDetails.appType}.png`;
};

const getPlaceImageFrame = () => {
  return 'place_image_frame.png';
};

const getCoverImage = (inviteDetails: InviteDetails) => {
  return inviteDetails.coverImageUrl;
};

const getPlaceImage = (inviteDetails: InviteDetails) => {
  return inviteDetails.placeImageUrl ? inviteDetails.placeImageUrl : 'place_image_placeholder.png';
};

const getItemFrame = () => {
  return 'item_image_frame.png';
};

const getItemImage = (inviteDetails: InviteDetails) => {
  return inviteDetails.itemImageUrl ? inviteDetails.itemImageUrl : `item_image_placeholder_${inviteDetails.vertical}.png`;
};

const getMarginLeft = (inviteDetails: InviteDetails) => {
  return {
    // @ts-ignore
    coverImage: config.marginLeft[`COVER_IMAGE_${inviteDetails.inviteLevel}`],
    // @ts-ignore
    placeImageFrame: config.marginLeft[`PLACE_IMAGE_FRAME_${inviteDetails.inviteLevel}`],
    // @ts-ignore
    placeImage: config.marginLeft[`PLACE_IMAGE_${inviteDetails.inviteLevel}`],
    // @ts-ignore
    placeTitle: config.marginLeft[`PLACE_TITLE_${inviteDetails.inviteLevel}`]
  }
};

export const inviteDetailsPresenter = {
  getPhoneIllustration,
  getPlaceImageFrame,
  getPlaceImage,
  getItemFrame,
  getItemImage,
  getCoverImage,
  getMarginLeft,
  getAppLogo
};
