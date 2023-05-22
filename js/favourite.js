const playFavButton = document.querySelector(".fav button");
playFavButton.addEventListener("click", () => {
    if (favSongIDs.length > 0) {
        let favouriteSongs = [];
        favSongIDs.forEach((id) => {
            favouriteSongs.push(songDetails[id]);
        })
        playingQueue = favouriteSongs;
        playQueue();
    }
    else {
        alert("No tiene niguna canción favorita en este momento!!");
    }
});