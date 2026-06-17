import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { repositoryList } from '../interfaces/Repository';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listas de Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Listas de Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

          {repositoryList.map((repo) => (
            <RepoItem {...repo} />
          ))}
          
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;