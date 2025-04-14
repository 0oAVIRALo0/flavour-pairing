export interface Ingredient {
  id: string;
  name: string;
  category: string;
  molecules: Molecule[];
  pairings: string[];
}

export interface Molecule {
  id: string;
  name: string;
  formula: string;
  structure: string; // PDB or MOL format
}

export interface GraphData {
  nodes: Array<{
    id: string;
    name: string;
    val: number;
  }>;
  links: Array<{
    source: string;
    target: string;
    value: number;
  }>;
}