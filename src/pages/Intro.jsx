import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonImg,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonFabList,
  IonAlert
} from '@ionic/react';
import { useState } from 'react';
import { add, gameController, helpCircle, sparkles } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

export default function Intro() {
  const [segmentValue, setSegmentValue] = useState('catalogo');
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  // ✅ Ruta corregida
  const irAExplora = () => history.push('/explora');
  const irASoporte = () => history.push('/soporte');
  const mostrarMensaje = () => setShowAlert(true);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bienvenido a Gameverse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding gradient-bg">
        <IonImg
          src="/gameverse.jpg"
          alt="Portada Gameverse"
          style={{ maxHeight: '40vh', objectFit: 'cover' }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.5)',
            padding: '1.5rem',
            borderRadius: '12px',
            margin: '2rem auto',
            maxWidth: '600px',
            boxShadow: '0 0 12px rgba(0, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            lineHeight: '1.6'
          }}
        >
          <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
            ¡Explora, comparte y juega!
          </h1>
          <p style={{ fontSize: '1rem', color: '#e0e0e0' }}>
            Gameverse es tu universo gamer personalizado. Descubre títulos, comparte reseñas y sumérgete en mundos épicos.
          </p>
        </div>

        <IonSegment
          value={segmentValue}
          onIonChange={(e) => setSegmentValue(e.detail.value || 'catalogo')}
          className="ion-margin-top segment-gamer"
        >
          <IonSegmentButton value="catalogo">
            <IonLabel>Catálogo Gamer</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="proyecto">
            <IonLabel>Sobre Gameverse</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {segmentValue === 'catalogo' && (
          <div className="ion-padding-top">
            <h3>Juegos Destacados:</h3>
            <ul className="gamer-list">
              <li>Elden Ring: Lore y combate épico</li>
              <li>Hollow Knight: Exploración metroidvania</li>
              <li>Celeste: Plataformas y narrativa emocional</li>
              <li>Hades: Acción roguelike con estilo</li>
            </ul>
            <p>¡Explora más en la sección "Explora Juegos"!</p>
          </div>
        )}

        {segmentValue === 'proyecto' && (
          <div className="ion-padding-top">
            <h3>¿Qué es Gameverse?</h3>
            <p>
              Es una app educativa y gamer creada para compartir, descubrir y reseñar videojuegos. Desarrollada con React + Ionic + Vite.
            </p>
            <p>¡Tu universo gamer comienza aquí!</p>
          </div>
        )}

        {/* FAB gamer estilizado */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed" className="fab-gamer">
          <IonFabButton className="fab-main">
            <IonIcon icon={add} />
          </IonFabButton>
          <IonFabList side="top" className="fab-list">
            <IonFabButton onClick={irAExplora} className="fab-option">
              <IonIcon icon={gameController} />
            </IonFabButton>
            <IonFabButton onClick={irASoporte} className="fab-option">
              <IonIcon icon={helpCircle} />
            </IonFabButton>
            <IonFabButton onClick={mostrarMensaje} className="fab-option">
              <IonIcon icon={sparkles} />
            </IonFabButton>
          </IonFabList>
        </IonFab>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'¡Mensaje!'}
          message={'Bienvenido al universo gamer. ¡Prepárate para jugar!'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}
