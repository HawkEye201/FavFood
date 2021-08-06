import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer 1chaoTsz3v1slO296Do0tDv2CtCKNeTu2_sjqa58SQpqDn-rX_WQgKbkbNl0SlXvpF9ncvJeradIMpuQ4vSka-_Lv33Za18VnXuh4aOw0JbjKHjHjEzGO2zKQGqbXnYx'
    }
});

