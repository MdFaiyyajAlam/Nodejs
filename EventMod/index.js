// Events Module

// Node js has a built-in module, called "Events",
// Where you can create-, fire-, and listen for -your own events

// Example 1 Registering for the event to be fired only one time using once.
// Example 2 Create an event emitter instance and register a couple of callbacks
// Example 3 Registering for the event with callback parameters.

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on("sayMyName",() => {
//     console.log("your name is vinod");
// });
// event.on("sayMyName",() => {
//     console.log("your name is bahadur");
// });
// event.on("sayMyName",() => {
//     console.log("your name is thapa");
// });

// event.emit("sayMyName");


event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200,"Ok");

// The  concept is quite simple : emitter objects emit named events that cause
// previously registered listeners to be called .so, an emitter object
// basically has two main features:

// Emitting name events . 
// Registering and unregistering listener functions.

