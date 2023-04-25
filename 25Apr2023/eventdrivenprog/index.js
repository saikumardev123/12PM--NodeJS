var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('order_placed', function (details) {
    console.log("order placed");
    console.log("----------------------------")
    console.log(details.name, details.price, details.restaurent_name)
})
eventEmitter.on('restaurent_confirm', function () {
    console.log("----------------------------")
    console.log("order accepted");
    console.log("----------------------------")

})
eventEmitter.on('delivered', function (message) {
    console.log("--------------------------")
    console.log(message);
})
eventEmitter.on('rating', function (rate) {
    console.log("--------------------------")
    console.log(rate);
})
eventEmitter.on('cancel', function (reason) {
    console.log("--------------------------")
    console.log(reason);
})
eventEmitter.on('delivery_assign', function (details) {
    console.log(details.name + " is assigned as your delivery partner");
})
eventEmitter.emit('order_placed', { name: 'Chicken Biryani', price: 250, restaurent_name: "Mehfil" });
eventEmitter.emit('restaurent_confirm');
eventEmitter.emit('delivery_assign', { name: "Kiran" });
//eventEmitter.emit('cancel', "Emergency");
eventEmitter.emit('delivered', "Your delivery is on time");
eventEmitter.emit("rating", "*****");
