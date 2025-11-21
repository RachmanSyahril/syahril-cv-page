import React from "react";

const experiences = [
  {
    period: "2025-2025",
    periodDesc: "5 mo",
    title: "Cloami Dashboard",
    place: "Bandung",
    subTitle: "Full Stack Developer (Freelance)",
    desc: "a management dashboard for clothing brand factory outlet",
    children: (
      <>
        <h5>
          💻 Tech Stack: React.js, Nest.js, PostgreSQL, Tailwind

        </h5>
        <h5>
          🌍 Live Site(s):
          <a href="https://dashboard.cloami.com/" target="_blank" rel="noreferrer">
            dashboard.cloami.com
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2020-2025",
    periodDesc: "5 yrs 3 mo",
    title: "Telkom Indonesia",
    place: "Bandung, Jakarta, Remote",
    subTitle: "Software Engineer (Fulltime)",
    desc: "Developed and implemented real-time IoT data visualization solutions that enhanced tracking capabilities for over 1000+ devices, resulting in improved user engagement and satisfaction across the digital product portofolio.",
    children: (
      <>
        <h5>
          💻 Tech Stack: Vue.js, Nuxt.js, Vuex, React.js, Next.js, Redux,
          Leaflet, Chart.js, ECharts
        </h5>
        <h5>
          🌍 Live Site(s):
          <a href="https://antares.id/" target="_blank" rel="noreferrer">
            antares.id
          </a>
          ,
          <a href="https://indicar.id/" target="_blank" rel="noreferrer">
            indicar.id
          </a>
          ,
          <a href="https://ifms.telpro.co.id/" target="_blank" rel="noreferrer">
            ifms.telpro.co.id
          </a>
          ,
          <br />
          <a
            href="https://iot.kesehatan-digital.id/"
            target="_blank"
            rel="noreferrer"
          >
            iot.kesehatan-digital.id
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2025-2025",
    periodDesc: "1 mo",
    place: "Remote",
    title: "MeHealth Clinic (Pertamina)",
    subTitle: "Frontend Developer (Freelance)",
    desc: "Developed a clinic web application with features for patient management, appointment scheduling, medical records handling, and real-time data visualization, enhancing operational efficiency and patient care.",
    children: (
      <>
        <h5>💻 Tech Stack: NextJs, Antd</h5>
        <h5>
          🌍 Live Site(s):
          <a
            href="https://stg-klinik.mehealths.co.id/"
            target="_blank"
            rel="noreferrer"
          >
            mehealths.co.id
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2023-2023",
    periodDesc: "1 yr 1 mo",
    title: "Peacegen.id",
    place: "Remote",
    subTitle: "Frontend Developer (Freelance)",
    desc: "Developed an online education and student management platform, building interactive dashboards, student management tools, and dynamic content pages, improving user engagement and streamlining administrative processes",
    children: (
      <>
        <h5> 💻 Tech Stack: VueJs, NuxtJs, Vuex</h5>
        <h5>
          🌍 Live Site(s):
          <a
            href="https://pa21.peacegen.id/login/"
            target="_blank"
            rel="noreferrer"
          >
            pa21.peacegen.id
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2023-2023",
    periodDesc: "1 yr 1 mo",
    title: "SMILED KPI",
    place: "Jakarta, Remote",
    subTitle: "Frontend Developer (Freelance)",
    desc: "Developed the Online Information Portal System for the Indonesian National Broadcasting Commission (KPI), implementing interactive charts and statistics, an admin dashboard, user access control, and dynamic data forms.",
    children: (
      <>
        <h5>💻 Tech Stack: VueJs, NuxtJs, Vuex, Echart, ChartJs</h5>
        <h5>
          🌍 Live Site(s):
          <a href="https://smiled.kpi.go.id/" target="_blank" rel="noreferrer">
            smiled.kpi.go.id
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2019-2020",
    periodDesc: "1 yr 1 mo",
    title: "Ritase.com",
    place: "Bandung, Jakarta",
    subTitle: "Frontend Developer (Fulltime)",
    desc: "Developed a web application with a focus on interactive dashboards, user and company management, and real-time visualization of logistical, order, and shipment flows, while also implementing User Access Control (UAC) for secure role-based access.",
    children: (
      <>
        <h5>💻 Tech Stack: AngularJs, Google Map APIs</h5>
        <h5>
          🌍 Live Site(s):
          <a href="https://ritase.com/" target="_blank" rel="noreferrer">
            ritase.com
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2018-2018",
    periodDesc: "1 yr",
    title: "EZCar.id",
    place: "Jakarta",
    subTitle: "Fullstack Developer (Freelance)",
    desc: "Developed a web and mobile application with a focus on real-time data visualization, order flow tracking, user and company management, and report generation using data visualization, while implementing User Access Control (UAC) for secure access management.",
    children: (
      <>
        <h5>
          💻 Tech Stack: ReactJs + React Native (Expo), Redux, Antd Design,
          NodeJs, MongoDB, Google Map APIs
        </h5>
        <h5>
          🌍 Live Site(s):
          <a href="https://ezcar.id/" target="_blank" rel="noreferrer">
            ezcar.id
          </a>
        </h5>
      </>
    ),
  },
  {
    period: "2018-2018",
    periodDesc: "1 yr 3 mos",
    title: "Sahaware Teknologi Indonesia",
    place: "Bandung, Jakarta, Remote",
    subTitle: "Fullstack Developer (Freelance)",
    desc: "",
    children: (
      <>
        <h5>💻 Tech Stack: Javascript, JQuery, .Net Core</h5>
      </>
    ),
  },
  {
    period: "2017-2017",
    periodDesc: "1 yr 1 mo",
    title: "Teknoland Mitra Solusi",
    place: "Bandung",
    subTitle: "Fullstack Developer (Freelance)",
    desc: "",
    children: (
      <>
        <h5>💻 Tech Stack: Laravel, MySQL, sqlite, Bootstrap</h5>
      </>
    ),
  },
  {
    period: "2014-2016",
    periodDesc: "2 yrs 6 mos",
    title: "Skyline Semesta",
    place: "Cimahi",
    subTitle: "Mobile Developer",
    desc: "",
    children: (
      <>
        <h5>💻 Tech Stack: Java Android, Laravel, sqlite,</h5>
      </>
    ),
  },
  {
    period: "2013-2013",
    periodDesc: "1 yr 10 mos",
    title: "CV. Metacare",
    place: "Bandung",
    subTitle: "Technical Support Engineer",
    desc: "",
    children: (
      <>
        <h5>
          💻 Tech Stack: LAN, WAN, Network Routing, Ubuntu Server, CentOS
          Server, Interpersonal Skills
        </h5>
      </>
    ),
  },
];

export default experiences;
