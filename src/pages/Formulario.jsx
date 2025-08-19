import { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonTextarea,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonToast
} from "@ionic/react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [juego, setJuego] = useState("");
  const [reseña, setReseña] = useState("");
  const [showToast, setShowToast] = useState(false);

  const guardarDatos = () => {
    const nuevaReseña = { nombre, juego, reseña };
    const reseñasGuardadas = JSON.parse(localStorage.getItem("reseñas") || "[]");
    reseñasGuardadas.push(nuevaReseña);
    localStorage.setItem("reseñas", JSON.stringify(reseñasGuardadas));
    setShowToast(true);
    setNombre("");
    setJuego("");
    setReseña("");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle style={{ fontFamily: "'Orbitron', sans-serif" }}>📝 Crear Reseña</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding gradient-bg">
        <div
          style={{
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            padding: "2rem",
            margin: "2rem auto",
            maxWidth: "640px",
            border: "1px solid #2a2a2a",
            boxShadow: "0 0 12px rgba(0, 255, 255, 0.2)",
            fontFamily: "'Orbitron', sans-serif"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#00f0ff" }}>
            🎮 Comparte tu experiencia gamer
          </h2>

          <IonList>
            <IonItem style={{ background: "transparent" }}>
              <IonLabel position="stacked" style={{ color: "#ff00c8" }}>
                Tu nombre
              </IonLabel>
              <IonInput
                value={nombre}
                onIonChange={(e) => setNombre(e.detail.value || "")}
                style={{
                  backgroundColor: "#2a2a2a",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  border: "1px solid #444"
                }}
              />
            </IonItem>

            <IonItem style={{ background: "transparent" }}>
              <IonLabel position="stacked" style={{ color: "#ff00c8" }}>
                Juego reseñado
              </IonLabel>
              <IonInput
                value={juego}
                onIonChange={(e) => setJuego(e.detail.value || "")}
                style={{
                  backgroundColor: "#2a2a2a",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  border: "1px solid #444"
                }}
              />
            </IonItem>

            <IonItem style={{ background: "transparent" }}>
              <IonLabel position="stacked" style={{ color: "#ff00c8" }}>
                Tu reseña
              </IonLabel>
              <IonTextarea
                value={reseña}
                onIonChange={(e) => setReseña(e.detail.value || "")}
                rows={5}
                style={{
                  backgroundColor: "#2a2a2a",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "0.75rem",
                  border: "1px solid #444",
                  fontSize: "0.95rem"
                }}
              />
            </IonItem>
          </IonList>

          <IonButton
  expand="block"
  onClick={guardarDatos}
  color="dark"
  style={{
    backgroundColor: "#2f2f2f",
    color: "#00f0ff",
    borderRadius: "8px",
    fontWeight: "bold",
    marginTop: "2rem",
    fontFamily: "'Orbitron', sans-serif"
  }}
>
  🚀 Guardar Reseña
</IonButton>
        </div>

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="✅ Reseña guardada con éxito"
          duration={2000}
          color="dark"
        />
      </IonContent>
    </IonPage>
  );
}