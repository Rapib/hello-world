
alert("Everything is fine! Don't worry!");


function bot () {
    if (confirm("Are you a bot?")) { 
    document.write("What is a bot doing here?");
} else { 
    document.write("Welcome human?");
}
}


function name() {
    let name = prompt("What is your name?");
    if (name == ""){
        name = prompt("Come on, it is just a name?");
    }
document.write("Welcome, " + name)
}

function movie() {
    let movie = prompt("What is your favorite movie?", "");
                    document.write(movie);
}