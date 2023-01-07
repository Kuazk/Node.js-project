const {parse} = require('csv-parse');
const fs = require('fs');
const path = require('path')

const wearablePlanets = []

function loadPlanetsData() {
    return new Promise((resolve,reject) => {
        const stream = fs.createReadStream(path.join(__dirname,'../../data/kepler_data.csv'))
        .pipe(parse({
            comment: '#',
            columns: true,
        }));

        ;

        stream.on('data', (data) => {
        if (isHabitablePlanet(data)) {
            wearablePlanets.push(data);
        }
        });

        stream.on('error', (err) => {
        console.log('error', err);
        reject(err)
        });

        stream.on('end', () => {
        console.log('done');
        resolve()
        });
    })    

}

function isHabitablePlanet(planet) {
  return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
}

module.exports ={
    loadPlanetsData,
    planets: wearablePlanets,
}
