console.log( 'js' );

$(document).ready( onReady );

function onReady(){
    console.log( 'jq' );
    $("#add-record").on('click', function(event){
        event.preventDefault();
        //prevent default prevents page refresh on pressing submit button
        
        addRecord( getNewRecord() );
    })
    getAllRecords();
}

function getNewRecord(){
    let record = {
        artist: $("#in-artist").val(),
        album: $("#in-album").val(),
        year: $("#in-year").val(),
        genre: $("#in-genre").val(),
    }
    return record;
}

function addRecord(record){
    $.ajax({
        method: 'POST',
        url: '/record',
        data: record
    }).then( function(response) {
        //clear input fields
        getAllRecords();
    }).catch( function(response){
        console.log('Something bad happened:', response.status );
    });
}

function getAllRecords(){
    $.ajax({
        method: 'GET',
        url: '/record'
    }).then( function(response) {
        displayAllRecords(response);
    });
}


function displayAllRecords(recordArray){
    let $recordsTarget = $('#records');
    $recordsTarget.empty();
    for(let record of recordArray){
        $recordsTarget.append(makeRowFor(record));
    }
}

function makeRowFor(record){
    console.log(record);
    let rowHtml = `<tr>
        <td>${record.artist}</td>
        <td>${record.album}</td>
        <td>${record.year}</td>
        <td>${record.genre}</td>
    </tr>`;
    return rowHtml;
}