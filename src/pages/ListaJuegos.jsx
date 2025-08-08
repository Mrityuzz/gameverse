import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonGrid,
  IonCardSubtitle
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListaJuegos({ juegos, onDelete }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const genero = params.get("genero")?.toLowerCase(); // 🔍 normaliza

  const [juegosFiltrados, setJuegosFiltrados] = useState([]);

  useEffect(() => {
    if (genero) {
      const filtrados = juegos.filter(j => j.genero?.toLowerCase() === genero);
      setJuegosFiltrados(filtrados);
    } else {
      setJuegosFiltrados(juegos);
    }
  }, [genero, juegos]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>
            {genero ? `🎮 Juegos: ${genero.toUpperCase()}` : "🎮 Mis Videojuegos"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding gradient-bg">
        {juegosFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ccc", fontStyle: "italic" }}>
            No se encontraron juegos para el género seleccionado.
          </p>
        ) : (
          <IonGrid>
            {juegosFiltrados.map((juego, index) => (
              <IonCard
                key={index}
                style={{
                  margin: "10px 0",
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  fontFamily: "'Orbitron', sans-serif"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "110px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#1a1a2e"
                  }}
                >
                  <IonImg
                    src={juego.portada || "assets/placeholder.jpg"} // 🖼️ fallback si no hay portada
                    alt={juego.titulo}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover"
                    }}
                  />
                </div>

                <IonCardHeader>
                  <IonCardTitle style={{ color: "#00f0ff" }}>{juego.titulo}</IonCardTitle>
                  {juego.genero && (
                    <IonCardSubtitle style={{ color: "#ff00c8", fontSize: "0.9rem" }}>
                      Género: {juego.genero.charAt(0).toUpperCase() + juego.genero.slice(1)}
                    </IonCardSubtitle>
                  )}
                </IonCardHeader>

                <IonCardContent style={{ color: "#ccc" }}>
                  <p style={{ marginBottom: "1rem" }}>{juego.sinopsis}</p>
                  <IonButton
                    color="danger"
                    size="small"
                    onClick={() => onDelete(index)}
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      fontWeight: "bold",
                      borderRadius: "8px"
                    }}
                  >
                    🗑️ Eliminar
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
}
