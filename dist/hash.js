export const hashStringToNumber = (s, len) => {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = (hash * 13 * s.charCodeAt(i)) % len;
    }
    return hash;
};
export class HashTable {
    constructor(length) {
        this.length = length;
        this.table = new Array(this.length);
        this._numbItems = 0;
        this.resize = () => {
            let newTable = new Array(this.table.length * 2);
            this.table.forEach(item => {
                if (item) {
                    item.forEach((el) => {
                        let index = hashStringToNumber(el[0], newTable.length);
                        newTable[index] = [el[0], el[1]];
                    });
                }
                this.table = newTable;
            });
        };
        this.getItem = (key) => {
            let index = hashStringToNumber(key, this.table.length);
            if (this.table[index])
                return this.table[index].find((el) => el[0] === key)[1];
            else
                return null;
        };
        this.setItem = (key, value) => {
            this._numbItems++;
            if (this._numbItems / this.table.length > 0.8) {
                this.resize();
            }
            let index = hashStringToNumber(key, this.table.length);
            if (!this.table[index]) {
                this.table[index] = [[key, value]];
            }
            else {
                this.table[index].push([key, value]);
            }
        };
    }
}
