 // Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
let isOpen: boolean

const reviews = [
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

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay?.innerHTML = 'review total' + CSSMathValue.toString() + '| last reviewed by'
    reviewer + '' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser) // 3 | last reviewed

const you: {
    firstName : string;
    lastName : string;
    isReturning: boolean;
    age: number;
}
