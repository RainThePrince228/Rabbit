
    // var hiddenSections = document.querySelectorAll('section[class^="slide"]');
    // var articleLeftElements = document.querySelectorAll('#articleLeft p');

    // for (var i = 0; i < hiddenSections.length; i++) {
    //     console.log('Спрятанная секция: ' + hiddenSections[i].id);
    // }

    // for (var i = 0; i < articleLeftElements.length; i++) {
    //     console.log('Цифра в articleLeft: ' + articleLeftElements[i].textContent);
    // }

    let slides = document.getElementsByClassName("slide");
    let selectSlide = 0;
    let startTop = 0;
    
    function animateSlide() {
            let maxTop = slides[selectSlide].clientHeight;
            startTop--;
            slides[selectSlide].style.top = startTop + "vh";
    
            if (startTop <= -100) { // если уехали за край
                slides[selectSlide].style.display = "none"; 
        
                selectSlide++; // переключение на следующий слайд
                if (selectSlide >= slides.length) {
                    selectSlide = 0; // перезапуск анимации
                }
        
                startTop = 0; // начальное значение
                slides[selectSlide].style.top = startTop + "vh"; 
                slides[selectSlide].style.display = "flex";
        
            }
    
            let timer = setTimeout(animateSlide, 10);
        }
    
// Добавляем обработчик события click на весь документ
document.addEventListener('click', function() {
    animateSlide();
});