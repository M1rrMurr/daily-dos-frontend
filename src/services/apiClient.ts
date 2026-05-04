import axios from "axios";

const apiClient = axios.create({ baseURL: 'http://localhost/' })
apiClient.defaults.withCredentials = true
apiClient.defaults.withXSRFToken = true

export default apiClient
