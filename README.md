<a href="https://express-sheets-td.herokuapp.com/"><img width="300" height="300" src="https://user-images.githubusercontent.com/49658988/127885907-b68ddad2-6f55-4daa-a05c-4fe2ea316baf.png" /></a>

# Google Sheets + Node.js/Express

Simple Node.js/Express app (with EJS frontend) that integrates with Google Sheets to read/update data. This application demos the functionality with a simple "Client Request"

---

## Getting Started

### Setup

You need to add a file to the root of this project called "credentials.json"

### First

Clone the repo to your local machine:

```bash
git clone https://github.com/T-Damer/next-sheet.git
```

Then cd into folder:

```bash
cd next-sheet
```

### Second

Add the `.env` and `secrets.json` files to your repo, consider looking at `.env.example`

List of variables:

| GOOGLE_APPLICATION_CREDENTIALS                                                                                                                                                                                               | SHEET_ID                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| This is your secrets, which you get from [google.apis](https://console.cloud.google.com/apis/), connect google.sheets -> credentials -> your account -> keys -> create new api key like JSON -> paste data to `secrets.json` | Share your sheets so anyone can edit and copy-paste only id in url after `/d/{yourSheetId}` |

### Third

Run the development server:

`nodemon index.js`
(`node index.js` for deployment)

Open in browser:
[localhost:1337](http://localhost:1337/)

---

<a href="https://www.buymeacoffee.com/tdamer"><img src="https://img.buymeacoffee.com/button-api/?text=Support me with a coffee&emoji=☕️&slug=tdamer&button_colour=ffcc33&font_colour=000&font_family=Lato&outline_colour=000&coffee_colour=000"></a>
