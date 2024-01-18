



let sliderCount = document.querySelectorAll('.slider-img');
let slider = document.getElementById('slider-container');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let count = 1;
let transl = 0;
slider.style.width = 500 * sliderCount.length + 'px';
prevBtn.addEventListener('click', () => {
    count--;
    if(count < 1) {
        count = sliderCount.length;
        transl = -(500 * (count - 1));
        slider.style.transform = 'translateX('+ transl +'px)';
    } else {
        transl += 500;
        slider.style.transform = 'translateX('+ transl +'px)';
    }
});

nextBtn.addEventListener('click', () => {
    count++;
    if(count > sliderCount.length) {
        transl = 0;
        count = 1;
        slider.style.transform = 'translateX('+ transl +'px)';    
    } else {
        transl -= 500;
        slider.style.transform = 'translateX('+ transl +'px)';    
    }
});

















