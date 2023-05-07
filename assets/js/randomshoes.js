var items = [
    '<a href="carwash.html"><div class="project-item"><div class="project-image"><img src="images/carwash.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Smart Wash Mobile Detailing</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="watch.html"><div class="project-item"><div class="project-image"><img src="images/watch.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Timepiece Emporium</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="gym.html"><div class="project-item"><div class="project-image"><img src="images/gymmain.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>FitMax</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="merch.html"><div class="project-item"><div class="project-image"><img src="images/merchmain.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Zenna</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="construction.html"><div class="project-item"><div class="project-image"><img src="../images/construction.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Global Contractors</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
  ];
 
  var item1 = document.querySelector('#item1');
   var item2 = document.querySelector('#item2');
   var item3 = document.querySelector('#item3');
   
   function shuffleItems() {
     // Shuffle the array of items
     items.sort(function() {
       return 0.5 - Math.random();
     });
   
     // Assign the shuffled items to each column
     item1.innerHTML = items[0];
     item2.innerHTML = items[1];
     item3.innerHTML = items[2];
   }
   
   // Call the shuffleItems function on page load
   shuffleItems();