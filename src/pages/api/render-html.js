import mjml2html from "mjml"

export default function handler(req, res) {
  console.log(req.body)
  const { mjmlAst } = req.body
  const { html, errors } = mjml2html(mjmlAst)

  res.status(200).json({ html, errors })
}
