 // Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number

import { showReviewTotal, populateUser } from './utils'
import { Permissions } from './enums'
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
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
//user
const you = {

    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
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
    contact: [number, string];
    isAvailable: boolean;
} [] = [
    {
       image: 'michael-jasmund-o51enAB_89A-unsplash',
       title: 'Columbian Shack',
       price: 45,
       location: {
        firstLine: '123 Main St',
        city: 'New York',
        code: 10001,
        country: 'USA',
    },
    contact: [+1123495082908,'marywinkle@gmail.com'],
    isAvailable: true
},
{
    image: 'images/hugo-richard-_fAesnpmWVo-unsplash',
    title: 'Polish Cottage',
    price: 34,
    location: {
     firstLine: 'No 23',
     city: 'Gdansk',
     code: 343903,
     country: 'Poland',
 },
 contact: [+1123495082908,'garydavis@hotmail.com'],
 isAvailable: false
},
{
    image: 'images/deric-MnOFq6BeGFc-unsplash',
    title: 'London Flat',
    price: 23,
    location: {
     firstLine: 'Flat 15',
     city: 'London',
     code:  35422,
     country: 'United kingdom',
 },
 contact: [+1123495082908,'andylugar@aol.com'],
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

 //location
let currentLocation =['Cape town','15:36', 17]
footer.innerHTML = currentLocation[0] +''+ currentLocation[1]+

