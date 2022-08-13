enum RoutingEnum {
  root,
  content,
  login,
  profile,
  notFound,
}

type RoutingKeys = keyof typeof RoutingEnum;

export type RoutingType = {
  [index in RoutingKeys]: () => string;
};
