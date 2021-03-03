import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItemDivider, IonItem, IonInput, IonRow, IonCol, IonGrid, IonButton } from "@ionic/react";
import React, { useState } from 'react';
import api from '../services/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');
    const hash = '7110eda4d09e062aa5e4a390b0a572ac0d2c0220'

    const params = JSON.stringify({
        "mail": email,
        "pwd": password,
        "cnpj": cnpj,
    });

    const handleClick = async () => {
        const response = await api.post('empresa', params, {
            headers: {
                "hash": hash
            },
        })
    }

    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"> 
            <IonMenuButton />
          </IonButtons>
          <IonTitle>login page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
            <IonRow>
                <IonCol>
        
                    <IonItem>
                        <IonInput type="email" placeholder="email" onIonChange={e => {
                            if (e.detail.value === undefined) return;
                            setEmail(e.detail.value!)
                            
                        }}/>
                    </IonItem>
            
                </IonCol>
                
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                        <IonInput type="password" placeholder="password" onIonChange={e => {
                            if (e.detail.value === undefined) return;
                            setPassword(e.detail.value!)
                            
                        }}/>
                    </IonItem>

                </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
                <IonItem>
                        <IonInput type="text" placeholder="CNPJ" onIonChange={e => {
                            if (e.detail.value === undefined) return;
                            setCnpj(e.detail.value!)
                            
                        }}/>
                    </IonItem>

                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton expand="full" color="primary" onClick={handleClick} >Submit</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    );
}

export default Login;