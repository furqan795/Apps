// Navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
  // Get current page filename
  const currentPage = location.pathname.split('/').pop();
  
  // Highlight active link
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
  
  // If on home page, highlight index.html
  if (currentPage === '' || currentPage === 'index.html') {
    document.querySelector('.nav-link[href="index.html"]').classList.add('active');
  }
});

// BMI Calculator Functions
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid numbers for weight and height");
    return;
  }
  
  // Convert height from cm to meters
  const heightM = height / 100;
  const bmi = weight / (heightM * heightM);
  let category = "";
  let categoryClass = "";
  
  if (bmi < 18.5) {
    category = "Underweight";
    categoryClass = "underweight";
  } else if (bmi < 25) {
    category = "Normal weight";
    categoryClass = "normal";
  } else if (bmi < 30) {
    category = "Overweight";
    categoryClass = "overweight";
  } else {
    category = "Obese";
    categoryClass = "obese";
  }
  
  // Update BMI value
  document.querySelector(".bmi-value").textContent = bmi.toFixed(1);
  
  // Update category
  const categoryElement = document.querySelector(".bmi-category");
  categoryElement.textContent = category;
  categoryElement.className = "bmi-category " + categoryClass;
  
  // Update category info
  document.getElementById("category-info").textContent = getCategoryInfo(category);
}

function getCategoryInfo(category) {
  switch(category) {
    case "Underweight":
      return "Consider consulting a healthcare provider for nutritional advice.";
    case "Normal weight":
      return "Great job! Maintain your healthy lifestyle.";
    case "Overweight":
      return "Consider healthy eating and increased physical activity.";
    case "Obese":
      return "Consult a healthcare provider for guidance on weight management.";
    default:
      return "";
  }
}

function resetCalculator() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.querySelector(".bmi-value").textContent = "--";
  document.querySelector(".bmi-category").textContent = "Enter your details";
  document.querySelector(".bmi-category").className = "bmi-category";
  document.getElementById("category-info").textContent = "Your BMI category will appear here";
}