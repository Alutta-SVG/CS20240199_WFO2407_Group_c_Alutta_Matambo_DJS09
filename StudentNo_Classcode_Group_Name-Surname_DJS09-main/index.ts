 // Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number

import { showReviewTotal, populateUser } from './utils'
import { Permissions, LoyaltyUser} from './enums'
import { Price, Country } from './types'
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const footer = document.querySelector('.footer')
const button = document.querySelector('button')

let isLoggedIn: boolean

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}



const reviews : Review [] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
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

let authorityStatus : any

isLoggedIn = false

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

//add the properties 
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image =  document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer?.appendChild(card)
}

let count = 0
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

 //location
let currentLocation =['Cape town','15:36', 17]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

