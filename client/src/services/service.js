import axios from 'axios'


const apiClient = axios.create({
    baseURL: `/`,
    withCredentials: false, //true
    headers: {
    "Content-Type": "multipart/form-data",
    Authorization: localStorage.getItem('token')
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token") ? localStorage.getItem("token") : null
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

apiClient.interceptors.response.use(response => {
    return response
    },
    error => {
        if (error.response.status === 403) {
            window.location.href = '/login'
        }
        if (error.response.status === 401) {
            window.location.href = '/login'
        }
        return Promise.reject(error);
    });


class postAPI {
    
    //POSTS
    static getPosts(data){
        return apiClient.post(`posts/get`, data);
    }
    //POSTS
    static createPost(data){
        return apiClient.post(`posts/create`, data);
    }
    //POSTS
    static EditPost(data){
        return apiClient.post(`posts/edit/${data.id}`, data.data);
    }
    //POSTS HOME
    static getPostsHome(data){
        return apiClient.post(`posts/getHome`, data);
    }
     //POSTS HOME
     static deletePost(id){
        return apiClient.delete(`posts/deletePost/${id}`);
    }
    //EMAIL
    static sendEmail(data){
        return apiClient.post(`posts/email`, data);
    }

}

export default postAPI