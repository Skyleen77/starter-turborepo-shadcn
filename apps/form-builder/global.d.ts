interface ElementDraggable {
  title: string;
  icon: LucideIcon;
  children: Element[];
}

interface Layout {
  type: string;
  id?: string;
  elements?: Element[];
}

interface Element {
  type: string;
  id?: string;
  inputType?: string;
  label?: string;
  placeholder?: string;
  style?: any;
}

interface LayoutComponentProps {
  id: string;
  selected: boolean;
  onClick: () => void;
}
