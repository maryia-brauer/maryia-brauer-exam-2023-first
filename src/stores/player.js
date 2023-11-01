import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
    state: () => ({
        playlist   : [],
        now_playing: {}, // SONG OBJECT
    }),
    getters: {
        getNextSong(){
            const index = this.playlist.findIndex(song => song.id === this.now_playing.id);
            const nextIndex = index + 1;

            if (nextIndex >= 0 && nextIndex < this.playlist.length) {
                return this.playlist[nextIndex];
            } else {
                // Return false when there's no next song (end of playlist).
                return false;
            }
        },
        getPreviousSong() {
            const index = this.playlist.findIndex(song => song.id === this.now_playing.id);
            const previousIndex = index - 1;

            if (previousIndex >= 0) {
                return this.playlist[previousIndex];
            } else {
                // Return false when there is no previous song.
                return false;
            }
        },
        getNowPlayingSongId() {
            return this.now_playing?.id;
        },
        getNowPlaying() {
            return this.now_playing;
        },
        getNowPlayingAlbumID() {
            return this.now_playing?.album?.id ?? null;
        },
        getNowPlayingSongName() {
            return this.now_playing?.name ?? '';
        },
        getNowPlayingSongImage() {
            return this.now_playing?.album?.images[1].url ?? '';
        },
        getNowPlayingArtists() {
            return this.now_playing?.artists?.map(artist => artist.name).join(', ');
        },
        getNowPlayingSongPreview() {
            return this.now_playing?.preview_url;
        }
    },
    actions: {
        setPlaylist(songs) {
            this.playlist = songs;
        },
        setNowPlaying(song) {
            this.now_playing = song;
        },
        resetNowPlaying() {
            this.now_playing = {};
        },
    }
})
