$(function(){

    $("#movieForm").on("submit", function (evt){
        evt.preventDefault();
        let title = $("#movieName").val();
        let rating = $("#movieRating").val();
        
        let movieDiv = $("#movieList");
        movieDiv.append(`<div>${title}, ${rating} <button> Remove Me</button></div>`);

    })
    
    $("#movieList").on("click", "button", function (evt){
        $(this).parent().remove();
    })
})