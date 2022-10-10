const database ={
    areas: [{
        id: 1,
        name: "Lodge"
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail"
    },{
        id: 3,
        name: "Chamfort River"
    }, {
        id: 4,
        name: "Gander River"
    }, {
        id: 5,
        name: "Camprounds"
    }, {
        id: 6,
        name: "Pine Bluffs Trails"
    }],
    services: [{
        id: 1,
        name: "Picnicking",
        area1: true,
        area2: true,
        area3: false,
        area4: false,
        area5: false,
        area6: true,
    },{
        id: 2,
        name: "Lodging",
        area1: true,
        area2: false,
        area3: false,
        area4: false,
        area5: true,
        area6: false,
    }, {
        id: 3,
        name: "Parking",
        area1: true,
        area2: false,
        area3: false,
        area4: false,
        area5: true,
        area6: false,
    }, {
        id: 4,
        name: "Information",
        area1: true,
        area2: false,
        area3: false,
        area4: false,
        area5: true,
        area6: false,
    }, {
        id: 5,
        name: "Hiking",
        area1: false,
        area2: true,
        area3: false,
        area4: true,
        area5: false,
        area6: true,
    }, {
        id: 6,
        name: "Rock Climbing",
        area1: false,
        area2: true,
        area3: false,
        area4: false,
        area5: false,
        area6: false,
    }, {
        id: 7,
        name: "Rafting",
        area1: false,
        area2: false,
        area3: true,
        area4: false,
        area5: false,
        area6: false,
    }, {
        id: 8,
        name: "Canoeing",
        area1: false,
        area2: false,
        area3: true,
        area4: false,
        area5: false,
        area6: false,
    }, {
        id: 9,
        name: "Fishing",
        area1: false,
        area2: false,
        area3: true,
        area4: true,
        area5: false,
        area6: false,
    }, {
        id: 10,
        name: "Zip Lining",
        area1: false,
        area2: false,
        area3: false,
        area4: false,
        area5: false,
        area6: true
    }],
    guests: [{
        id: 1,
        name: "Human 1",
        area: "Lodge"
    },{
        id: 2,
        name: "Human 2",
        area: "Chamfort River"
    },{
        id: 3,
        name: "Human 3",
        area: "Lodge"
    },{
        id: 4,
        name: "Human 4",
        area: "Lost Wolf Hiking Trail"
    },{
        id: 5,
        name: "Human 5",
        area: "Gander River"
    },{
        id: 6,
        name: "Human 6",
        area: "Pine Bluff Trails"
    },{
        id: 7,
        name: "Human 7",
        area: "Campground"
    },{
        id: 8,
        name: "Leroy Jenkins",
        area: "51"
    }]
}

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}
export const getServices = () => {
    return database.services.map(service => ({...service}))
}
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}