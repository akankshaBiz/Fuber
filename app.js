const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const CarFleetManager = require('./src/CarFleetManager');

const carFleetManager = new CarFleetManager();

app.post('/book', (req, res) => {
  const { latitude, longitude, color } = req.body;
  const trip = carFleetManager.bookCar(latitude, longitude, color);
  const data = { tripId: trip.id, carColor: trip.car.color };

  res.send(JSON.stringify(data));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); /* eslint-disable-line no-console */
});

module.exports = app;
