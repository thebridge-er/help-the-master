export default class StorageManager {
    static KEY = "htmDB";

    static load() {
        const data = localStorage.getItem(this.KEY);

        if (!data) {
            const initialData = this.createInitialData();
            this.save(initialData);
            return initialData;
        }

        return JSON.parse(data);
    }
}

export function saveExcuse(excuse) {
    const stored = JSON.parse(localStorage.getItem("excuses")) || [];
    stored.push(excuse);
    localStorage.setItem("excuses", JSON.stringify(stored));
}

export function getExcuses() {
    return JSON.parse(localStorage.getItem("excuses")) || [];
}