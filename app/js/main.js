//mask phone//
const phone = document.querySelector(".phone");

if (phone) {
  IMask(phone, {
    mask: "+{7}(000)000-00-00",
  });
}

//form btns//
const btnPrev = document.querySelector(".btn-prev"),
  btnNext = document.querySelector(".btn-next"),
  btnSubmit = document.querySelector(".btn-submit"),
  form = document.querySelector(".form");

if (btnPrev && btnNext && btnSubmit) {
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.add("form-two");
  });

  btnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.remove("form-two");
  });

  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Отправлено!");
  });
}

//bar//
const bar = document.querySelector(".bar"),
  html = document.querySelector("html");

if (bar) {
  bar.addEventListener("click", () => {
    html.classList.toggle("open-mobile-open");
  });
}
