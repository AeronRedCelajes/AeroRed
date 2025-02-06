let dropdown_open = false;
function dropDownFunc() {
  var menu = document.getElementById("headerDropdown");

  if(window.innerWidth <= 1300) {
    if(!dropdown_open) {
      menu.style.top = "55px";
      dropdown_open = true
    }
    else {
      menu.style.top = "-" + menu.offsetHeight + "px";
      dropdown_open = false
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {


    // Text Scramble
    const dev_type = ["Web Development", "Computer Vision", "Machine Learning", "Graphic Design ", "Video Editing", "Programmer"];
    const el = document.querySelector("#devType");
    const fx = new TextScramble(el);
    let counter = 0;
  
    const next = () => {
      fx.setText(dev_type[counter]).then(() => {
        setTimeout(next, 2500);  // Set the interval for the next scramble
      });
      counter = (counter + 1) % dev_type.length;
    };
  
    // Start the scramble text animation
    next();  // This starts the scrambling
  
    // Header animation
    const headStr = "<AeroRed>";
    let headIndx = 0;
  
    function printHomeHeader() {
      if (headIndx < headStr.length) {
        document.getElementById("headerContent").innerHTML += headStr[headIndx];
        headIndx++;
      } else {
        document.querySelector(".blinkCursor").style.animationPlayState = "running";
        return null;
      }
      setTimeout(printHomeHeader, 150);
    }
  
    // Start the header animation
    printHomeHeader();

    // Tab Active Pane
    // Get all the tab buttons and tab content elements
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add click event listener to each tab button
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons and tab contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab button and corresponding content
        button.classList.add('active');
        const targetContent = document.querySelector(`#${button.id.replace('tab', 'content')}`);
        targetContent.classList.add('active');
      });
    });
});