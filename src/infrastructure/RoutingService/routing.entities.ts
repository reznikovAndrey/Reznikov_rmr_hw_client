enum RoutingEnum {
  root,
  kitty,
  login,
  profile,
  notFound,
  logout,
}

type RoutingKeys = keyof typeof RoutingEnum;

export type Routing = {
  [index in RoutingKeys]: () => string;
};
