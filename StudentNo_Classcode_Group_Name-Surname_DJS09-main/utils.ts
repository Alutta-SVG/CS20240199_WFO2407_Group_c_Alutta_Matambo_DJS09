const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
import { LoyaltyUser } from "./enums"
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER? '⭐' : ''
    reviewTotalDisplay?.innerHTML = 'review total' + CSSMathValue.toString() + '| last reviewed by'
    reviewer + '' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string) {
    if (isReturning) { 
        returningUserDisplay.innerHTML = 'back'
}
userNameDisplay.innerHTML = userName
}
 