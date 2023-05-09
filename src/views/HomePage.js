import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="mb-4">Bienvenido a la página de inicio de Smart Fit</h1>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Nuestros servicios</h2>
          <p className="card-text">
            Aquí encontrarás información relevante sobre nuestro gimnasio y sus servicios. Ofrecemos una
            amplia variedad de clases grupales, entrenamientos personalizados, y una selección de
            equipos de última generación para ayudarte a alcanzar tus metas de acondicionamiento físico.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
