class test {
    constructor() {
        this.name = 'Jai'
    }

    printName = () => {
        console.log(this.name)
    }
}

class test1 extends test {
    gender = 'male'
    name = 'Naveen'

    printGender = () => {
        console.log(this.gender)
    }
}

const jai = new test1();
jai.printName()