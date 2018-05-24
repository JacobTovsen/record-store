class Record {
    constructor( artist, albumName, year, genreList ){
        this.artist = artist;
        this.albumName = albumName;
        this.year = year;
        this.genreList = genreList;
    }

    addGenre(string){
        //Make sure that there is an array
        if (this.genreList == null){
            this.genreList = [];
        }
        //TODO - make sure we don't add the same one twice
        this.genreList.push(string);
    }//end genre list
}
module.exports = Record;