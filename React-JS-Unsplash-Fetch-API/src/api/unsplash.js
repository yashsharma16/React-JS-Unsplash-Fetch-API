import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 4f94aa382275712c364fde91ffa51ca5d06d57139a224435343d40cadd3e5621'}

});

