const { mock, settings } = require('pactum');

beforeEach(async () => {

    settings.setLogLevel('ERROR');

    await mock.start(9876);
});

afterEach(async () => {

  await mock.stop()
});

function addHelloWorldResponse() {

  mock.addInteraction({
    request: {
      method: 'GET',
      path: '/api/starships/9'
    },
    response: {
      status: 200,
      body: [
          {
              name: "Death Star",
              model: "DS-1 Orbital Battle Station",
              manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
              cost_in_credits: "1000000000000",
              length: "120000",
              max_atmosphering_speed: "n/a",
              crew: "342,953",
              passengers: "843,342",
              cargo_capacity: "1000000000000",
              consumables: "3 years",
              hyperdrive_rating: "4.0",
              MGLT: "10",
              starship_class: "Deep Space Mobile Battlestation",
              pilots: [],
              films: [
                  "https://swapi.dev/api/films/1/"
              ],
              created: "2014-12-10T16:36:50.509000Z",
              edited: "2014-12-20T21:26:24.783000Z",
              url: "https://swapi.dev/api/starships/9/"
          }
      ]
    }
  });
}

const pactum = require('pactum');

describe('Demonstrating that Pactum API mocking can', () => {

    it('return a basic REST response', async () => {

        addHelloWorldResponse();

        await pactum.spec()
            .get('http://localhost:9876/api/starships/9')
            .expectStatus(200)
            .expectBodyContains('MGLT', '10')
            .expectBodyContains('cargo_capacity','1000000000000')
    });
});