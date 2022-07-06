import {InviteDetailsApiObject, InviteDetails, SERVICE_TYPE} from '../config/types';
import {config} from '../config';
import _ from 'lodash';

const map = (inviteDetailsApiObject: InviteDetailsApiObject): InviteDetails | undefined => {
  if (!inviteDetailsApiObject) {
    return undefined;
  }
  if (_.isEmpty(inviteDetailsApiObject)) {
    return undefined;
  }
  return {
    businessId: inviteDetailsApiObject.metaSiteId,
    appType: inviteDetailsApiObject.preferredApp,
    placeName: inviteDetailsApiObject.title,
    placeImageUrl: inviteDetailsApiObject.imageUrl,
    coverImageUrl: inviteDetailsApiObject.coverImageUrl,
    itemName: inviteDetailsApiObject.target.name,
    itemDescription: inviteDetailsApiObject.target.description,
    itemImageUrl: undefined, // currently not supported
    inviteLevel: !inviteDetailsApiObject.target.uri ? '1st' : '2nd',
    vertical: getLeadingVertical(inviteDetailsApiObject)
  };
};

const getLeadingVertical = (inviteDetailsApiObject: InviteDetailsApiObject): SERVICE_TYPE | string => {
  if (inviteDetailsApiObject.target.uri) {
    return inviteDetailsApiObject.target.targetType ? inviteDetailsApiObject.target.targetType : config.defaults.verticalFallback;
  }
  const activeApps = _.get(inviteDetailsApiObject, 'joinInformation.activeApps');
  if (!activeApps || _.isEmpty(activeApps)) {
    return config.defaults.verticalFallback;
  }
  _.forEach(config.verticalsPriority, (vertical) => {
    if (activeApps[vertical]) {
      return vertical;
    }
  });
  return config.defaults.verticalFallback;
};

export const inviteDetailsMapper = {
  map
};
