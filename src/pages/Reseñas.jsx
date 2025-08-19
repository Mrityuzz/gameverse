import { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonTextarea,
  IonButton,
  IonAlert,
  IonList,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

export default function Reseñas() {
  const [nuevaReseña, setNuevaReseña] = useState('');
  const [reseñas, setReseñas] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const enviarReseña = () => {
    if (nuevaReseña.trim() === '') {
      setAlertMessage('Por favor, escribe tu reseña antes de enviarla.');
      setShowAlert(true);
      return;
    }

    const nueva = {
      texto: nuevaReseña,
      fecha: new Date().toLocaleDateString()
    };

    setReseñas([...reseñas, nueva]);
    setAlertMessage('¡Gracias! Tu reseña ha sido enviada.');
    setShowAlert(true);
    setNuevaReseña('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>🎮 Reseñas de Jugadores</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding gradient-bg">
        <div
          className="hud-card"
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '1.5rem',
            border: '1px solid #2a2a2a',
            marginBottom: '2rem'
          }}
        >
          <IonCardTitle style={{ color: '#00f0ff', fontSize: '1.2rem' }}>
            Deja tu Reseña
          </IonCardTitle>
          <IonCardSubtitle style={{ color: '#ff00c8', marginBottom: '1rem' }}>
            ¿Qué te pareció tu experiencia en Gameverse?
          </IonCardSubtitle>

          <IonTextarea
            value={nuevaReseña}
            onIonChange={(e) => setNuevaReseña(e.detail.value || '')}
            rows={6}
            placeholder="Escribe aquí tu opinión..."
            style={{
              backgroundColor: '#2a2a2a',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '0.75rem',
              border: '1px solid #444',
              marginBottom: '1rem'
            }}
          />

          <IonButton
            expand="block"
            onClick={enviarReseña}
            color="dark"
            style={{
              backgroundColor: '#2f2f2f',
              color: '#00f0ff',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            🚀 Enviar Reseña
          </IonButton>
        </div>

        <IonList>
          {reseñas.map((r, index) => (
            <IonCard
              key={index}
              className="hud-card"
              style={{
                backgroundColor: '#121212',
                borderRadius: '12px',
                border: '1px solid #2a2a2a',
                marginBottom: '1rem'
              }}
            >
              <IonCardContent style={{ color: '#e0e0e0' }}>
                <p>{r.texto}</p>
                <small style={{ color: '#888' }}>📅 {r.fecha}</small>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Reseña"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}