<template>
    <div>
        <audio ref="audio" :src="audioSrc" @ended="playNextTrack" @timeupdate="updateProgress"></audio>
        <div class="current-track">
            <p>{{ tracks[currentTrackIndex] }}</p>
        </div>
        <div class="controls">
            <button @click="back">⏮</button>
            <button @click="play">▶</button>
            <button @click="pause">⏸</button>
            <button @click="skip">⏭</button>
            <button @click="stop">⏹</button>
        </div>
        
        <input type="range" min="0" :max="duration" v-model="currentTime" @input="scrub" class="scrub-timeline" />
        <div class="timecodes">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
        </div>

        <div>
            <div v-for="(file, index) in tracks" :key="file" class="track">
                <button @click="playTrack(index)">
                    ▶
                </button>
                <p>{{ file }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['albumPath', 'tracks'],
    data() {
        return {
            audioSrc: '',
            currentTrackIndex: 0,
            currentTime: 0,
            duration: 0
        }
    },
    methods: {
        play() {
            if (!this.audioSrc && this.tracks.length > 0) {
                this.playTrack(0);
            } else {
                this.$refs.audio.play();
            }
        },
        pause() {
            this.$refs.audio.pause();
        },
        stop() {
            this.$refs.audio.pause();
            this.$refs.audio.currentTime = 0;
        },
        playTrack(index) {
            this.currentTrackIndex = index;
            this.audioSrc = this.albumPath + '/' + this.tracks[index];
            this.$nextTick(() => {
                this.play();
            });
        },
        playNextTrack() {
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.playTrack(this.currentTrackIndex + 1);
            }
        },
        skip() {
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.playTrack(this.currentTrackIndex + 1);
            }
        },
        back() {
            if (this.currentTrackIndex > 0) {
                this.playTrack(this.currentTrackIndex - 1);
            }
        },
        updateProgress() {
            this.currentTime = this.$refs.audio.currentTime;
            this.duration = this.$refs.audio.duration;
        },
        scrub(event) {
            this.$refs.audio.currentTime = event.target.value;
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
        }
    }
}
</script>
<style>
.track {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.track button {
    margin-right: 10px;
}
.current-track {
    text-align: center;
    margin-bottom: 10px;
}
.current-track p {
    font-size: 1.5em;
    font-weight: bold;
}
.controls {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}
.controls button {
    font-size: 1.25em;
    padding: 8px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.scrub-timeline {
    display: block;
    width: 100%;
    margin: 0 auto 5px auto;
}
.timecodes {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 20px 10px;
}
</style>