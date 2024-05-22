const colors = ["#3498db", "#e74c3c", "#27ae60", "#f1c40f", "#9b59b6", "#e67e22", "#2ecc71", "#e74c3c", "#1abc9c", "#d35400"];

const shapes = [
    {
        width: '0',
        height: '0',
        borderLeft: '25px solid transparent',
        borderRight: '25px solid transparent',
        borderBottom: '50px solid ',
    },
    {
        height: '50px',
        width: '100px',
        left:'10px',
        
    },
    {
        width: '75px',
        height: '75px',
        left: '20px',
        top: '40px',
        
    },
    {
        height: '50px',
        width: '50px',
        radius:'50%',
    }
]
const circle = document.getElementById("circle");
const changeColorButton = document.getElementById("change-color");
const changeShapeButton = document.getElementById("change-shape");

changeColorButton.addEventListener("click", changeColor);


function changeColor() {
   const randomColor = colors[Math.floor(Math.random() * colors.length)];
   circle.style.backgroundColor = randomColor;
}


// const changeShape = () => {
//     const randomNumber = Math.floor(Math.random() * shapes.length);
//     console.log(randomNumber);
//     const obj = shapes[randomNumber];
//     inner.style.backgroundColor = obj.backgroundColor;
//     inner.style.width = obj.width;
//     inner.style.height = obj.height;
//     inner.style.borderRight = obj.borderRight;
//     inner.style.borderLeft = obj.borderLeft;
//     inner.style.borderBottom = obj.borderBottom;
//     inner.style.position = 'relative';

// }
const changeShape = () => {
    const randomNumber = Math.floor(Math.random() * shapes.length);
    console.log(randomNumber);
    const obj = shapes[randomNumber];  
    inner.style.backgroundColor = obj.backgroundColor ? obj.backgroundColor : null;
    inner.style.width = obj.width ? obj.width : null;
    inner.style.height = obj.height ? obj.height : null;
    inner.style.borderRight = obj.borderRight ? obj.borderRight : null;
    inner.style.borderLeft = obj.borderLeft ? obj.borderLeft : null;
    inner.style.borderBottom = obj.borderBottom ? obj.borderBottom : null;
    inner.style.position = obj.position ? obj.position : null;
}

changeShapeButton.addEventListener("click", changeShape);
changeColor();
changeShape();

