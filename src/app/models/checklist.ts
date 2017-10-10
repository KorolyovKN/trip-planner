type ItemChecked =
  | 'prepeared'
  | 'checkd'
  | 'in bag';


class ItemsList {
  itemContent: string;
  itemDone: boolean;
  itemChecked: ItemChecked;
}
export class Checklist {
  planId: string;
  title: string;
  listCategory: string;
  items: ItemsList[];
}
