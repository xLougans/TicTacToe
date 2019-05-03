
    let canvas = document.getElementById('ttt'), ctx = canvas.getContext('2d'), msg = document.getElementById('message'), cellSize = 100;

    canvas.width = canvas.height = 3 * cellSize;

    function draw () {

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBoard();

        function drawBoard () {
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 10;

            ctx.beginPath();
            ctx.moveTo(cellSize, 0);
            ctx.lineTo(cellSize, canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(cellSize * 2, 0);
            ctx.lineTo(cellSize * 2, canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, cellSize);
            ctx.lineTo(canvas.width, cellSize);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, cellSize * 2);
            ctx.lineTo(canvas.width, cellSize * 2);
            ctx.stroke();
        }

        function fillBoard () {

        }

        requestAnimationFrame(draw);
    }

    draw();