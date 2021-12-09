const timeBlock = document.querySelector('.time'),
      dataBlock = document.querySelector('.date'),
      dayBlock = document.querySelector('.day'),
      timerDays = document.querySelector('.timer-days'),
      timerHours = document.querySelector('.timer-hours'),
      timerMinutes = document.querySelector('.timer-minutes'),
      timerSeconds = document.querySelector('.timer-seconds'),
      day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     
function getData(){
      const nowTime = new Date(),
            targetDate = Date.parse(new Date(nowTime.getFullYear()+1, 0, 1))-Date.parse(nowTime);
            
      return {
            'nowTime': nowTime,
            'hour': nowTime.getHours(),
            'minute': nowTime.getMinutes(),
            'second': nowTime.getSeconds(),
            'year': nowTime.getFullYear(),
            'month': nowTime.getMonth()+1,
            'date': nowTime.getDate(),
            'day': nowTime.getDay(),
            'tDate': Math.floor( targetDate / (1000 * 60 * 60 * 24)),
            'tHours': Math.floor(( targetDate / (1000 * 60 * 60) % 24)),
            'tMinutes': Math.floor((targetDate / 1000 / 60) % 60),
            'tSeconds':  Math.floor((targetDate / 1000) % 60)
      };
}

function addZero(num){
      if(num >= 0 && num <10){
            return `0${num}`;
      } else {
            return num;
      }
} 

function setData(){
      const now = getData();
      timeBlock.innerHTML = `${addZero(now.hour)}:${addZero(now.minute)}:${addZero(now.second)}`;
      dataBlock.innerHTML = `${addZero(now.date)}.${addZero(now.month)}.${addZero(now.year)}`;
      dayBlock.innerHTML = `${day[now.day]}`;
      timerDays.innerHTML = addZero(now.tDate);
      timerHours.innerHTML = addZero(now.tHours);
      timerMinutes.innerHTML = addZero(now.tMinutes);
      timerSeconds.innerHTML = addZero(now.tSeconds);
}

setData();
setInterval(setData, 1000);
