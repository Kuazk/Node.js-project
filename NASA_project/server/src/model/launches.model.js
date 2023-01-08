const launches = new Map();
let flightNumberTack = 100
const launch = {
    flightNumber: 100,
    mission: 'Kepler exploration x',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    destination: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);


function getAllLaunches() {
    return Array.from(launches.values());
}

function addLaunch(launch) {
    try {
        const isValidDate = (date) => !isNaN(Date.parse(date));
        if(isValidDate(launch.launchDate)){
            launch.launchDate = new Date(launch.launchDate)
        } else{
            launch.launchDate = ''
        }
        if (!launch || !launch.mission || !launch.launchDate
            || !launch.rocket
            || !launch.target) {
                throw new Error('missing data')
            }
        flightNumberTack ++,
        launches.set(flightNumberTack,
            Object.assign(launch,{
                destination: launch.target,
                flightNumber: flightNumberTack,
                customers: ['ZTM', 'NASA'],
                upcoming: true,
                success: true,
            }))
        
        return 1
    }catch(err){
        console.log(launch)
        return 0
    }
    
}

function deleteLaunch(id){

    return launches.delete(Number(id))
        
    
}

module.exports = {
    getAllLaunches,
    addLaunch,
    deleteLaunch,
};