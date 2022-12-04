
// Получаем нужные элементы
const range = document.getElementById('range1');
const rangeBtn = document.querySelector('.input-range-btn-fake');
const inputRangeColorFake = document.querySelector('.input-range-color-fake ');

// Высчитываем ширину заполняющего прогресс-бара
function rangePosition() {
    let rangeValue = range.value;
    rangeBtn.style.left = rangeValue / 1.5 + '%';
    inputRangeColorFake.style.width = rangeValue / 1.5 + '%';
}
rangePosition();

// Запускаем функцию rangePosition при событии input
range.addEventListener('input', () => {
    rangePosition();
})

// calcInputRangeText.addEventListener('input', () => {

//     rangeBtn.style.left = calcInputRangeText.value / 1.5 + '%';
//     inputRangeColorFake.style.width = calcInputRangeText.value / 1.5 + '%';
//     // fullSumGoods * 20;
//     // showSumAllGoods(fullSumGoods);
// })