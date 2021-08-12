
// A constructor for creating new review.
// This will accept the person name, profession, the image url and its reviews.
function Review(personName, profession, imgURL, reviewContent) {

    this.personName = personName;
    this.profession = profession;
    this.imgURL = imgURL;
    this.reviewContent = reviewContent;
    // This function will store this object or this new person to the local storage
    this.store = function() {

        let w = window.localStorage;
        w.setItem(this.personName, JSON.stringify(this));
    }
}


document.addEventListener('DOMContentLoaded', function() {

let review1 = new Review('Adrian Marcelo', 'Software & Web Developer', '\/Project Review Carousel\/Photos\/Nads2.jpg', 'Wow! This app is really good. It makes my programming journey at ease. It has a lot of features and functionalities. I cannot wait to show this to my fiance that works on Google.');

let review2 = new Review('RK Suloshky', 'Data Analyst', '\/Project Review Carousel\/Photos\/RC.jpg', 'This app is really good! Even when I am biking, I can still access my pending projects even if I am on distant places. My work is really efficient especially when collaborating to my workteams.');

let review3 = new Review('Lena Prathamkemesh', 'Database Administrator', '\/Project Review Carousel\/Photos\/Lenard.jpg', 'Collaborating during this time of pandemic is really hard, but this app makes it possible. My teammates and I can collaborate easily. Good for team version controls and helped to my Architecture Side Projects!');

let review4 = new Review('Yan Dikalovesky', 'Web Designer and Tech Specialist', '\/Project Review Carousel\/Photos\/Alyana.jpg', 'Doing a complex projects and maintaining it is crucial! But this app makes it even possible. It has a great version control and has a lot of features! It is even great to explore more in programming.')

let review5 = new Review('Rac Ontolokova', 'Certified Public Accountant', '\/Project Review Carousel\/Photos\/Rachel.jpg', 'This app really helps on my accounting journey! It is efficient and easy to use for solving accounting problems. It is very easy to determine the accounts title on my journal entry.')

let review6 = new Review('Dicks Atendokolova', 'Game Developer', '\/Project Review Carousel\/Photos\/Dicky.jpg', 'This app makes my project easy to maintain because of the beautiful version controls! It is easy to communicate to my other work colleagues and commit to other meetings. This is a great app!')

let review7 = new Review('MyGF Kamarvoshky', 'Software Engineer', '\/Project Review Carousel\/Photos\/Love.jpg', 'This app is great! It makes me fall inlove with you. We created a lots of software, and this app helps us to communicate everyday until we fall inlove to each other. I love you!')

let review8 = new Review('Latino Kamashova', 'Web Developer', '\/Project Review Carousel\/Photos\/Benzer.jpg', 'Cool! This app makes my work productive. It also enhance my skills in programming and web development. It is also have a good version control. I wanna build the next Facebook!')

let review9 = new Review('Anya Ekaterina', 'Mechanical Engineer', '\/Project Review Carousel\/Photos\/Diana May.jpg', 'Wow! This app is great! It helped me to my homeworks and especially for organizing my tasks. It also have a good UI and also a user-friendly app!')

    window.localStorage.clear();
    review1.store();
    review2.store();
    review3.store();
    review4.store();
    review5.store();
    review6.store();
    review7.store();
    review8.store();
    review9.store();
});