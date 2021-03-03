import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonLabel,
  IonItem,
  IonText
} from "@ionic/react"

const Pedidos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start"> 
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Pedidos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pedidos</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonText>
                    Pedido No 20666 - OBRA - 331 - DUPLICAÇÃO RODOVIA BR280 SC - 02/03/2021
                  </IonText>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </ IonContent>
    </IonPage>
  )
}

export default Pedidos;