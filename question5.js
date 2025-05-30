document.getElementById('yesBtn').addEventListener('click', () => {
    window.location.href = 'love.html';
});

const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseenter', () => {
    const btn = noBtn;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const maxX = container.offsetWidth - btnWidth;
    const maxY = container.offsetHeight - btnHeight;

    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;

    btn.style.position = 'absolute';
    btn.style.left = `${randX}px`;
    btn.style.top = `${randY}px`;
});