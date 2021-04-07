const filledWater = document.querySelector('.water__content--cup__filled');
const allCups = document.querySelectorAll('.water__content__box--cups');
const remainedWater = document.querySelector('.water__content--cup__remained');

// CODE FOR FILLING ONE CUP AT A TIME
// 2 litres
// let target = 2;
// height of empty cup = 100%
// let fullHeightCup = 100;

// allCups.forEach((cup, idx) => {

//     // 100% (height) / 8 (cups) = 12.5%;
//     let heightVal = 12.5;
//     // 250ml = 0.25;
//     let cupVal = 0.25;

//     cup.addEventListener('click', () => {

//         if (!cup.classList.contains('active')) {
//             cup.classList.add('active');
//             target -= cupVal;
//             fullHeightCup -= heightVal;
//             remainedWater.innerHTML = `${target}L <span>remained</span></div>`;

//         } else if (cup.classList.contains('active')) {
//             cup.classList.remove('active');
//             target += cupVal;
//             fullHeightCup += heightVal;
//             remainedWater.innerHTML = `${target}L <span>remained</span></div>`;
//         }
//         // height of drinked water
//         let drinkedWaterHeight = 100 - fullHeightCup;
//         remainedWater.style.height = fullHeightCup + '%';
//         filledWater.innerHTML = drinkedWaterHeight + '%';
//         filledWater.style.height = drinkedWaterHeight + '%';

//         // console.log(fullHeightCup)
//     });
// });



// CODE FOR FILLING MORE CUPS AT ONCE
updateFill()

allCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => fillCup(idx));
})



function fillCup(idx) {
    if (allCups[idx].classList.contains('active') && !allCups[idx].nextElementSibling.classList.contains('active')) {
        idx--
    }

    allCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('active');
        } else {
            cup.classList.remove('active');
        }
    })

    updateFill()
}

function updateFill() {
    // total of active cups
    const fullCups = document.querySelectorAll('.water__content__box--cups.active').length;
    // total number of cups
    const cupsNum = allCups.length;
    const remainedCups = cupsNum - fullCups;

    // drinked water 
    filledWater.innerHTML = (fullCups * 100) / cupsNum + '%';
    filledWater.style.height = fullCups * 12.5 + '%';

    // remained water
    remainedWater.innerHTML = remainedCups * 0.25 + 'L <span>remained</span></div>'
    remainedWater.style.height = remainedCups * 12.5 + '%';
}