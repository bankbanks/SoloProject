import jwt_decode from "jwt-decode";

const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const setToken = (token, role) => {
  localStorage.setItem("ACCESS_TOKEN", token);
  if (role === 1) {
    return localStorage.setItem("ROLE", "ADMIN");
  }
  localStorage.setItem("ROLE", "USER");
};

const clearToken = () => {
  localStorage.clear();
};

const getRole = () => {
  const storedToken = getToken();
  if (storedToken) {
    let decodedData = jwt_decode(storedToken);
    let expirationDate = decodedData.exp;
    var current_time = Date.now() / 1000;
    if (expirationDate < current_time) {
      localStorage.clear();
      window.location.href = 'http://localhost:3000'
    }
  }

  return localStorage.getItem("ROLE") || "GUEST";
};

const getUserProfile = () => {
  let token = getToken();
  if (token) {
    return jwt_decode(token)
  }
  return { id: null }
}

export default {
  getToken,
  setToken,
  clearToken,
  getRole,
  getUserProfile
};
