import {GetInviteParams} from '../../../../server/config/types';
import {inviteDetailsMapper} from './inviteDetailsMapper';
import {InviteDetails} from '../config/types';
import {config} from '../../../../server/config';
import {http} from '../../../../services/http';

export async function get({businessId, inviteCode, inviteId}: GetInviteParams): Promise<InviteDetails | undefined> {
  const inviteDetailsApiObject = await http.get(`${config.api.internal.getInviteDetails}/${inviteCode}`);
  return inviteDetailsMapper.map(inviteDetailsApiObject);
}

export const inviteDetailsService = {
  get
};
