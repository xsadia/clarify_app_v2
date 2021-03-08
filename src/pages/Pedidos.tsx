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
                <IonItem href='/pedidos/1'>
                  <IonText>
                    Pedido No 20666 - OBRA - 331 - DUPLICAÇÃO RODOVIA BR280 SC
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