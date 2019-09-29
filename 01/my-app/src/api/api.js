import * as axios from 'axios'

const instance = axios.create({
    whithCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"255406e6-6fa4-4fea-9484-93c226e19ab1"
    }
})

export const usersAPI = {
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>{
                return response.data
            })
    },   

}

export const followAPI = {
    follow(userId){
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{},{
            withCredentials: true,
        headers:{
            "API-KEY":"255406e6-6fa4-4fea-9484-93c226e19ab1"
        }
        })
    },
    unfollow(userId){
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,{
            withCredentials: true ,
             headers:{
            "API-KEY":"255406e6-6fa4-4fea-9484-93c226e19ab1"
        }
        })
    }
}