import { useState } from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import bannerAbout from "../assets/banner-about.jpg";

export default function About() {
  const [openCollapse, setOpenCollapse] = useState(null);

  function toggleCollapse(key) {
    setOpenCollapse((prev) => (prev === key ? null : key));
  }

  return (
    <div className="container">
      <Banner title="" image={bannerAbout} className="banner-about" />

      <div className="about-collapses">
        <Collapse
          title="Fiabilité"

        >
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>

        <Collapse
          title="Respect"

        >
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>

        <Collapse
          title="Service"

        >
          <p>La qualité du service est au cœur de nos priorités...</p>
        </Collapse>

        <Collapse
          title="Sécurité"

        >
          <p>La sécurité est la priorité de Kasa...</p>
        </Collapse>
      </div>
    </div>
  );
}