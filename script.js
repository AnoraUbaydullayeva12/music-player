const playButton = document.querySelector('.controls button:nth-child(2)');
const prevButton = document.querySelector('.controls button:nth-child(1)');
const nextButton = document.querySelector('.controls button:nth-child(3)');
const audio = new Audio();
const progressBar = document.querySelector('.fill');
const progressContainer = document.querySelector('.bar');
const playlistItems = document.querySelectorAll('.song');

let currentSongIndex = 0;

const playlist = [
    { title: "He Won’t Go", artist: "Adele", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", cover: "https://www.rl360.com/top10/images/music-festivals/cover-photo.jpg" },
    { title: "Let Me Down Slowly", artist: "Alec Benjamin", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUDDGMq3f4eBv4EmzZ7ZMqYHA-cGbwrV-Zg&s" },
    { title: "Shape of You", artist: "Ed Sheeran", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", cover: "https://static.vecteezy.com/system/resources/previews/004/988/115/non_2x/gradient-illustration-design-of-sound-wave-symbol-free-vector.jpg" },
    { title: "Shape of You", artist: "Nevalyus", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", cover: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2024/03/woman-listening-to-music-with-headphones.jpg" },
    { title: "Shape of You", artist: "Ed Karen", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAsAO228YpDQ0gwmbdxxC5_CCs3YMGZ6U_g&s" }
];

// Qo‘shiqni yuklash
function loadSong(song) {
    document.querySelector('.player h2').textContent = song.title;
    document.querySelector('.player p').textContent = song.artist;
    document.querySelector('.album-cover').src = song.cover;
    audio.src = song.src;
}

// O‘ynatish/Pauza qilish
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸";
    } else {
        audio.pause();
        playButton.textContent = "▶";
    }
}

// Oldingi qo‘shiq
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    audio.play();
}

// Keyingi qo‘shiq
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(playlist[currentSongIndex]);
    audio.play();
}

// Progress bar
audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
});

// PlayList qo‘shiq tanlash
playlistItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentSongIndex = index;
        loadSong(playlist[currentSongIndex]);
        audio.play();
        playButton.textContent = "⏸";
    });
});

// Boshlang‘ich qo‘shiq
loadSong(playlist[currentSongIndex]);

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
