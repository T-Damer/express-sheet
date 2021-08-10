const express = require('express')
const { google } = require('googleapis')

const app = express()
const router = express.Router()
app.set('view engine', 'html')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const { email, name } = req.body

  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.CREDENTIALS,
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
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

  res.send('Successfully submitted! Thank you!')
})

app.listen(process.env.PORT || 3000, (req, res) =>
  console.log('running on 3000')
)
