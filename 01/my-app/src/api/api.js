import * as axios from 'axios'
// eslint-disable-next-line
const instance = axios.create({
    whithCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"255406e6-6fa4-4fea-9484-93c226e19ab1"
    }
})

export const usersAPI = {
    
    getUsers(currentPage,pageSize){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,{withCredentials: true})
    },
    
    
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true});
    },
    getStatus(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {withCredentials: true});
    },
    updateStatus(status) {
        return axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status },
                    {
                 withCredentials: true ,
                 headers:{"API-KEY":"255406e6-6fa4-4fea-9484-93c226e19ab1"}
                    }
                 );
    }
}

export const authAPI = {
    me(){
        return  axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true})
    }
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