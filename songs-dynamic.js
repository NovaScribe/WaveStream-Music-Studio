// songs-dynamic.js
// Dynamically add songs to the homepage from songs-dynamic.js

function addSongsToHome(songs) {
    var placeholderBox = document.getElementById('homepage-placeholder-box');
    if (!placeholderBox) return;
    placeholderBox.innerHTML = '';
    songs.forEach(function (song) {
        var songDiv = document.createElement('div');
        songDiv.className = 'homepage-song-placeholder';
        var a = document.createElement('a');
        a.href = song.page;
        a.style.textDecoration = 'none';
        a.style.color = 'inherit';
        a.style.display = 'block';
        var img = document.createElement('img');
        img.src = song.cover;
        img.alt = 'Song Cover';
        img.onerror = function () {
            this.onerror = null;
            this.src = 'coverphoto/placeholder-500x500.jpg';
        };
        var infoDiv = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.textContent = song.title;
        var pYear = document.createElement('p');
        pYear.innerHTML = 'Year: <span>' + song.year + '</span>';
        var pLang = document.createElement('p');
        pLang.innerHTML = 'Language: <span>' + song.language + '</span>';
        var pMovie = document.createElement('p');
        pMovie.innerHTML = 'Movie: <span>' + song.movie + '</span>';
        var pArtist = document.createElement('p');
        pArtist.innerHTML = 'Artist: <span>' + song.artist + '</span>';
        infoDiv.appendChild(h2);
        infoDiv.appendChild(pYear);
        infoDiv.appendChild(pLang);
        infoDiv.appendChild(pMovie);
        infoDiv.appendChild(pArtist);
        a.appendChild(img);
        a.appendChild(infoDiv);
        songDiv.appendChild(a);
        placeholderBox.appendChild(songDiv);
    });
}

var songs = [
    {
        title: 'Minnalvala - Karaoke Non Copyright',
        year: '2025',
        language: 'Malayalam',
        movie: 'Narivetta',
        artist: 'Jakes Bejoy, Sid Sriram, and Sithara',
        cover: 'coverphoto/Minnalvala-500x500.jpg',
        page: 'minnalvala.html'
    },{
        title: 'Bavra-Mann - Karaoke',
        year: '-',
        language: 'Malayalam',
        movie: 'Mayaanadhi',
        artist: '-',
        cover: 'coverphoto/bavra-mann.jpg',
        page: '/Bavra-Mann-Mayaandhi.html'
    }
];

addSongsToHome(songs);
