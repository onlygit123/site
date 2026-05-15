function initCustomSelect() {
  const select = document.getElementById("customSelect");
  if (!select) return;

  const selectedDiv = document.getElementById("selectSelected");
  const optionsList = document.getElementById("selectOptions");
  const options = optionsList.querySelectorAll("li");
  const hiddenSelect = document.getElementById("requestType");

  select.addEventListener("click", function (e) {
    e.stopPropagation();
    select.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();
      const value = this.getAttribute("data-value");
      const text = this.textContent;
      selectedDiv.textContent = text;
      hiddenSelect.value = value;
      select.classList.remove("open");
    });
  });

  document.addEventListener("click", function () {
    select.classList.remove("open");
  });
}

function initThemeToggle() {
  const themeSwitch = document.getElementById("themeSwitch");
  if (!themeSwitch) return;

  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  });
}
function initContactForm() {
  const form = document.querySelector(".contact-form");
  if (!form) return;

  form.onsubmit = function (e) {
    e.preventDefault();

    const requestType = document.getElementById("requestType").value;
    const messageText = document.getElementById("message").value.trim();

    if (!requestType) {
      alert("Пожалуйста, выберите тип обращения.");
      return;
    }
    if (!messageText) {
      alert("Пожалуйста, введите текст сообщения.");
      return;
    }

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert("Пожалуйста, подтвердите, что вы не робот.");
      return;
    }

    const templateParams = {
      type: requestType,
      message: messageText,
    };

    emailjs
      .send("service_vvz8zff", "template_1ftmz7r", templateParams)
      .then(() => {
        alert("Сообщение успешно отправлено!");
        document.getElementById("message").value = "";
        grecaptcha.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Ошибка при отправке. Попробуйте позже.");
      });
  };
}

document.addEventListener("DOMContentLoaded", function () {
  initCustomSelect();
  initThemeToggle();
  initContactForm();
});
