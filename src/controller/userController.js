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
}

export default new User()