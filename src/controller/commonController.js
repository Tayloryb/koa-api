import svgCaptcha from 'svg-captcha'


class CommenController {
  constructor() {}

  async demo(ctx) {
    ctx.body = {
      msg: "body message"
    }
  }

  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({})
    ctx.body = {
      code: 200,
      msg: newCaptcha.data
    }
  }
}

export default new CommenController()