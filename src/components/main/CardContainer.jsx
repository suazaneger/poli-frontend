import { Card } from "./Card";

import deployment from "../../assets/images/deployment.jpg";
import frontend from "../../assets/images/frontend.jpg";
import planning from "../../assets/images/planning.jpg";
import Analysis from "../../assets/images/Analysis.jpg";

export const CardContainer = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6 mt-12">
      <Card
        imageSrc={Analysis}
        title="Análisis de requerimiento"
        description="undamentamos cada proyecto en una comprensión profunda de tus necesidades y objetivos, para garantizar soluciones que se ajusten perfectamente a tus requerimientos"
      />
      <Card
        imageSrc={planning}
        title="Planificación del proyecto"
        description="Con una planificación detallada y estratégica, trazamos el camino hacia el éxito de tu proyecto, anticipando desafíos y asegurando resultados excepcionales"
      />
      <Card
        imageSrc={frontend}
        title="Desarrollo del proyecto"
        description="Guiados por la innovación y la excelencia, nuestro equipo colaborativo transforma visiones en soluciones de software avanzadas y adaptadas a tus necesidades"
      />
      <Card
        imageSrc={deployment}
        title="Despliegue del proyecto"
        description="Con un despliegue cuidadosamente planificado yejecutado, llevamos tus soluciones tecnológicas del laboratorio a la realidad, marcando el inicio de tu camino hacia el éxit"
      />
    </section>
  );
};
