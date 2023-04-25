var items = [
    '<a href="photo.html"><div class="project-item"><div class="project-image"><img src="images/photo.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>JPhotography</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="watch.html"><div class="project-item"><div class="project-image"><img src="images/watch.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Timepiece Emporium</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="cupcake.html"><div class="project-item"><div class="project-image"><img src="../images/cupcakes.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Cakes Dream</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="gym.html"><div class="project-item"><div class="project-image"><img src="images/gymmain.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>FitMax</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>',
    '<a href="shoes.html"><div class="project-item"><div class="project-image"><img src="images/shoesmain.jpg" alt=""></div><div class="project-over project-over-s2"><div class="project-content"><h4>Web Design</h4><p style="text-decoration: underline;">View Project</p></div></div></div></a>'
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