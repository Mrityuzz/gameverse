import {
  IonApp,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import {
  home,
  gameController,
  create,
  book,
  helpCircle
} from 'ionicons/icons';

import AcercaDe from './pages/AcercaDe';
import Soporte from './pages/Soporte';
import Intro from './pages/Intro';
import ExploraJuegos from './pages/ExploraJuegos';
import FiltroJuegos from './pages/FiltroJuegos';
import NuevoJuego from './pages/NuevoJuego';
import Reseñas from './pages/Reseñas';
import Formulario from './pages/Formulario';
import DatosGuardados from './pages/DatosGuardados';

import './App.css';
import './theme/variables.css';

export default function App() {
  return (
    <IonApp>
      <IonReactRouter>
        {/* ✅ Menú siempre visible */}
        <IonSplitPane contentId="main" when="true">
          <IonMenu contentId="main" type="overlay">
            <IonHeader>
              <IonToolbar color="dark">
                <IonTitle style={{ fontFamily: "'Orbitron', sans-serif", color: '#00f0ff' }}>
                  Gameverse
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent style={{ backgroundColor: '#1a1a1a' }}>
              <IonList>
                <IonItem routerLink="/intro" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>🚀 Intro</IonLabel>
                </IonItem>
                <IonItem routerLink="/acerca" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>🎮 Acerca</IonLabel>
                </IonItem>
                <IonItem routerLink="/explora" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>🕹️ Explorar</IonLabel>
                </IonItem>
                <IonItem routerLink="/filtro" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>🎯 Filtro</IonLabel>
                </IonItem>
                <IonItem routerLink="/nuevo" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>➕ Nuevo Juego</IonLabel>
                </IonItem>
                <IonItem routerLink="/reseñas" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>⭐ Reseñas</IonLabel>
                </IonItem>
                <IonItem routerLink="/formulario" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>📝 Crear Reseña</IonLabel>
                </IonItem>
                <IonItem routerLink="/datos" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>📖 Ver Reseñas</IonLabel>
                </IonItem>
                <IonItem routerLink="/soporte" routerDirection="root" button menuClose>
                  <IonLabel style={{ color: '#e0e0e0' }}>📬 Soporte</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/* Área principal con tabs y rutas */}
          <IonTabs>
            <IonRouterOutlet id="main">
              <Route exact path="/">
                <Redirect to="/intro" />
              </Route>
              <Route exact path="/intro" component={Intro} />
              <Route exact path="/acerca" component={AcercaDe} />
              <Route exact path="/explora" component={ExploraJuegos} />
              <Route exact path="/filtro" component={FiltroJuegos} />
              <Route exact path="/nuevo" component={NuevoJuego} />
              <Route exact path="/reseñas" component={Reseñas} />
              <Route exact path="/formulario" component={Formulario} />
              <Route exact path="/datos" component={DatosGuardados} />
              <Route exact path="/soporte" component={Soporte} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" color="dark">
              <IonTabButton tab="intro" href="/intro">
                <IonIcon icon={home} />
                <IonLabel>Inicio</IonLabel>
              </IonTabButton>
              <IonTabButton tab="explora" href="/explora">
                <IonIcon icon={gameController} />
                <IonLabel>Explora</IonLabel>
              </IonTabButton>
              <IonTabButton tab="formulario" href="/formulario">
                <IonIcon icon={create} />
                <IonLabel>Reseña</IonLabel>
              </IonTabButton>
              <IonTabButton tab="datos" href="/datos">
                <IonIcon icon={book} />
                <IonLabel>Guardadas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="soporte" href="/soporte">
                <IonIcon icon={helpCircle} />
                <IonLabel>Soporte</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}
