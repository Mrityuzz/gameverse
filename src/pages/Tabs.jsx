import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { gameController, star, add } from 'ionicons/icons';

import ExploraJuegos from './ExploraJuegos';
import Reseñas from './Reseñas';
import NuevoJuego from './NuevoJuego';

export default function Tabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs">
          <Redirect to="/tabs/explora-juegos" />
        </Route>
        <Route exact path="/tabs/explora-juegos" component={ExploraJuegos} />
        <Route exact path="/tabs/reseñas" component={Reseñas} />
        <Route exact path="/tabs/nuevo-juego" component={NuevoJuego} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom" color="dark">
        <IonTabButton tab="explora-juegos" href="/tabs/explora-juegos">
          <IonIcon icon={gameController} />
          <IonLabel>Explorar</IonLabel>
        </IonTabButton>
        <IonTabButton tab="reseñas" href="/tabs/reseñas">
          <IonIcon icon={star} />
          <IonLabel>Reseñas</IonLabel>
        </IonTabButton>
        <IonTabButton tab="nuevo-juego" href="/tabs/nuevo-juego">
          <IonIcon icon={add} />
          <IonLabel>Nuevo</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
