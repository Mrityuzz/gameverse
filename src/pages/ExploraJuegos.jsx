import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonImg,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonIcon
} from '@ionic/react';
import { trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const juegosBase = [
  {
    titulo: 'Elden Ring',
    sinopsis: 'Explora las Tierras Intermedias en un mundo abierto con lore profundo y combate desafiante.',
    portada: '/eldenring.jpg'
  },
  {
    titulo: 'Hollow Knight',
    sinopsis: 'Sumérgete en Hallownest, un reino subterráneo lleno de secretos y enemigos.',
    portada: '/hollowknight.jpg'
  },
  {
    titulo: 'Celeste',
    sinopsis: 'Acompaña a Madeline en su ascenso emocional y físico por la montaña Celeste.',
    portada: '/celeste.jpg'
  },
  {
    titulo: 'Hades',
    sinopsis: 'Escapa del inframundo en este roguelike lleno de acción, mitología y estilo.',
    portada: '/hades.jpg'
  }
];

export default function ExploraJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    const juegosCombinados = [...juegosBase, ...juegosGuardados];
    setJuegos(juegosCombinados);
  }, []);

  const eliminarJuego = (titulo) => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    const nuevosJuegos = juegosGuardados.filter(j => j.titulo !== titulo);
    localStorage.setItem('juegos', JSON.stringify(nuevosJuegos));
    const juegosCombinados = [...juegosBase, ...nuevosJuegos];
    setJuegos(juegosCombinados);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Explora Juegos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding gradient-bg">
        {juegos.map((juego, index) => {
          const esPersonalizado = !juegosBase.some(base => base.titulo === juego.titulo);

          return (
            <IonCard key={index} className="hud-card">
              <IonImg
                src={juego.portada || '/default.jpg'}
                alt={juego.titulo}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div className="hud-card-content" style={{ padding: '1rem' }}>
                <IonCardTitle>{juego.titulo}</IonCardTitle>
                <IonCardSubtitle>
                  {esPersonalizado ? '🎯 Agregado por ti' : 'Acción / Aventura'}
                </IonCardSubtitle>
                <p style={{ color: '#d0d0d0', marginTop: '0.5rem' }}>{juego.sinopsis}</p>

                {esPersonalizado && (
                  <IonButton
                    fill="outline"
                    color="danger"
                    size="small"
                    onClick={() => eliminarJuego(juego.titulo)}
                    style={{ marginTop: '0.8rem' }}
                  >
                    <IonIcon icon={trashBin} slot="start" />
                    Eliminar
                  </IonButton>
                )}
              </div>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
}
