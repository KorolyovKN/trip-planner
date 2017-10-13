import { ItemChecked } from './item-checked';


class ItemsList {
  itemContent: string;
  itemChecked: ItemChecked;
}
export class Checklist {
  planId: string;
  title: string;
  listCategory: string;
  items: ItemsList[];
}
