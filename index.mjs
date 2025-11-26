import express from 'express';
import fetch from 'node-fetch';
import inspirationalQuotes from 'inspirational-quotes';

// https://programming-topics.onrender.com/

const app = express();
const PORT = 3000;

// Set ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// static files
app.use(express.static('public'));

// app.get --> route
// route --> home
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// route --> first programmer
app.get('/first_programmer', (req, res) => {
    res.render('first_programmer', { title: 'The First Programmer' });
});

// route --> binary
app.get('/binary', (req, res) => {
    // Using inspirational-quotes package (Node Package requirement)
    const quote = inspirationalQuotes.getRandomQuote();
    res.render('binary', { 
        title: 'Why Binary?',
        quote: quote
    });
});

// route --> determined with API data
app.get('/choosing_language', async (req, res) => {
    try {
        // Using GitHub API to get programming language data (Web API requirement)
        const response = await fetch('https://api.github.com/repos/microsoft/vscode/languages');
        const languages = await response.json();
        
        res.render('choosing_language', { 
            title: 'Choosing a Programming Language',
            apiData: languages,
            api_name: 'GitHub API'
        });
    } catch (error) {
        console.error('API Error:', error);
        res.render('choosing_language', { 
            title: 'Choosing a Programming Language',
            apiData: null,
            api_name: 'GitHub API',
            error: 'Unable to fetch API data'
        });
    }
});

// route --> programming practice
app.get('/practice', (req, res) => {
    // Get another quote using the inspirational-quotes package
    const quote = inspirationalQuotes.getRandomQuote();
    res.render('practice', { 
        title: 'Programming Practice',
        quote: quote
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('');
    console.log('Available routes:');
    console.log('  - http://localhost:3000/');
    console.log('  - http://localhost:3000/first-programmer');
    console.log('  - http://localhost:3000/binary');
    console.log('  - http://localhost:3000/choosing-language');
    console.log('  - http://localhost:3000/practice');
    console.log('');
    console.log('Using Node Package: inspirational-quotes');
    console.log('Using Web API: GitHub API');
});
