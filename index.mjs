import express from 'express';
import fetch from 'node-fetch';
import inspirationalQuotes from 'inspirational-quotes';

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files
app.use(express.static('public'));

// Route: Home page
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// Route: First Programmer page
app.get('/first-programmer', (req, res) => {
    res.render('first_programmer', { title: 'The First Programmer' });
});

// Route: Binary page with inspirational quote (Node Package)
app.get('/binary', (req, res) => {
    // Using inspirational-quotes package (Node Package requirement)
    const quote = inspirationalQuotes.getRandomQuote();
    res.render('binary', { 
        title: 'Why Binary?',
        quote: quote
    });
});

// Route: Choosing Language page with API data
app.get('/choosing-language', async (req, res) => {
    try {
        // Using GitHub API to get programming language data (Web API requirement)
        const response = await fetch('https://api.github.com/repos/microsoft/vscode/languages');
        const languages = await response.json();
        
        res.render('choosing_language', { 
            title: 'Choosing a Programming Language',
            apiData: languages,
            apiName: 'GitHub API'
        });
    } catch (error) {
        console.error('API Error:', error);
        res.render('choosing_language', { 
            title: 'Choosing a Programming Language',
            apiData: null,
            apiName: 'GitHub API',
            error: 'Unable to fetch API data'
        });
    }
});

// Route: Programming Practice page
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
