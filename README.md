# HW4: Express - Computer Science Topics

## Project Overview
This is a redo of HW1 using Express.js framework. The application displays information about various Computer Science topics with navigation, API integration, and Node package usage.

## Requirements Met

✅ **5 Routes and 5 Views:**
- `/` - Home page
- `/first-programmer` - Ada Lovelace page
- `/binary` - Why Binary page
- `/choosing-language` - Choosing a Programming Language page
- `/practice` - Programming Practice page

✅ **Web API Integration:**
- Uses **GitHub API** to fetch programming language data from VS Code repository
- Displays on the "Choosing a Programming Language" page
- Shows language names and file sizes

✅ **Node Package:**
- Uses **inspirational-quotes** package to display random inspirational quotes
- Displayed on both the Binary and Practice pages
- Shows quote text and author

✅ **Partials:**
- `header.ejs` - Contains HTML head, navigation menu, and opening main tag
- `footer.ejs` - Contains footer information and closing tags

✅ **Navigation Menu:**
- Present on all pages via the header partial
- Shows active page highlighting
- Links to all 5 pages

✅ **External CSS:**
- `public/css/style.css` - External stylesheet
- Original styling from HW1 preserved

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Technologies Used
- **Express.js** - Web framework
- **EJS** - Templating engine
- **Node-fetch** - For API calls
- **Inspirational-quotes** - Node package for quotes

## Project Structure
```
hw4-express/
├── index.mjs              # Main Express application
├── package.json           # Dependencies and scripts
├── public/
│   ├── css/
│   │   └── style.css     # External CSS file
│   └── img/              # Images folder (needs to be populated)
└── views/
    ├── partials/
    │   ├── header.ejs    # Header partial with navigation
    │   └── footer.ejs    # Footer partial
    ├── home.ejs
    ├── first_programmer.ejs
    ├── binary.ejs
    ├── choosing_language.ejs
    └── practice.ejs

```

## Notes
- **Node Package**: The `inspirational-quotes` package is used to display motivational quotes on the Binary and Practice pages.
- **Web API**: The GitHub API is used to fetch real programming language statistics from the VS Code repository on the Choosing Language page.
- The Web API data is fetched in the backend (index.mjs) and passed to the view, not called directly from the frontend.

## Author
CST336 Internet Programming. 2025© Um
