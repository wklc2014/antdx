export interface IHformProps {
  cols?: number;
  configs?: {
    config: any;
    extMap: { [k: string]: any };
  }[];
  formApi?: { [k: string]: any };
  onChange?: ({ id, value }: { id: string; value: any }) => void;
  values?: { [k: string]: any };
}
