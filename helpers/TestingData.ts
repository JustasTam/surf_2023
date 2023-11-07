const testCreditCard = {
  number: '444444444444123123',
  expDate: '1125',
  cvc: '123',
  name: 'Test User',
};

const wrongUserCredentials = {
  email: 'wrong@wrong.com',
  password: '123123123',
}

const validUserCredentials = {
  email: 'good@email.com',
  password: '123123123',
}

module.exports = {
  testCreditCard,
  wrongUserCredentials,
  validUserCredentials,
};