export type PreferredApp = 'WixOneApp' | 'WixAdminApp' | 'WixFitnessApp' | 'WixRestaurantsApp' | 'WixBrandedApp' | string;

export type InviteLevel = '1st' | '2nd';

export type InviteDetails = {
  businessId: string,
  appType: PreferredApp,
  placeName: string,
  placeImageUrl: string | undefined,
  coverImageUrl: string | undefined,
  itemName: string | undefined,
  itemDescription: string | undefined,
  itemImageUrl: string | undefined,
  inviteLevel: InviteLevel,
  vertical: SERVICE_TYPE | string
}

export interface InviteDetailsApiObject {
  metaSiteId: string;
  target: Target;
  url: string;
  code: string;
  title: string;
  imageUrl: string;
  owner: Owner;
  joinInformation: JoinInformation;
  primaryColor: string;
  coverImageUrl: string;
  linkId: string;
  preferredApp: PreferredApp;
}

export interface ActiveApps {
  coupons: object;
  invoices: object;
  newBlog: object;
  wixForms: object;
  inbox: object;
  promote: object;
  stores: object;
  ecomPlatform: object;
  facebookAds: object;
  shoutout: object;
  tasks: object;
  membersList: object;
  cashier: object;
  events: object;
  visitors: object;
  subscriptions: object;
  business: object;
  bookings: object;
  bookmarks: object;
  hotels: object;
  blog: object;
  comments: object;
  clubs: object;
  video: object;
  forum: object;
  groups: object;
  memberships: object;
  membersArea: object;
  proGallery: object;
  pages: object;
  achievements: object;
  restaurantsOrders: object;
  restaurantsReservations: object;
  restaurantsMenus: object;
  loyalty: object;
  collections: object;
  addresses: object;
  tableReservations: object;
  reviews: object;
  liveVideo: object;
  contentManager: object;
}

export interface JoinInformation {
  siteMembersInstanceId: string;
  joinPermissions: string;
  activeApps: ActiveApps;
}

export interface Target {
  uri: string;
  mediaId: string;
  name: string;
  description: string;
  targetType: SERVICE_TYPE;
  properties: Properties;
}

export interface Owner {
  name: string;
  profileImageUrl: string;
}

export interface Properties {}

export enum SERVICE_TYPE {
  BUSINESS = 'business',
  BOOKINGS = 'bookings',
  BOOKMARKS = 'bookmarks',
  STORES = 'stores',
  HOTELS = 'hotels',
  BLOG = 'blog',
  INVOICES = 'invoices',
  COMMENTS = 'comments',
  CLUBS = 'clubs',
  INBOX = 'inbox',
  VISITORS = 'visitors',
  PROMOTE = 'promote',
  EVENTS = 'events',
  VIDEO = 'video',
  FORUM = 'forum',
  GROUPS = 'groups',
  NEW_BLOG = 'newBlog',
  MEMBERSHIPS = 'memberships',
  SUBSCRIPTIONS = 'subscriptions',
  MEMBERS_AREA = 'membersArea',
  MEMBERS_LIST = 'membersList',
  TASKS = 'tasks',
  PRO_GALLERY = 'proGallery',
  PAGES = 'pages',
  ACHIEVEMENTS = 'achievements',
  RESTAURANTS_ORDERS = 'restaurantsOrders',
  RESTAURANTS_RESERVATIONS = 'restaurantsReservations',
  RESTAURANTS_MENUS = 'restaurantsMenus',
  LOYALTY = 'loyalty',
  COUPONS = 'coupons',
  COLLECTIONS = 'collections',
  ADDRESSES = 'addresses',
  TABLE_RESERVATIONS = 'tableReservations',
  ECOM_PLATFORM = 'ecomPlatform',
  REVIEWS = 'reviews',
  LIVE_VIDEO = 'liveVideo',
  WIX_FORMS = 'wixForms',
  CONTENT_MANAGER = 'contentManager',
}
