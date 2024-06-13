<template>
  <v-card variant="flat">
    <v-card-title>
      <div class="d-flex align-center justify-space-between">
        <div>{{ projectInfo.title }}</div>
        <div>
          <v-btn
            variant="tonal"
            prepend-icon="mdi-open-in-new"
            :href="projectInfo.projectLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in new tab
          </v-btn>
        </div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-img
        :src="projectInfo.imageSrc"
        :lazy-src="projectInfo.lazyImageSrc"
      ></v-img>
      <div class="mx-1 my-2">
        {{ projectInfo.description }}
      </div>
      <div class="mx-1">
        <b>Techstack:</b>
        &nbsp;
        <span v-for="(tech, index) in projectInfo.techstack" :key="tech">
          {{ tech }}
          <span v-if="index + 1 !== projectInfo.techstack.length"> · </span>
        </span>
      </div>
    </v-card-text>
    <v-card-actions v-if="projectInfo.githubLink || projectInfo.detailsLink" class="d-flex justify-space-between mx-2 pt-0">
      <div></div>
      <div>
        <v-btn
          v-if="projectInfo.githubLink"
          class="mr-1"
          :href="projectInfo.githubLink"
          target="_blank"
          rel="noopener noreferrer"
          prepend-icon="mdi-github"
          variant="tonal"
        >
          Github
        </v-btn>
        <v-btn
          v-if="projectInfo.detailsLink"
          :to="projectInfo.detailsLink"
          variant="tonal"
          >Read more</v-btn
        >
      </div>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface ProjectInfo {
  title: string;
  description: string;
  techstack: string[];
  imageSrc: string;
  lazyImageSrc: string;
  projectLink: string;
  githubLink?: string;
  detailsLink?: string;
}

interface Props {
  modelValue: ProjectInfo;
}

const props = defineProps<Props>();

const projectInfo = computed(() => props.modelValue);
</script>
