class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      hash = (hash * WEIRD_PRIME + key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }

  contains(key) {
    let address = this._hash(key);
    if (this.data[address]) {
      for (let idx in this.data[address]) {
        if (this.data[address][idx][0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    if (!this.contains(key)) {
      this.data[address].push([key, value]);
    } else {
      for (let idx in this.data[address]) {
        if (this.data[address][idx][0] === key) {
          this.data[address][idx][1] = value;
        }
      }
    }
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let value in currentBucket) {
        if (currentBucket[value][0] === key) {
          return currentBucket[value][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let idx in this.data) {
      if (this.data[idx]) {
        for (let idx2 in this.data[idx]) {
          keysArray.push(this.data[idx][idx2][0]);
        }
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (let idx in this.data) {
      if (this.data[idx]) {
        for (let idx2 in this.data[idx]) {
          valuesArray.push(this.data[idx][idx2][1]);
        }
      }
    }
    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    for (let idx in this.data) {
      if (this.data[idx]) {
        for (let idx2 in this.data[idx]) {
          entriesArray.push(this.data[idx][idx2]);
        }
      }
    }
    return entriesArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", "red");
myHashTable.set("apples", "red");
myHashTable.set("oranges", "orange");
myHashTable.set("bananas", "yellow");
myHashTable.set("mangoes", "orange");
myHashTable.set("strawberries", "red");
myHashTable.set("blueberries", "blue");
myHashTable.set("blackberries", "black");
myHashTable.set("watermelons", "green");
myHashTable.set("pineapples", "yellow");

myHashTable.set("grapes", "blonde");

console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
console.log(myHashTable.values());
console.log(myHashTable.entries());
