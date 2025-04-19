const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const brushSize = document.getElementById('brushSize');
const penBtn = document.getElementById('penBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const uploadImage = document.getElementById('uploadImage');

let painting = false;
let isErasing = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mouseleave', endPosition);
canvas.addEventListener('mousemove', draw);

function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;

  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
  ctx.strokeStyle = isErasing ? "#ffffff" : colorPicker.value;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

penBtn.addEventListener('click', () => {
  isErasing = false;
});

eraserBtn.addEventListener('click', () => {
  isErasing = true;
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener('click', () => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement('a');
  link.download = 'advanced-whiteboard.png';
  link.href = image;
  link.click();
});

// Image Upload
uploadImage.addEventListener('change', function () {
  const file = uploadImage.files[0];
  const img = new Image();
  const reader = new FileReader();

  reader.onload = function (e) {
    img.src = e.target.result;
    img.onload = function () {
      ctx.drawImage(img, 50, 50, img.width * 0.5, img.height * 0.5); // Scaled
    };
  };
  if (file) reader.readAsDataURL(file);
});
