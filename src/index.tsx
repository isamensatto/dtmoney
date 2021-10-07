import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  //Tabela
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [ 
        {
          id: 1,
          title: 'Freelancer de Web',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-10-7 10:50:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-10-02 10:50:00'),
        }
      ],
    })
  },


  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      // é o banco de dados
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

