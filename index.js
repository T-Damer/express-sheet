const express = require('express')
const { google } = require('googleapis')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async (req, res) => {
  const { email, name } = req.body

  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  })

  // Create client instance for auth
  const client = await auth.getClient()

  // Instance of Google Sheets API
  const googleSheets = google.sheets({
    version: 'v4',
    auth: client,
  })

  const spreadsheetId =
    '1nnj_zBQCFMr-EUdzXe-Bo_bonlZ0YvlVuAJ3AoNb9YU'

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

app.listen(1337, (req, res) =>
  console.log('running on 1337')
)
