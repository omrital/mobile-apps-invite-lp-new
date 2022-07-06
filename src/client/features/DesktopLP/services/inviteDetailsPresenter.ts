import {InviteDetails, PreferredApp} from '../config/types';
import {config} from '../config';
import {CountryCode, countryCodes} from "../config/countryCodes";
import _ from "lodash";
import {i18n} from "../../../../locale/i18n";

const getMainTitle = (inviteDetails: InviteDetails) => {
  const {inviteLevel, placeName, itemName, vertical} = inviteDetails;
  switch (inviteLevel) {
    case '1st': return i18n('lp.desktop.1st.title', {placeName});
    case '2nd': return i18n(`lp.desktop.2nd.title.${vertical}`, {itemName});
  }
};

const getSubtitle = (inviteDetails: InviteDetails) => {
  const {inviteLevel, itemDescription} = inviteDetails;
  switch (inviteLevel) {
    case '1st': return undefined;
    case '2nd': return itemDescription;
  }
};

const getDescription = (inviteDetails: InviteDetails) => {
  const {inviteLevel, appType, placeName, itemName, vertical} = inviteDetails;
  const appDescription = getPreferredAppDescription(appType);
  switch (inviteLevel) {
    case '1st': return i18n(`lp.desktop.1st.description.${vertical}`, {appDescription, placeName});
    case '2nd': return i18n(`lp.desktop.2nd.description.${vertical}`, {appDescription, placeName, itemName});
  }
};

const getItemIllustrationText = (inviteDetails: InviteDetails) => {
  const {vertical, itemDescription} = inviteDetails;
  return itemDescription ? itemDescription : `lp.desktop.2nd.illustration.text.${vertical}`;
};

const getAppLogo = (inviteDetails: InviteDetails) => {
  const {appType} = inviteDetails;
  const appDescription = getPreferredAppName(appType);
  return `logo_${appDescription}.png`;
};

const getPhoneIllustration = (inviteDetails: InviteDetails) => {
  const {appType, inviteLevel} = inviteDetails;
  const appDescription = getPreferredAppName(appType);
  return `phone_Illustration_${inviteLevel}_${appDescription}.png`;
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
  const {vertical} = inviteDetails;
  return inviteDetails.itemImageUrl ? inviteDetails.itemImageUrl : `item_image_placeholder_${vertical}.png`;
};

const getCountryCodes = () => {
  let countryCodesArray: { id: number; value: string; }[] = [];
  let index = 0;

  _.forEach(countryCodes, function(countryCode: CountryCode) {
    const dialCode = countryCode.dialCode.replace("+", "");
    countryCodesArray.push({id: index, value: dialCode});
    index ++;
  });
  return countryCodesArray;
};

const getMarginLeft = (inviteDetails: InviteDetails) => {
  const {inviteLevel} = inviteDetails;
  return {
    // @ts-ignore
    coverImage: config.marginLeft[`COVER_IMAGE_${inviteLevel}`],
    // @ts-ignore
    placeImageFrame: config.marginLeft[`PLACE_IMAGE_FRAME_${inviteLevel}`],
    // @ts-ignore
    placeImage: config.marginLeft[`PLACE_IMAGE_${inviteLevel}`],
    // @ts-ignore
    placeTitle: config.marginLeft[`PLACE_TITLE_${inviteLevel}`]
  }
};

const getPreferredAppDescription = (preferredApp: PreferredApp) => {
  switch (preferredApp) {
    case 'WixFitnessApp': return 'Fit by Wix';
    case 'WixRestaurantsApp': return 'Dine by Wix';
    case 'WixBrandedApp': return '';
    case 'WixAdminApp': return 'Wix Owner';
    default: return 'Spaces by Wix';
  }
};

const getPreferredAppName = (preferredApp: PreferredApp) => {
  switch (preferredApp) {
    case 'WixFitnessApp': return 'fit';
    case 'WixRestaurantsApp': return 'dine';
    case 'WixBrandedApp': return '';
    case 'WixAdminApp': return 'owner';
    default: return 'spaces';
  }
};

export const inviteDetailsPresenter = {
  getMainTitle,
  getSubtitle,
  getDescription,
  getItemIllustrationText,
  getCountryCodes,
  getPhoneIllustration,
  getPlaceImageFrame,
  getPlaceImage,
  getItemFrame,
  getItemImage,
  getCoverImage,
  getMarginLeft,
  getAppLogo
};
