//Since the elements are assigned outside the event no values are assigned
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const source = document.getElementById("source");
const form = document.getElementById("form");
const allQuotes = document.getElementById("quotes");
const warning = document.getElementById("warning");
const loading = document.getElementById("warning");


//Buttons
const submit = document.getElementById("submit");
const update = document.getElementById("update");
const remove = document.getElementById("remove");

//Temp variables

//Event Modules
//import selectEvent from "./actions/select.js"
import submitEvent from "./actions/submit.js"
import updateEvent from "./actions/update.js"
import deleteEvent from "./actions/delete.js"
//Quotes
import getQuotes from "./actions/quotes.js"
//why does it not run
getQuotes(allQuotes);


//SUBMIT
submit.addEventListener("click", submitEvent)
//allQuotes.addEventListener("click", selectEvent)
if (update) update.addEventListener("click", updateEvent)
if (remove) remove.addEventListener("click", deleteEvent)

