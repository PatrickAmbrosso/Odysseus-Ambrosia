<template>
    <div class="youtube-card">
      <a :href="videoUrl" target="_blank" class="no-external-indicator">
        <div class="youtube-thumbnail">
          <img :src="thumbnailUrl" :alt="title">
        </div>
        <div class="youtube-info">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </a>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      videoUrl: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    computed: {
        thumbnailUrl() {
    // Extract video ID from the URL
    const videoId = this.videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?vi=|watch\?feature=player_embedded&v=|watch\?v=))([^&?#]+)/);
    if (videoId) {
        return `https://img.youtube.com/vi/${videoId[1]}/maxresdefault.jpg`;
    } else {
        return '';
    }
}
    }
  };
  </script>
  