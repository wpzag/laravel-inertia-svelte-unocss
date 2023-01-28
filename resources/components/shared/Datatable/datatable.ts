import type { DTHeader, DTPagination, DTProps } from "@/types/DataTableTypes";

export const useDatatable = (
    props: DTProps,
    dispatch: (arg0: string, arg1: DTPagination) => void
) => {
    const reactiveItems = writable(props.items);
    const perPage =
        typeof props.perPage === "string" || typeof props.perPage === "number"
            ? Number(props.perPage)
            : props.perPage?.default ?? 10;
    console.log(perPage);
    const pagination = writable(
        props.pagination ?? {
            page: 1,
            perPage,
            sortBy: "",
            sortDirection: null,
            total: props.items.length,
            from: 1,
            to: 10,
            lastPage: Math.ceil(props.items.length / 10),
        }
    );
    (() => {
        updatePerPage(perPage);
    })();
    const items = derived([pagination, reactiveItems], ($values) => {
        if (props.pagination) return $values[1];
        const [pagination, reactiveItems] = $values;
        const { page, perPage } = pagination;
        const start = (page - 1) * perPage;
        const end = start + perPage;

        const rows = reactiveItems.slice(start, end);
        if (pagination.sortBy && pagination.sortDirection) {
            return rows.sort(
                (a: { [x: string]: number }, b: { [x: string]: number }) => {
                    if (a[pagination.sortBy] > b[pagination.sortBy]) {
                        return pagination.sortDirection === "asc" ? 1 : -1;
                    }
                    if (a[pagination.sortBy] < b[pagination.sortBy]) {
                        return pagination.sortDirection === "asc" ? -1 : 1;
                    }
                    return 0;
                }
            );
        }

        return rows;
    });

    function goToNextPage() {
        pagination.update((pg) => {
            if (pg.page < Math.ceil(pg.total / pg.perPage)) {
                pg.page += 1;
                pg.from = (pg.page - 1) * pg.perPage + 1;
                pg.to = Math.min(pg.total, pg.page * pg.perPage);
                console.log(pg);
                dispatchPaginationUpdated(pg);
            }

            return pg;
        });
    }

    function dispatchPaginationUpdated(pagination: DTPagination) {
        if (props.pagination) {
            dispatch("paginationUpdated", pagination);
        }
    }

    function goToPrevPage() {
        pagination.update((pg) => {
            if (pg.page > 1) {
                pg.page -= 1;
                pg.from = (pg.page - 1) * pg.perPage + 1;
                pg.to = pg.page * pg.perPage;
                dispatchPaginationUpdated(pg);
            }
            return pg;
        });
    }

    function updatePerPage(newPerPage: number) {
        pagination.update((pg) => {
            pg.perPage = newPerPage;
            pg.page = 1;
            pg.from = 1;
            pg.to = Math.min(pg.total, newPerPage);
            pg.lastPage = Math.ceil(pg.total / newPerPage);
            dispatchPaginationUpdated(pg);

            return pg;
        });
    }

    function updateTotal(newTotal: number) {
        pagination.update((pg) => {
            pg.total = newTotal;
            pg.lastPage = Math.ceil(newTotal / pg.perPage);
            return pg;
        });
    }

    const sort = (header: DTHeader) => {
        pagination.update((pg) => {
            if (header.sortable) {
                if (pg.sortBy === header.value) {
                    pg.sortDirection =
                        pg.sortDirection === null
                            ? "desc"
                            : pg.sortDirection === "desc"
                            ? "asc"
                            : null;
                } else {
                    pg.sortBy = header.value;
                    pg.sortDirection = "desc";
                }
            }
            dispatchPaginationUpdated(pg);

            return pg;
        });
    };

    return {
        pagination,
        goToNextPage,
        goToPrevPage,
        updatePerPage,
        sort,
        items,
        reactiveItems,
        updateTotal,
    };
};
