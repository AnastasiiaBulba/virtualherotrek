// Contact form functionality and validation

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
    setupFormValidation();
  }
});

function setupFormValidation() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  // Real-time validation
  if (nameInput) {
    nameInput.addEventListener("input", () => validateName(nameInput));
    nameInput.addEventListener("blur", () => validateName(nameInput));
  }

  if (emailInput) {
    emailInput.addEventListener("input", () => validateEmail(emailInput));
    emailInput.addEventListener("blur", () => validateEmail(emailInput));
  }

  if (phoneInput) {
    phoneInput.addEventListener("input", () => validatePhone(phoneInput));
    phoneInput.addEventListener("blur", () => validatePhone(phoneInput));
  }
}

function validateName(input) {
  const value = input.value.trim();
  const errorElement = document.getElementById("name-error");

  if (!value) {
    showError(errorElement, "Name is required");
    return false;
  }

  if (!/^[a-zA-Z\s]+$/.test(value)) {
    showError(errorElement, "Name can only contain letters and spaces");
    return false;
  }

  if (value.length < 2) {
    showError(errorElement, "Name must be at least 2 characters long");
    return false;
  }

  hideError(errorElement);
  return true;
}

function validateEmail(input) {
  const value = input.value.trim();
  const errorElement = document.getElementById("email-error");

  if (!value) {
    showError(errorElement, "Email is required");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError(errorElement, "Please enter a valid email address");
    return false;
  }

  hideError(errorElement);
  return true;
}

function validatePhone(input) {
  const value = input.value.trim();
  const errorElement = document.getElementById("phone-error");

  // Phone is optional, so if empty, it's valid
  if (!value) {
    hideError(errorElement);
    return true;
  }

  // Only allow digits
  if (!/^\d+$/.test(value)) {
    showError(errorElement, "Phone number can only contain digits");
    return false;
  }

  if (value.length < 10) {
    showError(errorElement, "Phone number must be at least 10 digits long");
    return false;
  }

  hideError(errorElement);
  return true;
}

function showError(errorElement, message) {
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

function hideError(errorElement) {
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

function clearAllErrors() {
  const errorElements = document.querySelectorAll(".error-message");
  errorElements.forEach((element) => {
    hideError(element);
  });
}

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  let isValid = true;

  // Validate required fields
  if (!nameInput || !validateName(nameInput)) {
    isValid = false;
  }

  if (!emailInput || !validateEmail(emailInput)) {
    isValid = false;
  }

  if (!subjectInput || !subjectInput.value) {
    const errorElement = document.getElementById("subject-error");
    showError(errorElement, "Please select a subject");
    isValid = false;
  }

  if (!messageInput || !messageInput.value.trim()) {
    const errorElement = document.getElementById("message-error");
    showError(errorElement, "Message is required");
    isValid = false;
  }

  // Validate optional phone field
  const phoneInput = document.getElementById("phone");
  if (phoneInput && !validatePhone(phoneInput)) {
    isValid = false;
  }

  return isValid;
}

async function handleFormSubmit(event) {
  event.preventDefault();

  // Clear previous errors
  clearAllErrors();

  // Validate form
  if (!validateForm()) {
    return;
  }

  // Get form data
  const formData = new FormData(event.target);
  const submitBtn = event.target.querySelector(".submit-btn");

  // Disable submit button and show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    // Simulate form submission (replace with actual API call)
    await simulateFormSubmission(formData);

    // Show success message
    showSuccessMessage();

    // Clear form
    event.target.reset();
  } catch (error) {
    console.error("Form submission error:", error);
    showErrorMessage(
      "An error occurred while sending your message. Please try again."
    );
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
}

function simulateFormSubmission(formData) {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      console.log("Form data:", Object.fromEntries(formData));
      resolve();
    }, 1500);
  });
}

function showSuccessMessage() {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector(".submit-btn");
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";
  successMessage.id = "success-notification";
  successMessage.textContent =
    "Message sent successfully! We'll get back to you within 24 hours.";
  successMessage.style.marginTop = "10px";

  // Insert after the submit button
  submitBtn.parentNode.insertBefore(successMessage, submitBtn.nextSibling);

  // Remove message after 5 seconds
  setTimeout(() => {
    if (successMessage.parentNode) {
      successMessage.parentNode.removeChild(successMessage);
    }
  }, 5000);
}

function showErrorMessage(message) {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector(".submit-btn");
  const errorMessage = document.createElement("div");
  errorMessage.className = "success-message";
  errorMessage.id = "error-notification";
  errorMessage.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";
  errorMessage.style.marginTop = "10px";
  errorMessage.textContent = message;

  // Insert after the submit button
  submitBtn.parentNode.insertBefore(errorMessage, submitBtn.nextSibling);

  // Remove message after 5 seconds
  setTimeout(() => {
    if (errorMessage.parentNode) {
      errorMessage.parentNode.removeChild(errorMessage);
    }
  }, 5000);
}

// Auto-format phone number
document.addEventListener("input", function (event) {
  if (event.target.id === "phone") {
    let value = event.target.value.replace(/\D/g, "");

    // Limit to 15 digits
    if (value.length > 15) {
      value = value.slice(0, 15);
    }

    event.target.value = value;
  }
});

// Prevent non-numeric input in phone field
document.addEventListener("keypress", function (event) {
  if (event.target.id === "phone") {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
});
