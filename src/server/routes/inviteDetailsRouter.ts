import {NextFunction, Request, Response} from 'express-serve-static-core';
import {GetInviteParams, InviteDetails} from "../config/types";
import {http} from '../../services/http';
import {config} from '../config';
import express from 'express';

const router = express.Router();

export async function getInviteDetails({businessId, inviteCode, inviteId}: GetInviteParams): Promise<InviteDetails | undefined> {
  if (inviteId) {
    return getInviteDetailsById(inviteId);
  } else if (inviteCode) {
    return getInviteDetailsByCode(inviteCode);
  } else if (businessId) {
    return getInviteDetailsByBusinessId(businessId);
  }
  return undefined;
}

function getInviteDetailsById(inviteId: string): Promise<InviteDetails> {
  const param = `link_id=${inviteId}`;
  const url = `${config.api.external.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteDetailsByCode(inviteCode: string): Promise<InviteDetails> {
  const param = `code=${inviteCode}`;
  const url = `${config.api.external.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteDetailsByBusinessId(businessId: string): Promise<InviteDetails> {
  const url = config.api.external.getPlacesJoinDetails;
  const body = {businessIds: [businessId]};
  return http.post(url, {}, body);
}

router.get('/inviteDetails/:inviteCode', (req: Request, res: Response, next: NextFunction) => {
  const inviteCode = req.params.inviteCode;

  getInviteDetails({inviteCode})
    .then((data) => {
    res.status(200).json(data);
  }).catch((error) => {
    next(error);
  });
});

export const inviteDetailsRouter = router;
