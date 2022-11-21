class User {
  constructor() {

  }

  getUserInfo(ctx) {
    ctx.body = {
      name: 'zyb',
      age: 12,
      phone: '13456789136'
    }
  }

  login(ctx) {
    const { account, password, code } = ctx.request.body
    console.log('ctx.body :>> ', ctx.request.body, account, password, code);
    // if (account === 'admin')
    ctx.body = {
      name: '131313'
    }
  }
}

export default new User()