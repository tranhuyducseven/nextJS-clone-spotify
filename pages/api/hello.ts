export default function helloApi(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
