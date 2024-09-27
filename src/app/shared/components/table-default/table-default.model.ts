
type actionType = 'edit' | 'delete' | 'view'
export interface columnModel {
  prop: string;
  title: string;
  // action?: actionType[];
}
