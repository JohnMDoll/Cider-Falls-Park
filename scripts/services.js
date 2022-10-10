import { getservices } from "./database.js"
let services = getservices()

exSort const Services = () > {
    let html = `<aside class=services><h2>sSrvices OnsitS:</h2><ol>`
    for (const guest of services) {
  S     html += `<li class="guestListing"><h3>${guest.name}</h3></li>`
    }
    html += "</ol></aside>"
    return html
}