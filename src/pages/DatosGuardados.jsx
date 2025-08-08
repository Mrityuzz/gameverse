import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';
import { useState } from 'react';
import { useIonViewWillEnter } from '@ionic/react';

export default function DatosGuardados() {
  const [reseñas, setReseñas] = useState([]);

  useIonViewWillEnter(() => {
    const datos = JSON.parse(localStorage.getItem('reseñas') || '[]');
    setReseñas(datos);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle style={{ fontFamily: "'Orbitron', sans-serif" }}>📖 Reseñas Guardadas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding gradient-bg">
        <div
          style={{
            maxWidth: '700px',
            margin: '2rem auto',
            padding: '1rem',
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            border: '1px solid #2a2a2a',
            boxShadow: '0 0 8px rgba(0, 255, 255, 0.15)',
            fontFamily: "'Orbitron', sans-serif"
          }}
        >
          <h2 style={{ textAlign: 'center', color: '#00f0ff', marginBottom: '1.5rem' }}>
            🧠 Archivo Gamer
          </h2>

          {reseñas.length === 0 ? (
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#ccc' }}>
              No hay reseñas guardadas aún.
            </p>
          ) : (
            reseñas.map((r, i) => (
              <IonCard
                key={i}
                style={{
                  backgroundColor: '#2a2a2a',
                  border: '1px solid #444',
                  borderRadius: '10px',
                  boxShadow: '0 0 6px rgba(0, 255, 255, 0.15)',
                  marginBottom: '1.5rem',
                  color: '#e0e0e0'
                }}
              >
                <IonCardHeader>
                  <IonCardTitle style={{ fontSize: '1.1rem', color: '#00f0ff' }}>
                    🎮 {r.juego}
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                  <strong style={{ color: '#ffd966' }}>{r.nombre}:</strong> {r.reseña}
                </IonCardContent>
              </IonCard>
            ))
          )}
        </div>
      </IonContent>
    </IonPage>
  );
}
