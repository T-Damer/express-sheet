# Express Sheets

<a href="https://express-sheets-td.herokuapp.com/"><img src="https://user-images.githubusercontent.com/49658988/148590860-ed9f260c-7ebc-42e0-a83a-ececb535bfb8.png" width="400"></img></a>

<a href="https://express-sheets-td.herokuapp.com/"><img src="https://user-images.githubusercontent.com/49658988/128833676-8cd09477-7916-43ce-8ee1-9efb02df8d13.gif"></img></a>

---

## Google Sheets API + Express

Simple Node.js/Express app (with EJS frontend) that integrates with Google Sheets to read/update data. This application demonstrates the functionality with a simple `PUT` request

---

## Dev Info

1. Clone the repo to your local machine `git clone https://github.com/T-Damer/next-sheet.git`.
2. Then cd into folder: `cd next-sheet`.
3. Add the `.env` and `credentials.json` (with your google credentials) file to your repo
4. Run the development server using `yarn develop`
5. Open in the [localhost:1337](http://localhost:1337/) in your browser

### List of variables:

| GOOGLE_APPLICATION_CREDENTIALS                                                                                                                                                                                               | SHEET_ID                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| This is your secrets, which you get from [google.apis](https://console.cloud.google.com/apis/), connect google.sheets -> credentials -> your account -> keys -> create new api key like JSON -> paste data to `secrets.json` | Share your sheets so anyone can edit and copy-paste only id in url after `/d/{yourSheetId}` |

Also, consider looking at `.env.example`

---

<a href="https://www.buymeacoffee.com/tdamer"><img src="https://img.buymeacoffee.com/button-api/?text=Support me with a coffee&emoji=☕️&slug=tdamer&button_colour=ffcc33&font_colour=000&font_family=Lato&outline_colour=000&coffee_colour=000"></a>
