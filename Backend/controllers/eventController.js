// returns an event
// Method Get
const getEvents = (req,res) => {
    res.status(200).json({message:"Get event"})
    }
    
// posts an event
// Method Post
const postEvent= (req,res) => {
    // print the text
console.log(req.body)
    res.status(200).json({message:"Posted an event"})
    }
    // Method Put
    const updateEvent = (req,res) => {
    res.status(200).json({message:`Updated the event ${req.params.id}`})}
    //Method Delete
    const deleteEvent = (req,res) => {
    res.status(200).json({message:`Deleted the event ${req.params.id}`})}
    //export all the methods
    // module.exports means letting the other files know which functions they can use
    module.exports = {getEvents,postEvent,updateEvent,deleteEvent,}