import * as axios from "axios";

axios.defaults.withCredentials = true;

const URL_PREFIX = "http://192.168.1.129:3024";

export function users_LogIn(data) {
  return axios.post(URL_PREFIX + "/api/users/login", data);
}

export function userTypes_getAll() {
  return axios.get(URL_PREFIX + "/api/user-types");
}

export function lookuptables_getAll() {
  return axios.get(URL_PREFIX + "/api/lookuptables");
}
