class Human {
    // properties
    age = 13;        // public member
    #weight = 80;     // private member
    height = 180;

    constructor(newage, newWeight, newHeight){
        this.age = newage;
        this.#weight = newWeight;
        this.Height = newHeight;
    }



    // behavior
    walking(){
        console.log("I am Walking with weight",this.#weight);
    }

    #running(){
        console.log("I am Running");
    }

    // getter
    get fetchWeight(){
        return this.#weight
    }

    // setter
    set modifyWeight(val){
        this.#weight = val
    }
}

let obj = new Human(50, 75, 100);
console.log(obj.age);

// // SyntaxError
// console.log(obj.#wight);
console.log(obj.fetchWeight);

obj.walking();

// // running is a private behavior
// // TypeError
// obj.running()

