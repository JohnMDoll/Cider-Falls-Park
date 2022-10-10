import { getAreas, getServices, getGuests } from "./database.js"
let guests = getGuests()

export const Guests = () => {
    let html = `<aside class=guests><h2>Guests Onsite:</h2><ol>`
    for (const guest of guests) {
        html += `<li class="guestListing"><h3>${guest.name}</h3></li>`
    }
    html += "</ol></aside>"
    return html
}


// // this section creates a employee name+sales qty pop-up when product is clicked on
// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target

//         if (itemClicked.class==="areas"){
//             //const areaName = itemClicked.id
//             let areaGuests =[]
//             for (const guest of guests) {
//                 if (guest.area === itemClicked.id){
//                    areaGuests += `${guest.name} \n`


//                     window.alert(`${itemClicked.id} contains the following guests: \n ${areaGuests}`)
                    
//                 }
//             }
//         }
//     }
// )