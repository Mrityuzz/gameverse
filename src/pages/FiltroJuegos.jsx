import { useState, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonCardSubtitle,
  IonGrid
} from "@ionic/react";

export default function FiltroJuegos() {
  const [genero, setGenero] = useState("");
  const [juegos, setJuegos] = useState([]);
  const [juegosFiltrados, setJuegosFiltrados] = useState([]);

  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem("juegos")) || [];
    setJuegos(juegosGuardados);
  }, []);

  const aplicarFiltro = () => {
    if (genero) {
      const filtrados = juegos.filter(j => j.genero?.toLowerCase() === genero);
      setJuegosFiltrados(filtrados);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>🎯 Filtrar Juegos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding gradient-bg">
        <IonItem>
          <IonLabel>Género</IonLabel>
          <IonSelect
            value={genero}
            placeholder="Selecciona un género"
            onIonChange={(e) => setGenero(e.detail.value)}
          >
            <IonSelectOption value="accion">Acción</IonSelectOption>
            <IonSelectOption value="aventura">Aventura</IonSelectOption>
            <IonSelectOption value="rpg">RPG</IonSelectOption>
            <IonSelectOption value="plataformas">Plataformas</IonSelectOption>
            <IonSelectOption value="indie">Indie</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonButton
          expand="block"
          onClick={aplicarFiltro}
          className="ion-margin-top"
          color="dark"
          style={{
            backgroundColor: "#2f2f2f",
            color: "#00f0ff",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          🔍 Aplicar Filtro
        </IonButton>

        {juegosFiltrados.length > 0 ? (
          <IonGrid style={{ marginTop: "1rem" }}>
            {juegosFiltrados.map((juego, index) => (
              <IonCard
                key={index}
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                  fontFamily: "'Orbitron', sans-serif"
                }}
              >
                <IonImg src={juego.portada || "/default.jpg"} alt={juego.titulo} />
                <IonCardHeader>
                  <IonCardTitle style={{ color: "#00f0ff" }}>{juego.titulo}</IonCardTitle>
                  <IonCardSubtitle style={{ color: "#ff00c8" }}>
                    Género: {juego.genero?.toUpperCase() || "N/A"}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent style={{ color: "#ccc" }}>{juego.sinopsis}</IonCardContent>
              </IonCard>
            ))}
          </IonGrid>
        ) : genero ? (
          <p style={{ textAlign: "center", color: "#ccc", marginTop: "2rem" }}>
            No se encontraron juegos para el género seleccionado.
          </p>
        ) : null}
      </IonContent>
    </IonPage>
  );
}
