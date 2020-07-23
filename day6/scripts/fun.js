var user = prompt("enter your name");
document.write("Welcome " + user +" !! have a good day ." );

//dark

function turnDark(){

    var element = document.body;
    element.classList.toggle("dark-mode")
}


//clock

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;

}
clock();
setInterval(clock,1000);