document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.nav').classList.add('show');
    document.querySelector('.nav-border').classList.add('show');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('show');
    document.querySelector('.nav-border').classList.remove('show');
});
