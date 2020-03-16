export interface NavItem {
  displayName: string;
  children?: NavItem[];
  route?: string;
}
