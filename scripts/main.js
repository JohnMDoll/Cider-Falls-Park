
// I figured out how to split the area# from 
// services to match it with area.id's for use
// with HTML service list population

// let steve = "area1"
// let [,areaIdInServices]=steve.split("area")
// console.log(parseInt(areaIdInServices))

// let jobe = "area" + 1
// console.log(jobe)

import { Areas } from "./areas.js"
import { Guests } from "./guests.js"
// import { Services } from "./services.js"
const areaContainer = document.querySelector(".areaContainer")
    let areaFiller = Areas()
areaContainer.innerHTML = areaFiller
const guestContainer = document.querySelector(".guestContainer")
    let guestFiller = Guests()
guestContainer.innerHTML = guestFiller
// const serviceContainer = document.querySelector(".serviceContainer")
//     let serviceFiller = services()
// serviceContainer.innerHTML = serviceFiller

