import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from '@ionic/react';
import { Repository } from '../interfaces/Repository';
import './RepoItem.css';
import React from 'react';
import { pencil, trash } from 'ionicons/icons';

// 1. Creamos una interfaz que combine los datos del repo con nuestras nuevas funciones
interface RepoItemProps extends Repository {
  onUpdate: (owner: string, repoName: string) => void;
  onDelete: (owner: string, repoName: string) => void;
}

// 2. Usamos esta nueva interfaz y extraemos las funciones
const RepoItem: React.FC<RepoItemProps> = ({ onUpdate, onDelete, ...repository }) => {
    return (
        <IonItemSliding>
            <IonItem>
              <IonThumbnail slot="start">
                <img 
                  src={repository.owner.avatar_url} 
                  alt="Avatar" 
                 />
              </IonThumbnail>
              <IonLabel>  
                <h3>{repository.name}</h3>
                {repository.description && (
                  <p>{repository.description}</p>
                )}
                {repository.language && (
                  <p><strong>Lenguaje:</strong> {repository.language}</p>
                )}
              </IonLabel>
            </IonItem>

            <IonItemOptions>
              {/* 3. Agregamos el evento onClick para Actualizar */}
              <IonItemOption color="primary" onClick={() => onUpdate(repository.owner.login, repository.name)}>
                <IonIcon icon={pencil} slot="icon-only"/>
              </IonItemOption>

              {/* 4. Agregamos el evento onClick para Eliminar */}
              <IonItemOption color="danger" onClick={() => onDelete(repository.owner.login, repository.name)}>
                <IonIcon icon={trash} slot="icon-only"/>
              </IonItemOption> 
            </IonItemOptions>
            
          </IonItemSliding>
    );
}

export default RepoItem;