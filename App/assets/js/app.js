const list1 = document.querySelector('.option1');
const list2 = document.querySelector('.option2');
const list3 = document.querySelector('.option3');
const list4 = document.querySelector('.option4');
const list5 = document.querySelector('.option5');

const q1 = document.querySelector('.q1');
const q2 = document.querySelector('.q2');
const q3 = document.querySelector('.q3');
const q4 = document.querySelector('.q4');
const q5 = document.querySelector('.q5');

const ans1 = document.getElementById('aw1');
const ans2 = document.getElementById('aw2');
const ans3 = document.getElementById('aw3');
const ans4 = document.getElementById('aw4');
const ans5 = document.getElementById('aw5');

const survey = document.querySelector('.survey');
let result=0;

q2.style.display = 'none';
q3.style.display = 'none';
q4.style.display = 'none';
q5.style.display = 'none';

//First Question
list1.addEventListener('click', function() {
    q1.style.display = 'none';
    q2.style.display = 'block';
});

//Second Question
list2.addEventListener('click', function() {
    q2.style.display = 'none';
    q3.style.display = 'block';
});

//Third Question
list3.addEventListener('click', function() {
    q3.style.display = 'none';
    q4.style.display = 'block';
});

//Fourth Question
list4.addEventListener('click', function() {
    q4.style.display = 'none';
    q5.style.display = 'block';
});

//Fifth Question
list5.addEventListener('click', function() {
    q5.style.display = 'none';
});

//Resultado IF
function updateLink() {
    const element = document.getElementById('ans6');
    if (result === 1) {
        element.href = "assets/results/result1.html";
    } else if (result === 2) {
        element.href = "assets/results/result3.html";
    } else if (result === 3) {
        element.href = "assets/results/result2.html";
    } else if (result === 4) {
        element.href = "assets/results/result3.html";
    } else if (result === 5) {
        element.href = "assets/results/result4.html";
    } else {
        element.href = "#";
    }

    const element2 = document.getElementById('ans7');
    if (result === 1) {
        element2.href = "assets/results/result1.html";
    } else if (result === 2) {
        element2.href = "assets/results/result3.html";
    } else if (result === 3) {
        element2.href = "assets/results/result3.html";
    } else if (result === 4) {
        element2.href = "assets/results/result3.html";
    } else if (result === 5) {
        element2.href = "assets/results/result5.html";
    } else {
        element2.href = "#";
    }
}

//Results
ans1.addEventListener('click', function() {
    result = 1;
    updateLink();
});

ans2.addEventListener('click', function() {
    result = 2;
    updateLink();
});

ans3.addEventListener('click', function() {
    result = 3;
    updateLink();
});

ans4.addEventListener('click', function() {
    result = 4;
    updateLink();
});

ans5.addEventListener('click', function() {
    result = 5;
    updateLink();
});


//Alert
ans6.addEventListener('click', function() {
    alert("Estás a punto de conocer tu resultado...");

});

ans7.addEventListener('click', function() {
    alert("Estás a punto de conocer tu resultado...");

});