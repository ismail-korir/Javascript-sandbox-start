// getCurrentPosition()

// watchPosition()

const target = {
    latitude: 41.387456,
    longitude: -71.345345
}

function watchSuccess(pos) {
const coords = pos.coords;

}

function watchError(err) {
   console.log(`Error:
    ${err.code} - ${err.message}`);
}

const watchPosition = {
enableHighAccuracy: true,
timeout: 5000,
maximumAge: 0,
}
navigator.geolocation.watchPosition
(watchSuccess, watchError, watchOptions)

