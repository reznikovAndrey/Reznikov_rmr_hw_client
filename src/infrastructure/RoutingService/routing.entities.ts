enum RoutingEnum {
  root,
  content,
  login,
  profile,
  notFound,
}

type RoutingKeys = keyof typeof RoutingEnum;

export type Routing = {
  [index in RoutingKeys]: () => string;
};
