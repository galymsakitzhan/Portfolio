let container = document.querySelectorAll('.container');


let game = container.forEach(item => {
    const colors = ['red', 'blue', 'orange', 'black', 'yellow', 'purple'];
    let currentColorIndex = 0;
    item.addEventListener('click', ()=>{
        item.style.backgroundColor = colors[currentColorIndex];
        // currentColorIndex++;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    })
})