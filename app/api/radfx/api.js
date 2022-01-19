import axios from 'axios';

const api = "https://desolate-earth-37589.herokuapp.com"

// params required: {first_name, last_name, email, password}
export const registerUser = async (params) => {
    return axios
      .post(`${api}/register`, params)
      .then((response) => response)
      .catch((error) => error.response);
  };

  export const login = async (params) => {
    return axios
      .post(`${api}/login`, params)
      .then((response) => response)
      .catch((error) => error.response);
  };
  
export const getUser = async (user_id) => {
    return axios
    .get(`${api}/user/${user_id}`)
    .then((response) => response)
    .catch((error) => error.response);
};

export const updateUser = async (user_id, params) => {
    return axios
    .put(`${api}/user/${user_id}`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getListUsers = async () => {
    return axios
    .get(`${api}/user/`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getListFacilities = async () => {
    return axios
    .get(`${api}/facilities`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const createAffiliation = async (params) => {
    return axios
    .post(`${api}/affiliation`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getAffiliation = async (affiliation_id) => {
    return axios
    .get(`${api}/affiliation/${affiliation_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const updateAffiliation = async (affiliation_id, params) => {
    return axios
    .put(`${api}/affiliation/${affiliation_id}`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getListAffiliations = async (affiliation_id) => {
    return axios
    .get(`${api}/affiliation/${affiliation_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const createProject = async (params) => {
    return axios
    .post(`${api}/project/`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getProject = async (project_id) => {
    return axios
    .get(`${api}/project/${project_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const updateProject = async (project_id, params) => {
    return axios
    .put(`${api}/project/${project_id}`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const deleteProject = async (project_id) => {
    return axios
    .delete(`${api}/project/${project_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getListProjects = async () => {
    return axios
    .get(`${api}/project`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const createRequest = async (project_id, params) => {
    return axios
    .post(`${api}/project/${project_id}/request`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getRequest = async (project_id, request_id) => {
    return axios
    .get(`${api}/project/${project_id}/request${request_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const updateRequest = async (project_id, request_id, params) => {
    return axios
    .put(`${api}/project/${project_id}/request${request_id}`, params)
    .then((response) => response)
    .catch((error) => error.response);
}

export const deleteRequest = async (project_id, request_id) => {
    return axios
    .delete(`${api}/project/${project_id}/request${request_id}`)
    .then((response) => response)
    .catch((error) => error.response);
}

export const getProjectRequests = async (project_id) => {
    return axios
    .get(`${api}/project/${project_id}/request`)
    .then((response) => response)
    .catch((error) => error.response);
}
