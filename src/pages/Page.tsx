import { IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar,IonCol } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import api from '../services/api';
import './Page.css';

const Page: React.FC = () => {

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    let response =  api.get('users/1').then((res) => {
      setFirstName(res.data.first_name)
      console.log(res.data)
    })

  },[])



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"> 
            <IonMenuButton />
          </IonButtons>
          <IonTitle>home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Welcome {firstName}</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Page;
