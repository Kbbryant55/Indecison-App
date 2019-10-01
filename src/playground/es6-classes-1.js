class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name ;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` There major is ${this.major}.`;
        }
        return description;
        
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomelocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomelocation()){
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Traveler('Kenny Willoughby', 26, 'Bakersfield');
const other = new Student('Kobe Willoughby', 2);
const you = new Student();
console.log(me.getGreeting());
console.log(other.getGreeting());