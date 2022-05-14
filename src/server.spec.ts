import request from 'supertest';
import App from './app';

describe('Testando rota principal do sistema', () => {
  test('Testando a rota / da aplicação', () => {
    request(App)
      .get('/pessoas')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
