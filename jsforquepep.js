function Submit(){
    let score = 0;
    var x = document.getElementById('c1');
    if(x.checked == true) {
        score++;
    }
    var x = document.getElementById('c2');
    if(x.checked == true) {
        score++;
    }
    var x = document.getElementById('c3');
    if(x.checked == true) {
        score++;
    }
    var x = document.getElementById('c4');
    if(x.checked == true) {
        score++;
    }
    var x = document.getElementById('c5');
    if(x.checked == true) {
        score++;
    }
    alert('Score   :    ' + score + ' / 5');
}