import { marked } from 'marked';

export default async function loadMarkdown(fileName: string) {
  try {
    const file = await import(`./../markdown/projects/${fileName}.md?raw`);
    const markdownContent = file.default;
    return marked(markdownContent);
  } catch (error) {
    console.error("Error loading markdown file:", error);
    return null;
  }
}