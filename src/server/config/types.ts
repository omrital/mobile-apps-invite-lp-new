export interface InviteDetails {
  metaSiteId: string;
  target: InviteTarget;
  url: string;
  code: string;
  title: string;
  imageUrl: string;
  owner: Owner;
  joinInformation: JoinInformation;
  primaryColor?: string;
}

export interface JoinInformation {
  siteMembersInstanceId: string;
  joinPermissions: string;
  activeApps: object;
}

export interface Owner {
  name: string;
  profileImageUrl: string;
}

export interface InviteTarget {
  uri: string;
  mediaId: string;
  name?: string;
  description?: string;
  targetType?: string;
  properties: object;
}

export interface GetInviteParams {
  inviteId?: string;
  inviteCode?: string;
  businessId?: string;
}
