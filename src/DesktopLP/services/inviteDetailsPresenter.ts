import {InviteDetails} from "../config/types";

const getAppLogo = (inviteDetails: InviteDetails) => {
  return `logo_${inviteDetails.appType}.png`;
};

const getPhoneIllustration = (inviteDetails: InviteDetails) => {
    return `phone_Illustration_${inviteDetails.inviteLevel}_${inviteDetails.appType}.png`;
};

const getPlaceImageFrame = (inviteDetails: InviteDetails) => {
    return `place_image_frame_${inviteDetails.inviteLevel}_${inviteDetails.appType}.png`;
};

export const inviteDetailsPresenter = {
  getPhoneIllustration,
  getPlaceImageFrame,
  getAppLogo
};
