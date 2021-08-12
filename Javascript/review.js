import Person from './Person.js';
"use strict"

let timeline = gsap.timeline();

let quoteLogo = document.querySelector('#quot-logo');
let image = document.querySelector('#person-photo');
let name = document.querySelector('.person-name');
let profession = document.querySelector('.profession');
let reviewCont = document.querySelector('.content-review');
let index = 0;

const websiteReviews = [

    {
        person: new Person('Nads Marcelo', 'Web Developer', 'This is a good website!'), imageSrc: '\/Images\/Nads2.jpg'
    },
    {
        person: new Person('Alyana Pornelosa', 'Web Designer', 'This is a good website!'), imageSrc: '\/Images\/Alyana.jpg'
    },
    {
        person: new Person('Benzer', 'Web Developer', 'This is a good website!'), imageSrc: '\/Images\/Benzer.jpg'
    },
    {
        person: new Person('Diana May', 'Civil Engineer', 'This is a good website!'), imageSrc: '\/Images\/Diana May.jpg'
    },
    {
        person: new Person('Dicky Atendido', 'Software Engineer', 'This is a good website!'), imageSrc: '\/Images\/Dicky.jpg'
    },
    {
        person: new Person('Lenard Opo', 'Data Analyst', 'This is a good website!'), imageSrc: '\/Images\/Lenard.jpg'
    },
    {
        person: new Person('NIKI', 'Singer/Songwriter', 'This is a good website!'), imageSrc: '\/Images\/Love.jpg'
    },
    {
        person: new Person('Rachel Recto', 'Certified Public Accountant', 'This is a good website!'), imageSrc: '\/Images\/Rachel.jpg'
    },
    {
        person: new Person('RC Suelo', 'System Analyst', 'This is a good website!'), imageSrc: '\/Images\/RC.jpg'
    },
]

document.querySelector('#forward').addEventListener('click', () => {

    index++;
    index = index > websiteReviews.length - 1 ? 0 : index;
    image.src = websiteReviews[index].imageSrc;
    name.textContent = websiteReviews[index].person.getName();
    profession.textContent = websiteReviews[index].person.getProfession();
    reviewCont.textContent = websiteReviews[index].person.getReview();

    if (!timeline.isActive()) {
        timeline.from('#person-photo', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('#quot-logo', {x: "100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
    }
});

document.querySelector('#backward').addEventListener('click', () => {

    index--;
    index = index < 0 ? websiteReviews.length - 1 : index;
    image.src = websiteReviews[index].imageSrc;
    name.textContent = websiteReviews[index].person.getName();
    profession.textContent = websiteReviews[index].person.getProfession();
    reviewCont.textContent = websiteReviews[index].person.getReview();

    if (!timeline.isActive()) {
        timeline.from('#person-photo', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"});
        timeline.from('#quot-logo', {x: "-100%", opacity: 0, duration: .3, ease: "power1.out"}, "-=.3");
    }
});
