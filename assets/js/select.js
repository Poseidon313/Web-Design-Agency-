let selects = document.querySelectorAll("select");

for (let i = 0; i < selects.length; i++) {
  let select = selects[i];

  select.addEventListener("focus", () => {
    select.size = 5;
    select.classList.add("fadeIn");
    select.classList.remove("fadeOut");
  });

  select.addEventListener("blur", () => {
    select.size = 1;
    select.classList.add("fadeOut");
    select.classList.remove("fadeIn");
  });

  select.addEventListener("change", () => {
    select.size = 1;
    select.blur();
  });

  select.addEventListener("mouseover", () => {
    if (select.size == 1) {
    }
  });

  select.addEventListener("mouseout", () => {
    if (select.size == 1) {
    }
  });
}





var options = [  "Aerospace",  "Agriculture",  "Alternate Energy",  "Animation",  "Apparel and Accessories",  "Architecture",  "Arts and Entertainment",  "Automation",  "Automotive",  "Aviation",  "Banking and Finance",  "Beauty and Wellness",  "Biological Science",  "Biotechnology",  "Broadcasting",  "Building Products",  "Building and Construction",  "Business Services",  "Call Centers",  "Cargo and Freight",  "Catering",  "Ceramics",  "Chemicals",  "Clothing and Fashion",  "Communications",  "Computer and Technology",  "Consumer Electronics",  "Consumer Goods",  "Data Storage",  "Defense",  "Design",  "E-commerce",  "Education",  "Electronics",  "Employment",  "Energy",  "Engineering",  "Environmental",  "Facilities Management",  "Film and Video",  "Food Processing",  "Food and Beverage",  "Forestry",  "Furniture",  "Gambling",  "Gas and Oil",  "Graphic Design",  "Health and Safety",  "Healthcare",  "Home Goods",  "Horticulture",  "Hospitality Industry",  "Hospitality",  "Human Resources",  "Import and Export",  "Information Services",  "Infrastructure",  "Insurance",  "Legal Services",  "Manufacturing",  "Media and Advertising",  "Medical Devices",  "Mining and Metals",  "Non-Profit",  "Pharmaceuticals",  "Real Estate",  "Retail",  "Shipping and Logistics",  "Sports and Fitness",  "Telecommunications",  "Transportation",  "Travel and Tourism",  "Utilities",  "Video Gaming",  "Waste Management",  "Wholesale and Distribution"];




function filterOptions() {
    var select = document.getElementById("industry_select");
    var searchInput = document.getElementById("search_input");
    if (select.value === "searchValue") {
      select.style.display = "none";
      searchInput.style.display = "block";
      searchInput.focus();
    } else {
      select.style.display = "block";
      searchInput.style.display = "none";
    }
  }
  
  function validateSearch() {
    var select = document.getElementById("industry_select");
    var searchInput = document.getElementById("search_input");
    var filteredOptions = [];
    var options = initialOptions;
    for (var i = 0; i < options.length; i++) {
      if (options[i].text.toLowerCase().includes(searchInput.value.toLowerCase())) { 
        filteredOptions.push(options[i]);

      }
      else{
        console.alert("no results")
      }
    }
    select.options.length = 0;
    for (var i = 0; i < filteredOptions.length; i++) {
      select.options[i] = new Option(filteredOptions[i].text, filteredOptions[i].value);
    }
    select.style.display = "block";
    searchInput.style.display = "none";
  }


  function change(){
    var search = document.getElementById("search");
    var searchInput = document.getElementById("search_input");
    search.value = searchInput.value;
  }