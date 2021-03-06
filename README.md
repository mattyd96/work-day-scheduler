# Work Day Scheduler

A work day scheduler that will allow a user to save events in hour time slots for the generic workday schedule. It is implemented using 
local storage for persistant data and coded to meet the following user story and acceptance criteria. This is built from provided starting
code using Bootstrap, jquery, and moment.js.

<br/>
## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


## Screenshot

![Quiz Demo GIF](./assets/demo_images/demo.gif)

## Notes

For this one I tried to make it as much as possible using the existing classes. Only minor changed were done to make the layout workout and to make some elements of the button icon transistion more natural.

## Links

[Live Website](https://mattyd96.github.io/work-day-scheduler/)  

[My Github Account](https://github.com/mattyd96)