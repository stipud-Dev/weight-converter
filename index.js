const input = document.querySelector('input');
const weightInKg = document.getElementById('weightInKg');

input.addEventListener('input', (e) => {
    let pounds = e.currentTarget.value;
    weightInKg.textContent = weightToKg(pounds);
})

function weightToKg(lb) {
    return (lb / 2.2046).toFixed(2);
}