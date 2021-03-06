const axios = require('axios')

const BASE_URL = 'https://manga-scrapper-for-asura-scans-website.p.rapidapi.com/series'

module.exports = {
    getAllManga: () => axios({
        method: 'GET',
        url: BASE_URL,
        headers: {
            'x-rapidapi-host': 'manga-scrapper-for-asura-scans-website.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        }
    })
}