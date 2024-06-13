<template>
  <div v-html="markdown"></div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import loadMarkdown from "../utils/loadMarkdown";

const route = useRoute();
const router = useRouter();

const markdown: Ref<string | null> = ref(null);

const updateMarkdown = async (projectName: string | string[]) => {
  if (typeof projectName !== "string") return;

  markdown.value = await loadMarkdown(projectName);
  if (markdown.value == null) {
    router.push("/");
  }
};

onMounted(() => {
  updateMarkdown(route.params.project);
});

watch(
  () => route.params.project,
  async (newVal: string | string[]) => {
    updateMarkdown(newVal);
  }
);
</script>

<style>
.app-screenshot-image {
  margin: 8px;
  width: 350px;
}

@media screen and (max-width: 700px) {
  .app-screenshot-image {
    margin: 8px;
    width: 100%;
  }
}
</style>