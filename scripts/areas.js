import { getAreas } from "./database.js";
import { getServices} from "./database.js"
let areas = getAreas()
let services = getServices()
// this bit reformats objects properties to compare between area and services
const realArea = (area,serviceArea) =>{ 
    let servicedArea="area"+area.id
    if (serviceArea[servicedArea] === true){
    return true} else { return false}

//let [,areaIdInServices]=steve.split("area")
//console.log(parseInt(areaIdInServices))
}
export const Areas = () =>{
    let html = ``
    for (const area of areas){
        html += `<section class="areas" id=${area.name}><h2>${area.name}</h2><div><h3>Available Services:</h3></div><ul>`
        for (const service of services){
            let areaCheck = realArea(area,service)
        if (areaCheck){ 
            html +=`<li class=area_service><h4>${service.name}</h4></li>`
            }
        
        }

        html += "</ul></section>"
    }
    return html
}


