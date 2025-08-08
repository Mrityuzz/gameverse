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
  IonInput,
  IonTextarea,
  IonButton,
  IonAlert,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

export default function Soporte() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const enviarMensaje = () => {
    if (nombre.trim() === '' || mensaje.trim() === '') {
      setAlertMessage('Por favor completa todos los campos antes de enviar.');
      setShowAlert(true);
      return;
    }

    console.log(`Mensaje enviado por ${nombre}: ${mensaje}`);
    setAlertMessage('¡Mensaje enviado! Gracias por tu feedback, camarada.');
    setShowAlert(true);
    setNombre('');
    setMensaje('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>📬 Soporte Gamer</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding gradient-bg">
        <IonCard
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
            ¿Necesitas ayuda o quieres aportar?
          </IonCardTitle>
          <IonCardSubtitle style={{ color: '#ff00c8', marginBottom: '1rem' }}>
            Tu voz gamer importa. Completa el formulario y nos pondremos en contacto contigo.
          </IonCardSubtitle>

          <IonCardContent>
            <IonItem className="custom-item" lines="inset">
              <IonInput
                value={nombre}
                onIonChange={(e) => setNombre(e.detail.value || '')}
                placeholder="Tu nombre gamer"
              />
            </IonItem>

            <IonItem className="custom-item" lines="inset">
              <IonTextarea
                value={mensaje}
                onIonChange={(e) => setMensaje(e.detail.value || '')}
                rows={6}
                placeholder="Tu mensaje"
              />
            </IonItem>

            <IonButton
              expand="block"
              onClick={enviarMensaje}
              color="dark"
              style={{
                backgroundColor: '#2f2f2f',
                color: '#00f0ff',
                borderRadius: '8px',
                fontWeight: 'bold',
                marginTop: '1rem'
              }}
            >
              🚀 Enviar mensaje
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header="Soporte"
          message={alertMessage}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
}
