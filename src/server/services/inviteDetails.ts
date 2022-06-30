import {GetInviteParams} from '../config/types';
import {config} from '../config';
import {http} from './http';

export async function get({businessId, inviteCode, inviteId}: GetInviteParams) {
  return http.get(`${config.api.internal.getInviteDetails}/${inviteCode}`);
}

export const inviteDetailsService = {
  get
};
