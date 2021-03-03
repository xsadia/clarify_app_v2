import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonRow,
  IonGrid,
  IonCol
} from "@ionic/react"

import { Doughnut, Line } from 'react-chartjs-2';

const doughnutChartData = {
  labels: ['Billable', 'Non Billable'],
  datasets: [
    {
      label: 'Billable Vs. Non Billable',
      backgroundColor: ['#63FFF7', '#e60303'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: '#31fc5d',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59]
    }
  ]
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Chart de linha',
        backgroundColor: 'rgba(99,255,247, 0.2)',
        borderColor: 'rgba(99,255,247)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
    };

const Dashboard: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start"> 
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
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
              <Doughnut data={doughnutChartData} options={{ maintainAspectRatio: true }} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Line data={lineChartData} options={{ maintainAspectRatio: true }}/>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Dashboard;