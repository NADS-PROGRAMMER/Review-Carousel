class Person {

    constructor(name, profession, review) {

        this.name = name;
        this.profession = profession;
        this.review = review;
    }

    getName() {

        return this.name;
    }

    getProfession() {

        return this.profession;
    }

    getReview() {

        return this.review;
    }
}

export default Person;