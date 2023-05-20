export interface IRoute {
  path: string;
  element: JSX.Element;
  loader?: any;
  lazy?: Promise<JSX.Element>;
  children?: IRoute[];
}
