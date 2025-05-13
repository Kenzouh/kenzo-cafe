const express = require('express');
const path = require('path');

const app = express();

// Serves the static files and 'views' & 'partials' make the CSS connectivity work
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'views', 'partials')));


app.use(express.static(path.join(__dirname, 'src'))); // Tailwind CSS
app.use(express.static(path.join(__dirname, 'public'))); // JS folder

app.use('/img', express.static(path.join(__dirname, 'img')));

app.use('/fonts', express.static(path.join(__dirname, 'fonts'))); // Fonts


//? ========================= Pages =========================

//* Home Page
app.get('/kenzoCafe', (req, res) => {
    res.render('home/index');
});


//* Products Page
app.get('/kenzoCafe/products/sweetsAndBeverages', (req, res) => {
    res.render('products/sweetsAndBeverages');
});


//* Order Page
app.get('/kenzoCafe/order/orderSweetsAndBeverages', (req, res) => {
    res.render('order/orderSweetsAndBeverages');
});

    // Payment Page: Payment Successful Page
    app.post('/kenzoCafe/order/success', (req, res) => {
        res.render('order/purchaseSuccessful');
    });


//* Special Offers Page
app.get('/kenzoCafe/specialOffers', (req, res) => {
    res.render('specialOffers/specialOffers');
});


//* Loyalty Programs Pages

    //? Trip to Switzerland
    app.get('/kenzoCafe/loyalty/switzerlandTrip', (req, res) => {
        res.render('loyaltyPrograms/switzerlandTrip');    
    });

    //? Trip to the Factory
    app.get('/kenzoCafe/loyalty/factoryTrip', (req, res) => {
        res.render('loyaltyPrograms/factoryTrip');
    });


//* Customer Review Page
app.get('/kenzoCafe/customerReviews', (req, res) => {
    res.render('customerReviews/reviews');
});


//* FAQs Page
app.get('/kenzoCafe/faqs', (req, res) => {
    res.render('faqs/faqs');
});


//* About Us
app.get('/kenzoCafe/aboutUs', (req, res) => {
    res.render('aboutUs/aboutUs');
});

// Contact
app.get('/kenzoCafe/contact', (req, res) => {
    res.render('contact');
});

app.listen(3000, () => {
    console.log("Running on port 3000!");
    console.log("http://localhost:3000/kenzoCafe");
});