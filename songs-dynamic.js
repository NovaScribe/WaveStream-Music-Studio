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
    },
    {
        title: 'Bavra-Mann - Karaoke',
        year: '-',
        language: 'Malayalam',
        movie: 'Mayaanadhi',
        artist: '-',
        cover: 'coverphoto/bavra-mann.jpg',
        page: 'Bavra-Mann-Mayaandhi.html'
    },
    {
        title: 'Uyire - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Gauthamante Radham',
        artist: '-',
        cover: 'coverphoto/uyire.jpg',
        page: '/Uyire-karaoke.html'
    },
    {
        title: 'Njan Jackson allada - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Ambili',
        artist: '-',
        cover: 'coverphoto/njan-jackson-allada.jpg',
        page: '/njan-allada-ambili.html'
    },
    {
        title: 'Mizhiyil Ninnum - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: '-',
        artist: '-',
        cover: 'coverphoto/mizhiyil-nunnum.jpg',
        page: '/Oru-Deivam-Thantha.html'
    },
    {
        title: 'Puthiyoru Pathayil - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: '-',
        artist: '-',
        cover: 'coverphoto/putiyoru-pathayil.jpg',
        page: '/putiyoru-pathayil-karaoke.html'
    },
    {
        title: 'Ezhutha Kadha - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Kumbalangi Nights',
        artist: '-',
        cover: 'coverphoto/ezhutha-kadha.jpg',
        page: '/ezhutha-kadha-karaoke.html'
    },
    {
        title: 'Koodu Vittu - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'June',
        artist: '-',
        cover: 'coverphoto/koodu-vittu.jpg',
        page: '/koodu-vittu-karaoke.html'
    },
    {
        title: 'Melle Enne.. Nooru.. - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Mandharam',
        artist: '-',
        cover: 'coverphoto/Melle-enne.jpg',
        page: '/Melle-enne-karaoke.html'
    },
    {
        title: 'Oduvile Theeyayi - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Varathan',
        artist: '-',
        cover: 'coverphoto/Oduvile-Theeyayi.jpg',
        page: '/Oduvile-Theeyayi-karaoke.html'
    },
    {
        title: 'Pulari mazhakal-Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Mandharam',
        artist: '-',
        cover: 'coverphoto/Pulari-mazhakal.jpg',
        page: '/Pulari-mazhakal-karaoke.html'
    },
    {
        title: 'Nee.. Pranayamothum-Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Varathan',
        artist: '-',
        cover: 'coverphoto/nee-pranayamodum.jpg',
        page: '/nee-pranayamodum-karaoke.html'
    },
    {
        title: 'Maanathe Kanalaali - Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Theevandi',
        artist: '-',
        cover: 'coverphoto/Maanthe-kanalaali.jpg',
        page: '/Maanthe-kanalaali-karaoke.html'
    },
    {
        title: 'ആനന്ദാമേ സർവ്വമാനന്ദാമേ- Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Aravindante Athidhikal',
        artist: '-',
        cover: 'coverphoto/poramo.jpg',
        page: '/aanandhame-sarvam-karaoke.html'
    },
    {
        title: 'Neramai Nilaa..Karaoke-Karaoke No-CopyRight',
        year: '-',
        language: 'Malayalam',
        movie: 'Poomaram',
        artist: '-',
        cover: 'coverphoto/neramai-nelaa.jpg',
        page: '/neramai-nelaa-karaoke.html'
    }
];

addSongsToHome(songs);
