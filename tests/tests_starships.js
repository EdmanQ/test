const { spec } = require('pactum');



it('As a user I want to search for a specific starship in Starwars movies', async () => {
    await spec()
        .get('https://swapi.dev/api/starships/9')
        .expectStatus(200);
});

