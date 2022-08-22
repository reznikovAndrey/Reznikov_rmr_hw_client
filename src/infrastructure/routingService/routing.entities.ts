enum RoutingEnum {
  ROOT,
  KITTY,
  LOGIN,
  PROFILE,
  NOT_FOUND,
  LOGOUT,
}

type RoutingKeys = keyof typeof RoutingEnum;

export type Routing = {
  [index in RoutingKeys]: string;
};
