const express = require('express');
const path = require('path');
const temperatureConversionService = require('./temperatureConversionService');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { result: null, temperature: '', inputUnit: '', outputUnit: '' });
  });
  

  app.post('/convert', async (req, res) => {
    try {
      const { temperature, inputUnit, outputUnit } = req.body;
      const conversionFunction = `${inputUnit}To${capitalizeFirstLetter(outputUnit)}`;
      const result = temperatureConversionService[conversionFunction](parseFloat(temperature));
      res.render('index', { result: result.toFixed(2), temperature, inputUnit, outputUnit });
    } catch (error) {
      res.status(500).send('An error occurred during conversion');
    }
  });
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
