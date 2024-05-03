<template>
  <!-- <HelloWorld /> -->

  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto">
      <v-card variant="text">
        <div class="d-flex align-center justify-space-between">
          <div style="width: calc(100vw - 150px)">
            <v-card-title class="text-h5 text-wrap">
              Hi👋 Ich bin <b>Marcel</b>
            </v-card-title>

            <v-card-subtitle class="subtitle">
              <span>
                <v-icon>mdi-account</v-icon>
                Student / Softwareentwickler
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
          Aktuell studiere ich Angewandte Informatik an der Hochschule Heilbronn und 
          schreibe meine Bachelorarbeit im Bereich der
          <b>Webentwicklung</b>.
        </v-card-text>
      </v-card>

      <v-card variant="text">
        <v-card-title class="text-h5">Projekte</v-card-title>
        <v-card-text class="text-body-1">
          In meiner Freizeit entwickle ich kleine Projekte, um mein Alltag zu
          vereinfachen.
          <v-row class="my-2">
            <v-col md="6" cols="12">
              <v-card>
                <v-card-title>
                  Gym Visitor Stats
                  <v-btn
                    flat
                    icon="mdi-open-in-new"
                    href="https://gym.marceljacek.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-img src="./../assets/gym-stats-screenshot.webp"></v-img>
                  <div class="mx-1 my-2">
                    Visualisierung der Besucherzahl von einem Fitnessstudio mit
                    Statistiken
                  </div>
                  <div class="mx-1">
                    <b>Techstack:</b> Vue.js · Express.js · SQLite
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card>
                <v-card-title>
                  PV Stats
                  <v-btn
                    flat
                    icon="mdi-open-in-new"
                    href="https://pv.marceljacek.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <v-img src="./../assets/pv-tracker-screenshot.webp"></v-img>
                  <div class="mx-1 my-2">
                    Darstellung von Live sowie historische Daten einer PV Anlage
                  </div>
                  <div class="mx-1">
                    <b>Techstack:</b> Vue.js · Node.js · Firebase Hosting &
                    Realtime Database
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card variant="text">
        <v-card-title class="text-h5">Lebenslauf</v-card-title>
        <v-card-text class="text-body-1">
          <v-timeline align="start" side="end">
            <v-timeline-item>
              <template v-slot:opposite>
                <span>seit 03/2024</span>
              </template>
              <div>
                <div class="text-h6">Bachelorarbeit</div>
                <div class="text-body-2">Bosch Engineering GmbH</div>
              </div>
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite>03/2023 - 02/2024</template>
              <div>
                <div class="text-h6">
                  Werkstudent - Full-Stack Webentwickler
                </div>
                <div class="text-body-2">Bosch Engineering GmbH</div>
              </div>
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite>09/2022 - 03/2023</template>
              <div>
                <div class="text-h6">Praktikant - Full-Stack Webentwickler</div>
                <div class="text-body-2">Bosch Engineering GmbH</div>
              </div>
            </v-timeline-item>

            <v-timeline-item>
              <template v-slot:opposite>04/2022 - 01/2023</template>
              <div>
                <div class="text-h6">
                  Werkstudent - Sicherheitsfahrer für autonome Shuttles
                </div>
                <div class="text-body-2">Schwarz Mobility Solutions GmbH</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
.subtitle {
  white-space: pre-wrap;
}

.subtitle span {
  display: inline-block;
}

@media screen and (min-width: 900px) {
  .v-responsive {
    max-width: 900px;
  }
}
</style>
