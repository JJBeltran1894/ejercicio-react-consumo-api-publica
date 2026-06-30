function PersonajeCard(props) {
  const { personaje } = props;
  const nombre = personaje.name;
  const imagen = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
  const ocupacion = personaje.occupation;
  const edad = personaje.age;
  const frases =
    personaje.phrases && personaje.phrases.length > 0
      ? personaje.phrases
      : ["Mmm... donas..."];

  return (
    <div className="simpsons-card">
      <div className="simpsons-card-header">
        <h3 className="simpsons-name">{nombre}</h3>
      </div>

      <div className="simpsons-card-body">
        <div className="simpsons-character-section">
          <div className="simpsons-image-container">
            <img
              src={imagen}
              alt={`Imagen de ${nombre}`}
              className="simpsons-image"
            />
          </div>
          <div className="simpsons-info">
            <p>
              <strong>Rol:</strong> {ocupacion}
            </p>
            <p>
              <strong>Edad:</strong> {edad}
            </p>
          </div>
        </div>
        <div className="simpsons-quotes-section">
          <h4 className="simpsons-quotes-title">💬 Frases</h4>
          <div className="simpsons-quotes-container">
            {frases.map((frase, index) => (
              <p key={index} className="simpsons-quote-item">
                "{frase}"
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonajeCard;
