const exercises = document.querySelectorAll('.exercise');

exercises.forEach(element => {
    element.addEventListener('click', (event)=> {
        exercises.forEach((element) => {
            element.classList.remove('active');
        });

        event.currentTarget.classList.add('active');
    });
});