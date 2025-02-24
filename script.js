function afiseazaPatrat() {
    let patrat = document.getElementById('patrat');
    let butonCuloare = document.getElementById('butonCuloare');
    patrat.style.display = 'block';
    butonCuloare.style.display = 'inline';
}

function schimbaCuloarea() {
    let patrat = document.getElementById('patrat');
    let culori = ['red', 'green', 'blue', 'yellow', 'purple'];
    let culoareNoua = culori[Math.floor(Math.random() * culori.length)];
    patrat.style.backgroundColor = culoareNoua;
}