import FullCalendar from '@fullcalendar/react';
import React, { useState } from 'react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, useTheme, Typography } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import { formatDate } from '@fullcalendar/core';


const CalenderScheduler = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                allDay: selected.allDay
            })
        }

    }

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }


    return (
        <Box m="20px">
            <Header title="CALENDER" subTitle="Full Calender Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDER SIDE BOX */}
                {/* flex:row, shrink, width-percentage of space */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((event) => (<ListItem key={event.id}
                            sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={<Typography>{formatDate(event.start, {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric"
                                })}</Typography>}
                            />
                        </ListItem>))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                    height="75vh"
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                        listPlugin
                    ]}
                    headerToolbar={{
                            start:"prev,next today",
                            center:"title",
                            right:"dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                    }}
                    initialView='dayGridMonth'
                    editable={true}
                    selectable={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                    eventsSet={(events) => setCurrentEvents(events)}
                    initialEvents={[
                        { id: '1234', title:"Event", start: "2023-10-28", end: '2023-09-29'},
                        { id: '1235', title:"timed Event", start: '2023-10-20T12:30:00', allDay: false},
                        { id: '1236', title:"All Day timed Event", start: "2023-10-30", allDay: true},
                    ]}
                    
                    
                    />
                </Box>

            </Box>
        </Box>
    )
}

export default CalenderScheduler;
