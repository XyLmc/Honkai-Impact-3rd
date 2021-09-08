import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'https://www.bh3.com'
    })
    return instance(config)
}

