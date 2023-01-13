export function useInput({ name, label }: { name: string; label: string }) {
    let computedLabel =
        label ??
        name
            ?.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())
            .replace(/[-_]+(.)/g, (_, c) => " " + c.toUpperCase());
    let computedName = name ?? label?.replace(/ /g, "_").toLowerCase();
    let id = Math.random().toString(36).substr(2, 9);

    return { computedName, computedLabel, id };
}
