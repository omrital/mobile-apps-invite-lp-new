import {GetInviteParams} from "../config/types";
import {http} from "./http";
//import {config} from "../config";

export async function get({businessId, inviteCode, inviteId}: GetInviteParams) {

//   const param = `code=${inviteCode}`;
//   const url = `${config.api.getInviteDetails}?${param}`;
//   return http.get(url);

  return http.get(`http://localhost:8080/inviteDetails/${inviteCode}`);
}

export const inviteDetailsService = {
  get
};
