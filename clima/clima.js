const axios = require('axios');

const getClima = async(lat, lng) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&&units=metric&appid=632f46e187ef29a3dcafced0bde4f998`;
    let resp = await axios.get(url);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}