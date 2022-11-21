import svgCaptcha from 'svg-captcha'


class CommenController {
  constructor() {}

  async demo(ctx) {
    ctx.body = {
      msg: "body message"
    }
  }

  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 50
    })
    ctx.body = {
      code: 200,
      msg: newCaptcha.data
    }
  }
}

export default new CommenController()