import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import SpotifyLogin from "../components/SpotifyLogin";

const Login = () => {
  const [urlParams] = useSearchParams();
  const code = urlParams.get("code");

  return (
    <div className="bg-neutral-700 min-h-screen flex justify-center items-center relative">
      {code ? <Navigate to={`/dashboard?code=${code}`} /> : <SpotifyLogin />}
    </div>
  );
};

export default Login;
