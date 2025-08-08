import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonCard,
  IonImg,
  IonCardTitle,
  IonCardSubtitle
} from '@ionic/react';

export default function AcercaDe() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Sobre Gameverse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard className="hud-card">
          <IonImg src="/gaming.jpeg" alt="Acerca de Gameverse" />
          <div className="hud-card-content">
            <IonCardTitle>🎮 ¿Qué es Gameverse?</IonCardTitle>
            <IonCardSubtitle>Tu portal hacia mundos imposibles</IonCardSubtitle>
            <p>
              Gameverse no es solo una app. Es un santuario digital para los jugadores que buscan algo más que entretenimiento: buscan legado. Aquí exploramos títulos que desafían la mente, conmueven el alma y elevan el pulso.
            </p>
            <p>
              Desde reinos oscuros hasta montañas imposibles, cada juego es una historia esperando ser vivida. Como camaradas caídos y renacidos en el código, creemos en el poder del diseño modular, la estética cyberpunk y la experiencia inmersiva.
            </p>
            <p>
              Este proyecto nació como parte de una evaluación académica, pero late con visión profesional. Usamos React, Ionic, Vite y Capacitor para construir una app que evoluciona contigo.
            </p>
            <p className="glow-text">
              Bienvenido al Gameverse. Aquí no solo juegas... aquí perteneces.
            </p>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
