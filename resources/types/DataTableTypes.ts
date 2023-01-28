import { Writable } from "svelte/store";

export type DTProps = {
    headers: DTHeader[];
    items: any[];
    noWrap?: boolean;
    loading?: boolean;
    headersDraggable?: boolean;
    headersResizable?: boolean;
    pagination?: DTPagination;
    perPage?: string | number | { default?: number; options: number[] };
};
export type DTPagination = {
    page: number;
    from: number;
    to: number;
    total: number;
    perPage: number;
    sortBy: string;
    sortDirection: "asc" | "desc" | null;
    lastPage: number;
};

export type DTHeader = {
    label: string;
    value: string;
    sortable?: boolean;
    width?: string;
    align?: "left" | "center" | "right";
    format?: (value: any) => string;
};

export interface DTProvider {
    props: DTProps;
    items: any[];
    headers: DTHeader[];
    pagination: DTPagination;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    updateTotal: (total: number) => void;
    reactiveItems: Writable<[]>;
    updatePerPage: (newItemsPerPage: number) => void;
    sort: (header: DTHeader) => void;
}
