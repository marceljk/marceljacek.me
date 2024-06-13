/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  // theme: {
  //   defaultTheme: 'light',
  // },

  theme: {
    themes: {
      light: {
        colors: {
          primary: '#3f51b5', // Blue
          secondary: '#03a9f4', // Light Blue
          accent: '#e91e63', // Pink
          error: '#f44336', // Red
          warning: '#ff9800', // Orange
          info: '#00bcd4', // Cyan
          success: '#4caf50', // Green
          background: '#f5f5f5', // Light Grey Background
          card: '#ffffff', // White Card Background
          text: '#212121' // Dark Text
        }
      },
      dark: {
        colors: {
          primary: '#1e88e5', // Blue
          secondary: '#03a9f4', // Light Blue
          accent: '#ff4081', // Pink
          error: '#e53935', // Red
          warning: '#fb8c00', // Orange
          info: '#00acc1', // Cyan
          success: '#43a047', // Green
          background: '#121212', // Dark Background
          card: '#1e1e1e', // Dark Card Background
          text: '#ffffff' // Light Text
        }
      }
    }
  }
})
