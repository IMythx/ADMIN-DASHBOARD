import "@fullcalendar/react/dist/vdom";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ThemeContext } from "../../Theme";
import { useContext, useState } from "react";
import PageHeader from "../../components/global/PageHeader";
import classes from "./calendar.module.css";
import EventItem from "../../components/calendar/EventItem";

const Calendar = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <section className={`${classes.calendar} ${darkTheme && classes.dark}`}>
      <PageHeader
        title={"Calendar"}
        subTitle={"Full Calendar Interactive Page"}
      />
      <div className={classes.container}>
        <div className={classes.events}>
          <p>Events</p>
          {currentEvents.map((event) => (
            <EventItem
              key={event.id}
              title={event.title}
              subTitle={formatDate(event.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            />
          ))}
        </div>
        <FullCalendar
          height="75vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-09-28",
            },
          ]}
        />
      </div>
    </section>
  );
};
export default Calendar;
