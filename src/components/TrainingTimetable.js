import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./TrainingTimetable.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

/* Tähän voi merkata kalenteritapahtumat */

const myEventsList = [
    { start: new Date(), end: new Date(), title: " 18 Junnut" },
    { start: new Date(), end: new Date(), title: "19 Sennut" },
    { start: new Date(), end: new Date(), title: "20 Vyökoe" }
];

const TrainingTimetable = () => {
    return (
        <div className="Calendar">
            <h2>Harjoitusajat</h2>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default TrainingTimetable;