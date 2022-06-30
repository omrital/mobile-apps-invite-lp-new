export const config = {
  api: {
    external: {
      getInviteDetails: 'https://apps.wix.com/clubs/api/v1/invites/details',
      getPlacesJoinDetails: 'https://apps.wix.com/clubs/api/v1/business/join/details'
    },
    internal: {
      getInviteDetails: 'http://localhost:8080/inviteDetails',
    }
  }
};
