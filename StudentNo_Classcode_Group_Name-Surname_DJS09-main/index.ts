 // Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const propertyContainer = document.querySelector('.properties')
import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

const reviews :{
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] =[
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    firstName : string;
    lastName : string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}
//properties
const properties : {
    image: string;
    title: string;
    price: number;
    location:{
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
} [] = [
    {
       image: '',
       title: 'Columbian Shack',
       price: 45,
       location: {
        firstLine: '123 Main St',
        city: 'New York',
        code: 10001,
        country: 'USA',
    },
    contact: 'marywinkle@gmail.com',
    isAvailable: true
},
{
    image: '',
    title: 'Polish Cottage',
    price: 34,
    location: {
     firstLine: 'No 23',
     city: 'Gdansk',
     code: 343903,
     country: 'Poland',
 },
 contact: 'garydavis@hotmail.com',
 isAvailable: false
},
{
    image: '',
    title: 'London Flat',
    price: 23,
    location: {
     firstLine: 'Flat 15',
     city: 'London',
     code:  35422,
     country: 'United kingdom',
 },
 contact: 'andylugar@aol.com',
 isAvailable: true
},
]

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser) // 3 | last reviewed

populateUser(you.isReturning, you.firstName)

//add the properties 
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image =  document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer?.appendChild(card)
}

