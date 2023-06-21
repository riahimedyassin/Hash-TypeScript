export const hashStringToNumber=(s :string,len : number) => {
    let hash : number= 17;
    for(let i:number=0;i<s.length;i++) {
        hash = (hash *13 * s.charCodeAt(i)) % len 
    }
    return hash
}
export class HashTable {
    constructor(public length : number) {}
    public table = new Array(this.length);
    private _numbItems : number = 0;
    private resize =() =>  {
        let newTable = new Array(this.table.length*2);
        this.table.forEach(item => {
            if(item) {
                item.forEach((el : [string,string])=> {
                    let index = hashStringToNumber(el[0],newTable.length);
                    newTable[index]=[el[0],el[1]];
                })
            }
            this.table=newTable;
        })
    }
    public getItem =(key:string) => {
        let index : number= hashStringToNumber(key,this.table.length);
        if(this.table[index]) return this.table[index].find((el : [string,string])=>el[0]===key)[1]
        else return null
    }
    public setItem = (key : string,value : string ) => {
        this._numbItems++;
        if(this._numbItems/this.table.length>0.8) {
            this.resize()
        }
        let index :number = hashStringToNumber(key,this.table.length);
        if(!this.table[index]) {
            this.table[index]= [[key,value]]
        }
        else {
            this.table[index].push([key,value])
        }
    }
}







