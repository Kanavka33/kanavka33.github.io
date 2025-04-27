
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Отменяем перезагрузку страницы
    
    // Сохраняем данные (если нужно)
    const username = document.querySelector("input").value;
    localStorage.setItem("user", username);
  
    // Показываем сообщение 1 раз
    alert("Вы зарегистрировались!"); 
  
    // Перенаправляем на главную страницу
    window.location.href = "index.html"; 
  });