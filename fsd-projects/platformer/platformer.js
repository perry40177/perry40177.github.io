$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0,700,200,10, "black")
createPlatform(400,600,150,10, "black")
createPlatform(700,500,100,10, "black")
createPlatform(725,450,50,10, "black")
createPlatform(1100,500,100,10, "black")
createPlatform(1300,400,100,10, "black")
createPlatform(1050,275,175,10, "black")
createPlatform(600,200,200,10, "gold")
createPlatform(450,465,75,10, "black")
createPlatform(500,350,75,10, "black")
createPlatform(200,300,100,10, "black")
createPlatform(100,165,100,10, "lime")
createPlatform(1300,200,100,10, "black")
createPlatform(1100,100,100,10, "red")

    // TODO 3 - Create Collectables
    createCollectable("database", 680, 150, 0.5, 0.7)
    createCollectable("database", 100, 130, 0.5, 0.7)
    createCollectable("database", 1160,50, 0.5, 0.7)


    
    // TODO 4 - Create Cannons
    createCannon("bottom", 1100, 3000);
    createCannon("left",445, 2000);
    createCannon("top", 175, 5000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
