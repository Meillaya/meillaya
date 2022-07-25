require('dotenv').config();

export default {

    steam: {
        //steam ID
        id: process.env.STEAM_ID,
        //Steam api key
        key: process.env.STEAM_KEY
    },
    github: {
        // Github username
        username: process.env.GHUB_USERNAME,
        //Github token
        token: process.env.GHUB_TOKEN,
    },
    linkedin: {
        // Linkedin username
        username: process.env.LINKEDIN_USERNAME
    },
    medium: {
        // Medium username
        username: process.env.MEDIUM_USERNAME
    }
}