const { spec } = require('pactum');



it('As a user I want to search for a specific person in Starwars movies', async () => {
    await spec()

    .get('https://swapi.dev/api/people/5')
    .withJson({name: 'Leia Organa', mass: '49'})
    .expectStatus(200);
});

