// Import the express module
const express = require("express")
// Create the express router
const router = express.Router()
const {getEvents,postEvent,deleteEvent,updateEvent} =
require("../controllers/eventController")
// Handle the request with router
// /api/events
// get events
router.get('/', getEvents)
// post events
router.post('/', postEvent)

// update an event
router.put('/:id', updateEvent)

// delete and event
router.delete('/:id', deleteEvent)

// Export the router
module.exports = router