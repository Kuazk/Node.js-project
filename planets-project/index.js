const {parse} = require('csv-parse');
const fs = require('fs');

const stream = fs.createReadStream('kepler_data.csv')
  .pipe(parse({
    comment: '#',
    columns: true,
  }));

const wearablePlanets = [];

stream.on('data', (data) => {
  if (isHabitablePlanet(data)) {
    wearablePlanets.push(data);
  }
});

stream.on('error', (err) => {
  console.log('error', err);
});

stream.on('end', () => {
  console.log(wearablePlanets.map((planet) => {
    return planet['kepler_name'];
  }));
  console.log('done');
});

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}
