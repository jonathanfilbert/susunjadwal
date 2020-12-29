# Susun Jadwal

Susun Jadwal is an open source tool to plan class schedules for university students.

Susun Jadwal by Ristek Fasilkom UI. https://ristek.cs.ui.ac.id/susunjadwal/

Monorepo setup with React frontend and Flask backend.

THIS OPEN SOURCE PROJECT Licenced with **MIT LICENCE**

## Resource
development repository: https://github.com/jonathanfilbert/susunjadwal \
Application deployed: https://susunjadwal.cs.ui.ac.id/ \
Original repository from RISTEK: https://github.com/RistekCSUI/susunjadwal/


## Developed by OSSD Team
- **Ubah Jadwal**\
allow user edit their schedule after saving them on *user_schedule* 

- **Duplicate Jadwal**\
user can duplicating their saved schedule.


## Next Development Issue
- **Refine The Frontend User Interface, Icons, Assets, etc**\
keep the design consistent

- **Synchronize Schedule with calendar app (Google Calendar, iCalendar, etc)**\
check API for using calendar application service.

## Thanks to OSSD Team
developed with love from: 
- [Jonathan Filbert](https://github.com/jonathanfilbert)
- [Sage](https://github.com/laymonage)
- [Leonardo](https://github.com/leleonardo81)


## Structure explained

```
backend/
  app/                // general views
  models/             // mongoDB models
  scraper/            // courses (academic.ui.ac.id) scraper
  sso/                // SSO UI authentication logic
  README.md           // important info
  requirements.txt    // dependency list
  start.sh            // script to start server
  ...
frontend/
  public/             // general configuration
  src/                // react stuff (where the fun happens)
  README.md           // important info
  package.json        // dependency list
  ...
README.md             // workspace-wide information shown in github
```

## Contributing Guide

Feel free to contribute by submitting a pull request.
