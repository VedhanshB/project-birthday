var canvas = new fabric.Canvas('myCanvas');
 var x = document.getElementById("myAudio");

function new_image()
{
    
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
        block = Img;

        block.scaleToWidth(700);
        block.scaleToHeight(510)
        block.set({
            left: 0,
            top: 0,
        });
        canvas.add(block);
    });
}

function playSound(){
	x.play();
}
