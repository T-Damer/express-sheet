<a href="https://express-sheets-td.herokuapp.com/"><img width="300" height="300" src="https://user-images.githubusercontent.com/49658988/127885907-b68ddad2-6f55-4daa-a05c-4fe2ea316baf.png" /></a>

# Demo

![FEoeuCoeKR](https://user-images.githubusercontent.com/49658988/128833676-8cd09477-7916-43ce-8ee1-9efb02df8d13.gif)

# Google Sheets + Node.js/Express

Simple Node.js/Express app (with EJS frontend) that integrates with Google Sheets to read/update data. This application demonstrates the functionality with a simple `PUT` request

---

## Dev Info

1. Clone the repo to your local machine `git clone https://github.com/T-Damer/next-sheet.git`.
2. Then cd into folder: `cd next-sheet`.
3. Add the `.env` file to your repo, consider looking at `.env.example`
4. Run the development server using `yarn develop`
5. Open in the [localhost:1337](http://localhost:1337/) in your browser

### List of variables:

| GOOGLE_APPLICATION_CREDENTIALS                                                                                                                                                                                               | SHEET_ID                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| This is your secrets, which you get from [google.apis](https://console.cloud.google.com/apis/), connect google.sheets -> credentials -> your account -> keys -> create new api key like JSON -> paste data to `secrets.json` | Share your sheets so anyone can edit and copy-paste only id in url after `/d/{yourSheetId}` |

---

<a href="https://www.buymeacoffee.com/tdamer"><img src="https://img.buymeacoffee.com/button-api/?text=Support me with a coffee&emoji=☕️&slug=tdamer&button_colour=ffcc33&font_colour=000&font_family=Lato&outline_colour=000&coffee_colour=000"></a>
