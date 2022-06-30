import {NextFunction, Request, Response} from 'express-serve-static-core';
import express from 'express';
import {GetInviteParams, InviteDetails} from "../config/types";
import {config} from "../config";
import {http} from "../services/http";
//import fetch from 'node-fetch';

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
  const url = `${config.api.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteDetailsByCode(inviteCode: string): Promise<InviteDetails> {
  const param = `code=${inviteCode}`;
  const url = `${config.api.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteDetailsByBusinessId(businessId: string): Promise<InviteDetails> {
  const url = config.api.getPlacesJoinDetails;
  const body = {businessIds: [businessId]};
  return http.post(url, {}, body);
}

router.get('/inviteDetails/:inviteCode', (req: Request, res: Response, next: NextFunction) => {
  const inviteCode = req.params.inviteCode;

   const param = `code=${inviteCode}`;
//   const url = `${config.api.getInviteDetails}?${param}`;
   const url = `www.google.com`;


   http.get(url).then((data) => {
//  fetch('https://google.com').then((data) => {
     res.status(200).json(data);

   }).catch((error) => {
     console.log('OMRI', error);
     next(error);
   });


   
//  getInviteDetails({inviteCode})
//    .then((data) => {
//    res.status(200).json(data);
//  }).catch((error) => {
//    next(error);
//  });


//  const param = `code=${inviteCode}`;
//  const url = `${config.api.getInviteDetails}?${param}`;
//
//  res.status(200).json({url: url});
});

export const inviteDetailsRouter = router;
