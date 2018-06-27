# Fuber
## A taxi service backend written in Node.js

### Problem Statement
You are the proprietor of füber, an on call taxi service.
* You have a fleet of cabs at your disposal, and each cab has a location, determined by it’s latitude and longitude.
* A customer can call one of your taxis by providing their location, and you must assign the nearest taxi to the customer.
* Some customers are particular that they only ride around in pink cars, for hipster reasons. You must support this ability.
* When the cab is assigned to the customer, it can no longer pick up any other customers
* If there are no taxis available, you reject the customer's request.
* The customer ends the ride at some location. The cab waits around outside the customer’s house, and is available to be assigned to another customer.


### Structure
There are 3 objects in this system:
1. A Car
2. A CarFleetManager
3. A Trip

The primary goal of `CarFleetManager` is to act as a broker while booking the car for a user. The `Trip` object has all the info
about the trip, like "distance travelled", "total fare" etc. `Car` is the primary object which represents real world car, with
color and priceDescription as properties.

### End-Points
1. Post "/book": For booking a car.

Request:
```
{
	"latitude": "12.00",
	"longitude": "11.25",
	"color": "black"
}
```

Response:
```
{"tripId":1, "carColor":"black"}
```
