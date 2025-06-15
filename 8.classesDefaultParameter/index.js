class Human {
    // properties
    age = 13;        // public member
    #weight = 80;     // private member
    height = 180;


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

