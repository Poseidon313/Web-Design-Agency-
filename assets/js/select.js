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



