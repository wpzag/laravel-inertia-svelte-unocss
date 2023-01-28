export const useHeadersResizing = () => {
    const table: HTMLTableElement | null = document.querySelector("table");
    const min = 100;
    const columns: { header: HTMLTableCellElement; size: string }[] = [];
    let resizedHeader: HTMLTableCellElement | null;

    const onMouseMove = (e: MouseEvent): void => {
        requestAnimationFrame(() => {
            // Calculate the desired width
            const horizontalScrollOffset: number =
                document.documentElement.scrollLeft;
            const width: number =
                horizontalScrollOffset + e.clientX - resizedHeader!.offsetLeft;

            // Update the column object with the new size value
            const column = columns.find(
                ({ header }) => header === resizedHeader
            );
            column!.size = Math.max(min, width - 76) + "px"; // Enforce our minimum

            columns.forEach((column) => {
                if (column.size.startsWith("minmax")) {
                    column.size = column.header.clientWidth + "px";
                }
            });
            // Update the grid template columns
            table!.style.gridTemplateColumns = columns
                .map(({ header, size }) => size)
                .join(" ");
        });
    };

    const onMouseUp = (): void => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        resizedHeader!.classList.remove("header--being-resized");
        resizedHeader = null;
    };
    const initHeadersStyle = () => {
        const headers = document.querySelectorAll("th");

        headers.forEach((header) => {
            const hederWidth = header.getAttribute("data-width");

            columns.push({
                header,
                size: hederWidth ?? `minmax(${min}px, 1fr)`,
            });
            table!.style.gridTemplateColumns = columns
                .map(({ header, size }) => size)
                .join(" ");
            let handler: HTMLElement | null =
                header?.querySelector(".dt-resize-handle");
            handler?.addEventListener("mousedown", initResize);
        });
    };

    const initResize = (event: MouseEvent): void => {
        let target = event?.target as HTMLElement;
        resizedHeader = target?.parentNode?.parentNode as HTMLTableCellElement;

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        resizedHeader?.classList.add("header--being-resized");
    };

    initHeadersStyle();
};
