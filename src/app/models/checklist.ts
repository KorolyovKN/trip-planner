import { ItemChecked } from './item-checked';


class ItemsList {
  itemContent: string;
  itemChecked: ItemChecked;
}
export class Checklist {
  _id: string;
  planId: string;
  title: string;
  listCategory: string;
  items: ItemsList[];
}
