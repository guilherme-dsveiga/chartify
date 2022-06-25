import axios from "axios";

export const AUTH_URL = `${
  import.meta.env.VITE_SPOTIFY_AUTHORIZE_URL
}?client_id=${
  import.meta.env.VITE_SPOTIFY_CLIENT_ID
}&response_type=code&redirect_uri=${
  import.meta.env.VITE_SPOTIFY_REDIRECT_URI
}&scope=${import.meta.env.VITE_SPOTIFY_SCOPES}`;

export const getAuthorization = async (code) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/login`,
      { code }
    );
    console.log(response.data);
    return response.data;
  } catch {
    window.location = "/";
  }
};

export const refreshAuthorization = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/refresh`,
      { refreshToken }
    );
    console.log(response.data);
    return response.data;
  } catch {
    window.location = "/";
  }
};
