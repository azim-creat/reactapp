import * as axios from 'axios'

const instance = axios.create({
    whithCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"7521dd95-7452-4083-aa0f-a142132db7e3"
    }
})

export const userAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    },
    setPage(pageNumber,pageSize){
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    }

}