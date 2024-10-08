import axiosClient from "./axiosClient"

const authApi = {
  signup: params => axiosClient.post('auth/signUp', params),
  login: params => axiosClient.post('auth/login', params),
  verifyToken: () => axiosClient.post('auth/verify-token')
}

export default authApi
