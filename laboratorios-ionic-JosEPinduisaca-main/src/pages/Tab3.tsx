import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil De Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil De Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className="card">
            <img src="https://avatars.githubusercontent.com/u/284108501?s=400&u=7b09a9d3339f7fb99ef7486c696f41cf97c19f55&v=4" 
            alt="Avatar" className="avatar"/>

            <IonCardHeader>
              <IonCardTitle>José Pinduisaca</IonCardTitle>
              <IonCardSubtitle>jpinduisaca</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <p>Estudiante de Desarrollo de Software, me parece interesante el desarrollo web y móvil</p>
              <p>Estudiante que le gusta los videojuegos y el avance de la tecnología</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;