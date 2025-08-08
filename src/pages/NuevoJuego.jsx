import { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonImg,
  IonAlert,
  IonCardTitle,
  IonCardSubtitle,
  IonToast,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useHistory } from "react-router-dom";

export default function NuevoJuego() {
  const history = useHistory();
  const [portada, setPortada] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [genero, setGenero] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const tomarFoto = async () => {
    try {
      const imagen = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        quality: 90,
        allowEditing: false
      });
      setPortada(imagen.dataUrl);
    } catch (error) {
      console.error("Error al tomar la foto:", error);
      setShowAlert(true);
    }
  };

  const guardar = () => {
    if (!portada || !titulo || !sinopsis || !genero) {
      setShowAlert(true);
      return;
    }

    const nuevoJuego = {
      titulo,
      sinopsis,
      portada: portada.startsWith("data:image") ? portada : `data:image/jpeg;base64,${portada}`,
      genero
    };

    const juegosGuardados = JSON.parse(localStorage.getItem("juegos")) || [];
    juegosGuardados.push(nuevoJuego);
    localStorage.setItem("juegos", JSON.stringify(juegosGuardados));

    setPortada(null);
    setTitulo("");
    setSinopsis("");
    setGenero("");
    setShowToast(true);

    setTimeout(() => {
      history.push("/explora");
      window.location.reload();
    }, 1200);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>🎮 Nuevo Juego</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding gradient-bg">
        <div
          className="hud-card"
          style={{
            backgroundColor: "#1a1a1a",
            borderRadius: "12px",
            padding: "1.5rem",
            marginBottom: "2rem",
            border: "1px solid #2a2a2a",
            fontFamily: "'Orbitron', sans-serif"
          }}
        >
          <IonCardTitle style={{ color: "#00f0ff", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            Carga tu misión
          </IonCardTitle>
          <IonCardSubtitle style={{ color: "#ff00c8", marginBottom: "1rem" }}>
            Sube un nuevo videojuego al Gameverse
          </IonCardSubtitle>

          <IonButton
            expand="block"
            onClick={tomarFoto}
            color="dark"
            style={{
              backgroundColor: "#2f2f2f",
              color: "#00f0ff",
              borderRadius: "8px",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}
          >
            📸 Tomar portada
          </IonButton>

          {portada && (
            <IonImg
              src={portada}
              style={{
                maxHeight: "200px",
                margin: "20px auto",
                display: "block",
                borderRadius: "8px",
                border: "1px solid #444"
              }}
            />
          )}

          <IonInput
            placeholder="Título del videojuego"
            value={titulo}
            onIonChange={(e) => setTitulo(e.target.value)}
            className="ion-margin-top"
            style={{
              backgroundColor: "#2a2a2a",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "0.75rem",
              border: "1px solid #444",
              marginBottom: "1rem"
            }}
          />

          <IonTextarea
            placeholder="Sinopsis del juego"
            value={sinopsis}
            onIonChange={(e) => setSinopsis(e.target.value)}
            className="ion-margin-top"
            rows={5}
            style={{
              backgroundColor: "#2a2a2a",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "0.75rem",
              border: "1px solid #444",
              marginBottom: "1rem"
            }}
          />

          <IonSelect
            placeholder="Selecciona el género"
            value={genero}
            onIonChange={(e) => setGenero(e.detail.value)}
            style={{
              backgroundColor: "#2a2a2a",
              color: "#ffffff",
              borderRadius: "8px",
              padding: "0.75rem",
              border: "1px solid #444",
              marginBottom: "1rem"
            }}
          >
            <IonSelectOption value="accion">Acción</IonSelectOption>
            <IonSelectOption value="rpg">RPG</IonSelectOption>
            <IonSelectOption value="aventura">Aventura</IonSelectOption>
            <IonSelectOption value="estrategia">Estrategia</IonSelectOption>
            <IonSelectOption value="simulacion">Simulación</IonSelectOption>
          </IonSelect>

          <IonButton
            expand="block"
            onClick={guardar}
            color="dark"
            style={{
              backgroundColor: "#2f2f2f",
              color: "#00f0ff",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            🚀 Guardar juego
          </IonButton>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="⚠️ Error"
          message={
            !portada
              ? "Debes tomar una portada"
              : !genero
              ? "Selecciona un género"
              : "Completa todos los campos"
          }
          buttons={["OK"]}
        />

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="✅ Juego agregado al Gameverse"
          duration={1000}
          color="dark"
        />
      </IonContent>
    </IonPage>
  );
}
