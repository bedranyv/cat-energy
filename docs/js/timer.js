const promoEndDate = '2022-01-01T00:00:00';
let timerAnimationRemove,
    timer = [];

function getNextDay() {
    let nowDate = new Date();
    let nowDay = new Date().getDate();
    let nextDate = new Date(nowDate.setDate(nowDay + 1));
    nextDate = new Date(nextDate.setHours(0, 0, 0, 0));
    
    return nextDate;
}




function getRemainderTime(endtime) {
    let remainderTime = Date.parse(endtime) - Date.parse(new Date());

    timer[0] = remainderTime;
    timer[1] = Math.floor(remainderTime / (1000 * 60 * 60 * 24));
    timer[2] = Math.floor((remainderTime / (1000 * 60 * 60)) % 24);
    timer[3] = Math.floor((remainderTime / (1000 * 60)) % 60);
    timer[4] = Math.floor((remainderTime / 1000) % 60);

    return timer;
}

function setClock(deadline, timerId, animation, day) {
    const days = document.querySelector(`.${timerId}__item--days`),
          hours = document.querySelector(`.${timerId}__item--hours`),
          minutes = document.querySelector(`.${timerId}__item--minutes`),
          seconds = document.querySelector(`.${timerId}__item--seconds`),
          timer = document.querySelector(`.${timerId}__wrapper`),
          timerTitle = document.querySelector(`.${timerId}__title`);
    if (!day) {
        days.parentElement.style.display='none';
    } 

    let t = getRemainderTime(deadline);
    let timerPrevValue = [t[0], t[1], t[2], t[3], t[4]];

    const timeInterval = setInterval(updateTimer, 1000);

    updateTimer();

    function updateTimer() {
        t = getRemainderTime(deadline);

        if (t[0] > 0) {
            if (day) { 
                days.innerHTML = getZero(t[1]); 
            }
            hours.innerHTML = getZero(t[2]); 
            minutes.innerHTML = getZero(t[3]); 
            seconds.innerHTML = getZero(t[4]);

            timerPrevValue.forEach(function(item, i){
                if (i!=0) {
                    if (item != t[i]) {
                        if (animation) {
                            animationTimer(i);
                        }
                    }  
                }
            });

            for (let i = 0; i <= 4; i++) {
                timerPrevValue[i] = t[i];
            }

        } else {
            clearInterval(timeInterval);
            timer.style.display = 'none';
            timerTitle.innerHTML = 'Акция завершена!';
        }
    }

    function animationTimer(item) {
        switch(item) {
            case 1:
                animSelector(days);
                break;
            case 2:
                animSelector(hours);
                break;
            case 3:
                animSelector(minutes);
                break;
            case 4:
                animSelector(seconds);
                break;
        }
    }

    function animSelector(item) {
        item.parentElement.classList.add('animation_timer_tick');
        timerAnimationRemove = setTimeout(function() {
            item.parentElement.classList.remove('animation_timer_tick');
        }, 600);
    }
}

function getZero(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}


// дата окончания, класс в HTML, анимация идущих часов
setClock(promoEndDate, 'sale-timer', false, true);
setClock(getNextDay(), 'modal-timer', true, false);




// function getRemainderTime(endtime) {
//     let remainderTime = Date.parse(endtime) - Date.parse(new Date()),
//         remainderDays = Math.floor(remainderTime / (1000 * 60 * 60 * 24)),
//         remainderHours = Math.floor((remainderTime / (1000 * 60 * 60)) % 24),
//         remainderMinutes = Math.floor((remainderTime / (1000 * 60)) % 60),
//         remainerSeconds = Math.floor((remainderTime / 1000) % 60);

        

//         return {
//             remainderTime: remainderTime,
//             remainderDays: remainderDays,
//             remainderHours: remainderHours,
//             remainderMinutes: remainderMinutes,
//             remainderSeconds: remainerSeconds
//         };
// }

// function setClock(deadline, timerId, animation) {
//     const days = document.querySelector(`.${timerId}__item--days`),
//           hours = document.querySelector(`.${timerId}__item--hours`),
//           minutes = document.querySelector(`.${timerId}__item--minutes`),
//           seconds = document.querySelector(`.${timerId}__item--seconds`),
//           timer = document.querySelector(`.${timerId}__wrapper`),
//           timerTitle = document.querySelector(`.${timerId}__title`);

//     const timeInterval = setInterval(updateTimer, 1000);

//     updateTimer();

//     function updateTimer() {
//         const t = getRemainderTime(deadline);

//         if (t.remainderTime > 0) {
//             days.innerHTML = getZero(t.remainderDays); 
//             hours.innerHTML = getZero(t.remainderHours); 
//             minutes.innerHTML = getZero(t.remainderMinutes); 
//             seconds.innerHTML = getZero(t.remainderSeconds);
//         } else {
//             clearInterval(timeInterval);
//             timer.style.display = 'none';
//             timerTitle.innerHTML = 'Акция завершена!';
//         }
//     }
// }