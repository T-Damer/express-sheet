const express = require('express')
const { google } = require('googleapis')

require('dotenv').config()

const app = express()
const router = express.Router()

app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

router.get('/', (_req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    const { email, name } = req.body

    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes:
        'https://www.googleapis.com/auth/spreadsheets',
    })

    // Create client instance for auth
    const client = await auth.getClient()

    // Instance of Google Sheets API
    const googleSheets = google.sheets({
      version: 'v4',
      auth: client,
    })

    const spreadsheetId = process.env.SHEET_ID

    // Write row(s) to spreadsheet
    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'A1:B1',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[email, name]],
      },
    })

    res.send(
      `
      <h1> Successfully submitted! Thank you! </h1> 
      <br />
      <a href="https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}"><h2>Check it out</h2></a> 
      <br />
      <a href="/"><h2>Go back</h2></a>`
    )
  } catch (error) {
    console.error(error)
  }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
