interface IAccordionItem {
  id: string;
  title: string;
  content: string;
}

interface IAccordion {
  items: IAccordionItem[];
  customClass?: string;
}

export type { IAccordion, IAccordionItem };
