export const syncGoogleCalendarLink = (name, start, end, day, room) => {
    // this method will return a link to sync a class schedule

  const startDateTime = getScheduleDateFormatted(day, start);
  const endDateTime = getScheduleDateFormatted(day, end);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE
    &text=${name}
    &dates=${startDateTime}/${endDateTime}
    &location=Universitas+Indonesia
    &details=Ruang+${room}
    &recur=RRULE:FREQ=WEEKLY;COUNT=16`
};

const dayToIntegerDay = (day="") => {
  switch (day.toLowerCase()) {
    case "minggu": return 0;
    case "senin": return 1;
    case "selasa": return 2;
    case "rabu": return 3;
    case "kamis": return 4;
    case "jumat": return 5;
    case "sabtu": return 6;
    default: return null;
  }
};

const getScheduleDateFormatted = (day, time) => {
  const intDay = dayToIntegerDay(day);
  const date = new Date();

  let diffDay = date.getDay() - intDay;
  diffDay = diffDay < 0 ? diffDay+7 : diffDay;
  date.setDate(date.getDate() + diffDay);

  date.setHours(...time.split("."), 0, 0);

  return date.toISOString().replace(/:|-/g, "").split(".")[0];
}