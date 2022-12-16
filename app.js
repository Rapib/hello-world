
function bot () {
    if (confirm("Are you a bot?")) { 
    document.write("What is a bot doing here?");
} else { 
    document.write("Welcome human?");
}
}

let botcheck = prompt("please type 'human'");

while (botcheck != "human"){
    botcheck = prompt("Try again, please type 'human'");
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

function rate() {
    let rating = prompt("How many star will you give this page? Between 1-5 please.")
    
    if (rating>5){
        alert("Between 1-5 please.")
        rating = prompt("How many star will you give this page? Between 1-5 please.")
    }
    for (let i =0;i<rating; i++){
        document.write("<img src='star.gif' alt='star' width='15' heigth='20'/>");
    }

}
    