const calendar = $('#calendar');
const currentDay =$('#currentDay');
const localStorageKeyName = 'calendar-schedule';

//update page with current time every second
const currentTime = setInterval(() => {
    currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 1000);

//sets colors of each timeblock based on current hour
const timeBlockColorSet = () => {
    let hour = moment().hour();
    let buttons = $('.saveBtn');
    
    Array.from(buttons).forEach(element => {
        let value = parseInt(element.value);
        if(value < hour) {
             $('#todo' + value).addClass('past');
        } else if(value == hour) {
            $('#todo' + value).addClass('present');
        } else {
            $('#todo' + value).addClass('future');
        }
    })
}


//get data from local storage
const getLocalStorage = () => {
    let storage = localStorage.getItem(localStorageKeyName);
    return storage == null ? {} : JSON.parse(storage);
}

//set data in local storage
const setLocalStorage = todos => {
    let storage = JSON.stringify(todos);
    localStorage.setItem(localStorageKeyName, storage);
}

//saves new todo to local storage
const saveTodo = event => {
    let button;

    event.target.tagName === 'BUTTON' ? 
    button = $(event.target).val() :
    button = $(event.target).parent().val();

    let text = $('#todo' + button).val();

    let todos = getLocalStorage();

    todos[button] = text;

    setLocalStorage(todos);
}

//updates text in todo textAreas from local storage
const setTodos = () => {
    let todos = getLocalStorage();
    let textAreas = $( "input[name*='todo']" );

    for(const todo in todos) {
        $('#todo' + todo).val(todos[todo]);
    }
}

//run these once dom is ready
const init = () => {
    setTodos()
    timeBlockColorSet();
}

//listener for save button clicks -> save todo to local storage
calendar.on('click', '.saveBtn', saveTodo);

//update colors on time blocks
const updateTimeBlockStatus = setInterval(timeBlockColorSet, 60000*5);

$(document).ready(init);