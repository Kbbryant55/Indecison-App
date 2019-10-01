//arugments  object no longer bound

const add =  (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1,1001));

//this keyword no longer bound

const user = {
    name: 'Kenny',
    cities: ['Bakersfield', 'Santa Cruz', 'New York', 'D.C'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
        // this.cities.forEach((city)=> {
        //     console.log(this.name + ' has lived in ' + city)
        // });
    }
};


console.log(user.printPlacesLived());


const multiplier = {
    nums : [1,2,3,4,5,6],
    multiplyBy: 10,
    multiply(){
        return this.nums.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());