const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key= AIzaSyAwYRixHVjwPWMMywnZ7UMaCmZiQNRy-Nw`)

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    let location = resp.data.results[0];
    let direc = location.formatted_address;
    let coors = location.geometry.location;


    return {
        direccion: direc,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}


// FORMA TRADICIONAL CON PROMESAS SIN ASYNC AWAIT
// const getLugarLatLng = (direccion) => {
//     let encodedUrl = encodeURI(direccion);
//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key= AIzaSyAwYRixHVjwPWMMywnZ7UMaCmZiQNRy-Nw`)
//         .then(resp => {
//             let status = resp.status;
//             let location = resp.data.results[0];
//             let direccion_formateada = location.formatted_address;
//             let coordenadas = location.geometry.location;
//             let lat = coordenadas.lat;
//             let lng = coordenadas.lng;
//             console.log(direccion_formateada);
//             console.log(lat);
//             console.log(lng);

//             // console.log(JSON.stringify(resp.data, undefined, 2));

//         })
//         .catch(e => console.log('ERROR!!!', e))

//     return {
//         direccion,
//         lag,
//         lng
//     }
// }