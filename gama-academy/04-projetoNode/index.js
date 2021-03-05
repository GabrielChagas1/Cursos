const fetch = require('node-fetch')

function getPerson(id){
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(response => response.json())
        .then(person => {
            const homeUrl = person.homeworld
            const films = person.films;
            const vehicles = person.vehicles;
            const starships = person.starships;

            fetch(homeUrl)
                .then(response => response.json())
                .then(world => {
                    person.homeworld = world.name
                });

                Promise.all(films.map(url =>
                    fetch(url).then(response => response.json())
                 )).then(data => {
                   data.forEach((films, index ) => person.films[index] = films.title);
                   Promise.all(vehicles.map(url =>
                        fetch(url).then(response => response.json())
                    )).then(data => {
                        data.forEach((vehicles, index ) => person.vehicles[index] = vehicles.name);
                        Promise.all(starships.map(url =>
                            fetch(url).then(response => response.json())
                         )).then(data => {
                           data.forEach((starships, index ) => person.starships[index] = starships.name);
                           console.log(person)
                         })
                    })
                 })     
        })
        .catch(err => console.log(err))
}


getPerson(1)
