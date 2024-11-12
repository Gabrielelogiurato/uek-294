const container = document.querySelector("h2:nth-of-type(2) + div");
const main = document.getElementsByTagName("main")[0];
const body = document.getElementsByTagName("body")[0];
const songList = document.createElement("ul");
main.append(songList);

const buttonsContainer = document.createElement("div");
buttonsContainer.style.width = "100%";
buttonsContainer.style.display = "flex";
buttonsContainer.style.gap = "10px";

const addThreeButton = document.createElement("button");
addThreeButton.innerText = "Add three more";

const removeThreeButton = document.createElement("button");
removeThreeButton.innerText = "Remove first three";

const randomizerButton = document.createElement("button");
randomizerButton.innerText = "Randomize Albums";

buttonsContainer.append(addThreeButton, removeThreeButton, randomizerButton);
container.prepend(buttonsContainer);

const albumsContainer = document.getElementById("images_container");

const songNames = [
  ["Echoes of the Past", "Lost Horizons", "Whispers in the Dark", "Beyond the Stars", "Shadows of Time"],
  ["Rising Sun", "Falling Rain", "Endless Night", "Winds of Change", "Dreams of Yesterday"],
  ["Heartbeats", "Sands of Time", "Crystal Waters", "Silent Echo", "Endless Journey"],
  ["Into the Light", "Mystic Waves", "Golden Skies", "Fading Memories", "Last Goodbye"],
  ["Electric Feel", "Fire Within", "Infinite Blue", "Sound of Silence", "Embers"],
  ["Pulse of Life", "Solitude", "Awakening", "Rhythms of the Heart", "Timeless"],
];


const header = document.getElementsByTagName("h2")[0];
const songHeader = document.createElement("h2");
songHeader.innerText = "Now Playing:";
songHeader.style.visibility = "hidden";

const songText = document.createElement("p");
songText.style.visibility = "hidden";

header.before(songHeader, songText);

const showPlayingMusic = (song) => {
  const link = document.createElement("a");
  link.append(song);
  songList.append(link);

  link.addEventListener("click", () => {
    songHeader.style.visibility = "visible";
    songText.style.visibility = "visible";
    songText.innerText = song.innerText;
  });
};

const showAlbumsSongs = (link) => {
  link.addEventListener("click", () => {
    songList.replaceChildren();
    const listNumber = parseInt(link.href.slice(link.href.length - 1)) - 1;
    const songs = songNames[listNumber];

    songs.forEach((songTitle) => {
      const songListItem = document.createElement("li");
      songListItem.innerText = songTitle;
      showPlayingMusic(songListItem);
    });
  });
};


document.querySelectorAll("#images_container a").forEach((link) => {
  showAlbumsSongs(link);
});

const getThreeRandomAlbums = (container) => {
  for (let i = 0; i < 3; i++) {
    const linkForImage = document.createElement("a");
    const img = document.createElement("img");

    const randomNumber = Math.floor(Math.random() * 6 + 1);
    img.src = `https://loremflickr.com/480/480/cd,album,cover?random=${randomNumber}`;
    img.alt = `Random cover ${randomNumber}`;
    linkForImage.href = `#${randomNumber}`;
    
    linkForImage.append(img);
    container.append(linkForImage);

    showAlbumsSongs(linkForImage);
  }
};

const addThreeAlbums = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("small_container");
  getThreeRandomAlbums(imageContainer);
  albumsContainer.append(imageContainer);
};

addThreeButton.addEventListener("click", addThreeAlbums);

removeThreeButton.addEventListener("click", () => {
  if (albumsContainer.children.length > 1) {
    albumsContainer.children[1].remove();
    songList.replaceChildren();
  }
});

const randomizer = () => {
  const allAlbums = document.querySelectorAll(".small_container");
  allAlbums.forEach((album) => {
    album.replaceChildren();
    getThreeRandomAlbums(album);
  });
};

randomizerButton.addEventListener("click", randomizer);
