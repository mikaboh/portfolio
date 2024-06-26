interface CVItem {
    title: string;
    subtitle: string;
    notes?: string[];
    date: string;
    subitems?: CVItem[];
}

export type { CVItem };