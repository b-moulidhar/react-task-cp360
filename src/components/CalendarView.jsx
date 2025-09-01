import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/calendarSlice";
import BarGraphModal from "./BarGraphModal";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const dispatch = useDispatch();
  const { selectedDate, data } = useSelector((state) => state.calendar);
  const [showModal, setShowModal] = useState(false);

  const events = Object.keys(data).map((date) => ({
    title: `Data available`,
    start: moment(date, "DD-MM-YYYY").toDate(),
    end: moment(date, "DD-MM-YYYY").toDate(),
    allDay: true,
  }));

  const handleSelectSlot = (slotInfo) => {
    const dateStr = moment(slotInfo.start).format("DD-MM-YYYY");
    dispatch(setSelectedDate(dateStr));

    if (!data[dateStr]) {
      alert("No data found for the selected date.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectSlot}
      />
      {showModal && selectedDate && (
        <BarGraphModal
          date={selectedDate}
          data={data[selectedDate]}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CalendarView;
