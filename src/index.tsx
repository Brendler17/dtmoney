import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Academia',
          type: 'withdraw',
          category: 'Saúde',
          amount: 90,
          createdAt: '2022-05-23 17:00:00'
        },
        {
          id: 2,
          title: 'Salário Junho',
          type: 'deposit',
          category: 'Trabalho',
          amount: 12000,
          createdAt: '2022-06-05 08:00:00'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
