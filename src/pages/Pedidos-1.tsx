import {IonCol, IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon} from "@ionic/react"

import {
  searchOutline
} from 'ionicons/icons';

const data = {
  comprador: "Caroline Teixeira",
  DataHora: "03/01/21 - 16:30:08",
  pagamento: "004(A VISTA)",
  tipoFrete: "FOB",
  valorFrete: "0 R$",
  status: "A - Em aprovacao",
  empreendimento: "02 - Pedreira Biguacu",
  fornecedor: "Rech Importadora e Distribuidora S/A",
  itensDoPedido: {
    numReq: "12415",
    requisitante: "Joel de Oliveira Machado",
    atividade: "Não Informado",
    prazoEntrega: "17/03/2021",
    item: "(20565258) - PONTA 46798813 ESC.349D MOD",
    qtd: 12,
    un: "UN",
    valorUnit: "485.00",
    valorTot: "5.820.00"
  } 
}

const PedidosUm: React.FC = () => {
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
              <IonItem>
                <IonLabel position="stacked">Comprador</IonLabel>
                <IonInput value={data.comprador} disabled />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Data - Hora</IonLabel>
                <IonInput value={data.DataHora} disabled />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Pagamento</IonLabel>
                <IonInput value={data.pagamento} disabled />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Tipo Frete</IonLabel>
                <IonInput value={data.tipoFrete} disabled />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Valor Frete</IonLabel>
                <IonInput value={data.valorFrete} disabled />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked">Status</IonLabel>
                <IonInput value={data.status} disabled />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
              <IonItem>
                <IonLabel position="stacked">Empreendimento</IonLabel>
                <IonInput value={data.empreendimento} disabled />
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Fornecedor</IonLabel>
                <IonInput value={data.fornecedor} disabled />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel position="stacked" >Itens do Pedido</IonLabel>
              <IonCard>
                
                <IonCardHeader>
                  <IonLabel position="stacked">Número da Requisição</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.numReq}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Requisitante</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.requisitante}</IonCardContent>
                  </IonItem>
                </IonCardContent>
                
                <IonCardHeader>
                  <IonLabel position="stacked">Atividade</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.atividade}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Prazo Entrega</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.prazoEntrega}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Item</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.item}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Quantidade</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.qtd}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">UN</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.un}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Valor Unitário</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.valorUnit}</IonCardContent>
                  </IonItem>
                </IonCardContent>

                <IonCardHeader>
                  <IonLabel position="stacked">Valor Total R$</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem>
                    <IonCardContent>{data.itensDoPedido.valorTot}</IonCardContent>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              
              <IonButton color="medium" expand="block" >
                <IonIcon slot="start" icon={searchOutline} />
                Cotações
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </ IonPage>
  )
}

export default PedidosUm;