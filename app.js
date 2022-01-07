import express, {
  Router,
  static,
  urlencoded,
} from 'express'
import { google } from 'googleapis'

const app = express()
const router = Router()

app.set('view engine', 'html')
app.use(static(__dirname + '/public'))
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use('/', router)

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const { email, name } = req.body

  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
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

  res.send(
    `Successfully submitted! Thank you! \n <a href="https://docs.google.com/spreadsheets/d/${process.env.SHEET_ID}">Check it out</a> \n <a href="/">Go back</a>`
  )
})

app.listen(process.env.PORT || 3000, () =>
  console.log('running on 3000')
)
