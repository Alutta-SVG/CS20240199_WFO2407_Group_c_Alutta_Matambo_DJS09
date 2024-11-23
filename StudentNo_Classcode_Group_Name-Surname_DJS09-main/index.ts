 // Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number

import { showReviewTotal, populateUser } from './utils';
import { Permissions, LoyaltyUser } from './enums';
import { Price, Country } from './types';
import { Review } from './interfaces';

const propertyContainer = document.querySelector('.properties') as HTMLDivElement | null;
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement | null;
const container = document.querySelector('.container') as HTMLDivElement | null;
const footer = document.querySelector('.footer') as HTMLElement | null;
const button = document.querySelector('button') as HTMLButtonElement | null;

let isLoggedIn: boolean;

const reviews: Review[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: '27-03-2021',
  },
];

const you = {
    
  firstName: 'Bobby',
  lastName: 'Brown',
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}

// Array of Properties
const properties: Property[] = [
  {
    image: 'images/colombia-property.jpg',
    title: 'Colombian Shack',
    price: 45,
    location: {
      firstLine: 'shack 37',
      city: 'Bogota',
      code: 45632,
      country: 'Colombia',
    },
    contact: [+112343823978921, 'marywinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: 'images/poland-property.jpg',
    title: 'Polish Cottage',
    price: 30,
    location: {
      firstLine: 'no 23',
      city: 'Gdansk',
      code: 343903,
      country: 'Poland',
    },
    contact: [+1298239028490830, 'garydavis@hotmail.com'],
    isAvailable: false,
  },
  {
    image: 'images/london-property.jpg',
    title: 'London Flat',
    price: 25,
    location: {
      firstLine: 'flat 15',
      city: 'London',
      code: 'SW4 5XW',
      country: 'United Kingdom',
    },
    contact: [+34829374892553, 'andyluger@aol.com'],
    isAvailable: true,
  },
  {
    
    image: 'images/zoshua-colah-22x-DgOKi7I-unsplash',
    title: 'Malia Hotel',
    price: 35,
    location: {
        firstLine: 'Room 4',
        city: 'Malia',
        code: 45334,
        country: 'Malaysia'
    },
    contact: [ +60349822083, 'lee34@gmail.com'],
    isAvailable: false
  }
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser); // 3 | last reviewed
populateUser(you.isReturning, you.firstName);

let authorityStatus: any;

isLoggedIn = false;

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number) {
  if (authorityStatus) {
    const priceDisplay = document.createElement('div');
    priceDisplay.innerHTML = price.toString() + '/night';
    element.appendChild(priceDisplay);
  }
}

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = properties[i].title;
  const image = document.createElement('img');
  image.setAttribute('src', properties[i].image);
  card.appendChild(image);
  showDetails(you.permissions, card, properties[i].price);
  propertyContainer?.appendChild(card);
}

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array); // Ensure `getTopTwoReviews` is implemented
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement('div');
      card.classList.add('review-card');
      card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
      reviewContainer?.appendChild(card);
    }
    container?.removeChild(button!); // Use non-null assertion as `button` exists here
  }
}

button?.addEventListener('click', () => addReviews(reviews));

// Location
let currentLocation: [string, string, number] = ['London', '11.03', 17];
footer!.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;

class MainProperty {
  src: string;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let yourMainProperty = new MainProperty('images/michael-jasmund-o51enAB_89A-unsplash', 'Main Property', [
  {
    name: 'Olive',
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: '12-04-2021',
  },
]);

const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement | null;
const mainImage = document.createElement('img');
mainImage.setAttribute('src', yourMainProperty.src);
mainImageContainer?.appendChild(mainImage);