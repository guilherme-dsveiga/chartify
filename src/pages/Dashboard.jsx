import React from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Caroussel from "../components/Caroussel";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/Auth";

const Dashboard = () => {
  const [urlParams] = useSearchParams();
  const code = urlParams.get("code");
  const { accessToken } = useAuth(code);

  console.log(accessToken);

  return (
    <div>
      <Header />
      <main className="bg-neutral-700 p-5 md:p-10">
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Recentemente Tocados
          </h2>
          <Caroussel>
            <Card title={"What's next"} artist={"Drake"} />
            <Card title={"Off the Grid"} artist={"Kanye West"} />
            <Card title={"Biking"} artist={"Frank Ocean"} />
            <Card title={"Bound 2"} artist={"Kanye West"} />
            <Card title={"Golden"} artist={"Harry Styles"} />
            <Card title={"Rap Snitches"} artist={"MF DOOM"} />
          </Caroussel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">Albuns Salvos</h2>
          <Caroussel>
            <Card title={"What's next"} artist={"Drake"} />
            <Card title={"Off the Grid"} artist={"Kanye West"} />
            <Card title={"Biking"} artist={"Frank Ocean"} />
            <Card title={"Bound 2"} artist={"Kanye West"} />
            <Card title={"Golden"} artist={"Harry Styles"} />
            <Card title={"Rap Snitches"} artist={"MF DOOM"} />
          </Caroussel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Artistas Seguidos
          </h2>
          <Caroussel>
            <Card title={"What's next"} artist={"Drake"} />
            <Card title={"Off the Grid"} artist={"Kanye West"} />
            <Card title={"Biking"} artist={"Frank Ocean"} />
            <Card title={"Bound 2"} artist={"Kanye West"} />
            <Card title={"Golden"} artist={"Harry Styles"} />
            <Card title={"Rap Snitches"} artist={"MF DOOM"} />
          </Caroussel>
        </div>
        <div className="mb-10">
          <h2 className="text-white text-3xl font-bold mb-5">
            Minhas Playlists
          </h2>
          <Caroussel>
            <Card title={"What's next"} artist={"Drake"} />
            <Card title={"Off the Grid"} artist={"Kanye West"} />
            <Card title={"Biking"} artist={"Frank Ocean"} />
            <Card title={"Bound 2"} artist={"Kanye West"} />
            <Card title={"Golden"} artist={"Harry Styles"} />
            <Card title={"Rap Snitches"} artist={"MF DOOM"} />
          </Caroussel>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
