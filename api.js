document.addEventListener("DOMContentLoaded", () => {
  const notifyBtn = document.getElementById("notify-btn");
  const bankOptions = document.querySelectorAll(".bank-option");
  const dateOptions = document.querySelectorAll(".date-option");

  // Initial Notifications Toggle
  let notificationsOn = true;
  notifyBtn.classList.add("on");
  notifyBtn.textContent = "Notifications ✓";

  // Toggle Notifications
  notifyBtn.addEventListener("click", () => {
    notificationsOn = !notificationsOn;

    if (notificationsOn) {
      notifyBtn.textContent = "Notifications ✓";
      notifyBtn.classList.remove("off");
      notifyBtn.classList.add("on");
    } else {
      notifyBtn.textContent = "Notifications ✕";
      notifyBtn.classList.remove("on");
      notifyBtn.classList.add("off");
    }
  });

  // Bank Selector Toggle
  bankOptions.forEach(option => {
    option.addEventListener("click", () => {
      // Remove 'selected' class from all bank options
      bankOptions.forEach(opt => opt.classList.remove("selected"));
      // Add 'selected' class to the clicked bank option
      option.classList.add("selected");
    });
  });

  // Date Selector Toggle
  dateOptions.forEach(option => {
    option.addEventListener("click", () => {
      // Remove 'selected' class from all date options
      dateOptions.forEach(opt => opt.classList.remove("selected"));
      // Add 'selected' class to the clicked date option
      option.classList.add("selected");
    });
  });
});
