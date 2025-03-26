<template>
  <div class="container">
    <select v-model="selectedAlbum" @change="updateAlbumPath" class="album-select">
      <option v-for="album in albums" :key="album" :value="album">{{ album }}</option>
    </select>
    <AudioPlayer :albumPath="albumPath" :tracks="albumTracks"/>
  </div>
</template>
<script>
import AudioPlayer from '@/components/AudioPlayer.vue';
import Albums from '../../public/audio/Albums.js';

export default {
  components: {
    AudioPlayer
  },
  data() {
    return {
      albums: [],
      selectedAlbum: '',
      albumPath: null,
      albumTracks: []
    }
  },
  created() {
    this.fetchAlbums();
  },
  methods: {
    fetchAlbums() {
      this.albums = Albums.albums.map(album => album.name);
    },
    updateAlbumPath() {
      this.albumPath = `/audio/${this.selectedAlbum}`;
      this.albumTracks = Albums.albums.find(album => album.name === this.selectedAlbum).tracks;
    }
  }
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.album-select {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>