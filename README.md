# audio-player
Bare bones web app for hosting and playing audio files and albums stored in the client

To set up locally, run in the audio-player-vue directory:
```sh
npm install
```

Then, inside the folder `public/audio/` add your albums as directories, for example:
```sh
public/audio/album1/
public/audio/album1/track1.mp3
public/audio/album1/art.jpg
```

Inside `public`, create a JavaScript file called `Albums.js`. Then structure it as follows so the app can find your files:
```javascript
export default {
    albums: [
        {
            name: 'album1',
            art: 'art.jpg',
            tracks: [
                'track1.mp3',
                'track2.mp3',
                // etc
            ],
        },
        {
            name: 'album2',
            art: 'art.jpg',
            tracks: [
                'track1.mp3',
                'track2.mp3',
                // etc
            ],
        },
        // etc
    ]
}
```

To export the app for hosting run, depending on your npm packages installed, either:
```sh
vue build
```
or
```sh
npm run build
```
and then your built app should be created in the 'dist' folder