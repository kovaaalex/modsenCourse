interface ICollection<T> {
    items: T[];
    add(item: T): void;
    remove(index: number): void;
    getItem(index: number): T | undefined;
}
class Collection<T> implements ICollection<T> {
    private _items: T[] = [];
    constructor(items: T[] = []) {
        this._items = [...items];
    }
    get items(): T[] {
        return [...this._items];
    }
    add(item: T): void {
        this._items.push(item);
    }
    remove(index: number): void {
        if (index >= 0) {
            this._items.splice(index, 1);
        }
    }
    getItem(index: number): T | undefined {
        return this._items[index];
    }
}
const arr = new Collection<number>([2,3,4]);
console.log(arr.items);