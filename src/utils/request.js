import axios from 'axios'

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export const get = async (url, option = {}) => {
    const reponse = await request.get(url, option)
    return reponse.data
}

export default request
