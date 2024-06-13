<template>
  <div>
    <v-card variant="text">
      <div class="d-flex align-center justify-space-between">
        <div style="width: calc(100vw - 150px)">
          <v-card-title class="text-h5 text-wrap welcome-header">
            <span>Hi👋</span> <span>Ich bin <b>Marcel</b></span>
          </v-card-title>

          <v-card-subtitle class="subtitle">
            <span>
              <v-icon>mdi-account</v-icon>
              Student / Software Engineer
            </span>
            <span>
              <v-icon>mdi-map-marker</v-icon>
              Bad Rappenau, Baden-Württemberg
            </span>
          </v-card-subtitle>
        </div>
        <div>
          <v-avatar class="ma-3" size="100">
            <v-img src="../assets/profilePicture.webp"></v-img>
          </v-avatar>
        </div>
      </div>
      <v-card-text class="text-body-1">
        I am currently studying Applied Computer Science at Heilbronn University
        of Applied Sciences and am writing my Bachelor's thesis in the field of
        <b>web development</b>.
      </v-card-text>
    </v-card>

    <v-card variant="text">
      <v-card-title class="text-h5">Projects</v-card-title>
      <v-card-text class="text-body-1">
        <v-row class="my-2">
          <v-col
            md="6"
            cols="12"
            v-for="project in projects"
            :key="project.title"
          >
            <project-card :modelValue="project"></project-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card variant="text">
      <v-card-title class="text-h5">CV</v-card-title>
      <v-card-text class="text-body-1">
        <v-timeline align="start" side="end">
          <v-timeline-item v-for="(item, index) in cv" :key="index">
            <template v-slot:opposite>
              <span>{{ item.timeRange }}</span>
            </template>
            <div>
              <div class="text-h6">{{ item.title }}</div>
              <div class="text-body-2">{{ item.company }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>

    <div class="d-flex justify-space-around">
      <div class="d-flex ga-2">
        <v-btn
          variant="flat"
          href="https://github.com/marceljk"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-github"
        >
        </v-btn>
        <v-btn
          variant="flat"
          href="https://www.linkedin.com/in/marcel-jacek-a1298b238/"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-linkedin"
        >
        </v-btn>
        <v-btn
          variant="flat"
          href="mailto:contact@marceljacek.me"
          target="_blank"
          rel="noopener noreferrer"
          icon="mdi-email"
        >
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type ProjectInfo = {
  title: string;
  description: string;
  techstack: string[];
  imageSrc: string;
  lazyImageSrc: string;
  projectLink: string;
  githubLink?: string;
  detailsLink?: string;
};

const projects: ProjectInfo[] = [
  {
    title: "Gym Visitor Stats",
    description:
      "A web app that visualises the history of visitors to a fitness studio and also compares this with other days of the week.",
    techstack: ["Vue.js", "Express.js", "SQLite"],
    imageSrc: "/assets/gym-stats-screenshot.webp",
    lazyImageSrc: "src/assets/gym-stats-screenshot-low-res.webp",
    githubLink: "https://github.com/marceljk/gym-tracker-web",
    projectLink: "https://gym.marceljacek.me",
    detailsLink: "/project/gym-stats"
  },
  {
    title: "PV Stats",
    description:
      "A simple dashboard for a PV system to read out the current and historical values of the PV system.",
    techstack: ["Vue.js", "Node.js", "Firebase Hosting & Realtime Database"],
    imageSrc: "/assets/pv-tracker-screenshot.webp",
    lazyImageSrc: "/assets/pv-tracker-screenshot-low-res.webp",
    githubLink: "https://github.com/marceljk/pv_tracker",
    projectLink: "https://pv.marceljacek.me",
  },
  {
    title: "Mon âme Café",
    description:
      "The website is the café's digital business card and contains the opening hours, contact details and menu.",
    techstack: ["Wordpress", "Elementor"],
    imageSrc: "/assets/mon-ame-screenshot.webp",
    lazyImageSrc: "/assets/mon-ame-screenshot-low-res.webp",
    projectLink: "https://moname.cafe",
  },
];

const cv = [
  {
    title: "Bachelor thesis",
    company: "Bosch Engineering GmbH",
    timeRange: "since 03/2024",
  },
  {
    title: "Working Student - Full-Stack Web Developer",
    company: "Bosch Engineering GmbH",
    timeRange: "03/2023 - 02/2024",
  },
  {
    title: "Intern - Full-Stack Web Developer",
    company: "Bosch Engineering GmbH",
    timeRange: "09/2022 - 03/2023",
  },
  {
    title: "Working student - Safety driver for autonomous shuttles",
    company: "Schwarz Mobility Solutions GmbH",
    timeRange: "04/2022 - 01/2023",
  },
];
</script>

<style scoped>
.subtitle {
  white-space: pre-wrap;
}

.subtitle span {
  display: inline-block;
}

.welcome-header {
  display: flex;
  flex-wrap: wrap;
}

.welcome-header > * {
  min-width: fit-content;
}
</style>
