var nameVar = 'Kenny';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Morris';
console.log('nameConst', nameConst);

function getPetName(){
    let petName = 'Kobe';
    return petName;
}

const petName = getPetName();
console.log(petName)

let fullName = "Kenny Willoughby";

const firstName = (fullName) => fullName.split(' ')[0];

console.log(firstName());