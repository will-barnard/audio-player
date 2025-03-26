# audio-player
Bare bones web app for playing audio files and albums

To set up locally, run in the audio-player-vue directory:
```sh
npm install
```

Then, inside the folder `public/audio/` add your albums as directories, for example:
```sh
public/audio/album1/track1.mp3
```

Inside `public`, create a JavaScript file called `Albums.js`. Then structure it as follows:
```javascript
export default {
    albums: [
        {
            name: 'album1',
            tracks: [
                'track1',
                'track2',
                // etc
            ],
        },
        {
            name: 'album2',
            tracks: [
                'track1',
                'track2',
                // etc
            ],
        },
        // etc
    ]
}