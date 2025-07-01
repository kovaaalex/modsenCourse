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
//2
type BooleanOrString<T> = T extends boolean ? boolean : string;
const bool = true;
const str = "hello";
//3
type ValueType<T, K extends keyof T>= T[K];
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

type NameType = ValueType<User, 'name'>;