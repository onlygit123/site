function showCustomAlert(title, message, onClose) {
  const modal = document.getElementById("alertModal");
  const titleEl = document.getElementById("alertTitle");
  const messageEl = document.getElementById("alertMessage");
  const okBtn = document.getElementById("alertOkBtn");
  const closeBtn = document.getElementById("alertModalClose");

  if (!modal || !titleEl || !messageEl || !okBtn || !closeBtn) return;

  titleEl.textContent = title;
  messageEl.textContent = message;
  modal.classList.add("active");

  function close() {
    modal.classList.remove("active");
    okBtn.removeEventListener("click", close);
    closeBtn.removeEventListener("click", close);
    document.removeEventListener("keydown", escHandler);
    if (onClose) onClose();
  }

  function escHandler(e) {
    if (e.key === "Escape") close();
  }

  okBtn.addEventListener("click", close);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", escHandler);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });
}

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

    const selectedText = document
      .getElementById("selectSelected")
      .textContent.trim();

    if (selectedText === "Выберите тип обращения") {
      showCustomAlert("Ошибка", "Пожалуйста, выберите тип обращения.");
      return;
    }

    const messageText = document.getElementById("message").value.trim();

    if (!messageText) {
      showCustomAlert("Ошибка", "Пожалуйста, введите текст сообщения.");
      return;
    }

    const templateParams = {
      type: selectedText,
      message: messageText,
    };

    emailjs
      .send("service_vvz8zff", "template_1ftmz7r", templateParams)
      .then(() => {
        showCustomAlert("Успех", "Сообщение успешно отправлено!");
        document.getElementById("message").value = "";
        document.getElementById("selectSelected").textContent =
          "Выберите тип обращения";
        document.getElementById("requestType").value = "";
        if (typeof grecaptcha !== "undefined" && grecaptcha.reset) {
          grecaptcha.reset();
        }
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        showCustomAlert(
          "Ошибка",
          "Ошибка при отправке. Проверьте настройки EmailJS или попробуйте позже.",
        );
      });
  };
}

document.addEventListener("DOMContentLoaded", function () {
  initCustomSelect();
  initThemeToggle();
  initContactForm();
});
