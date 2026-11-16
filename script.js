// Свеча памяти
var candleBtn = document.getElementById("candle-btn");
var candleCount = document.getElementById("candle-count");

candleBtn.addEventListener("click", function () {
  candleCount.textContent = Number(candleCount.textContent) + 1;
  candleBtn.textContent = "🕯️ Гнойник Зажжен";
  candleBtn.disabled = true;
});

// Книга памяти (записи видны только на этом устройстве, пока открыта страница)
var form = document.getElementById("wish-form");
var list = document.getElementById("wish-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("wish-name").value.trim() || "Аноним";
  var text = document.getElementById("wish-text").value.trim();
  if (!text) return;

  var item = document.createElement("div");
  item.className = "card wish";
  var title = document.createElement("b");
  title.textContent = name;
  var body = document.createElement("span");
  body.textContent = text;
  item.appendChild(title);
  item.appendChild(body);
  list.insertBefore(item, list.firstChild);

  form.reset();
});
