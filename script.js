function next(id) {
  document.querySelectorAll(".scene")
    .forEach(s => s.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

/* 🎵 müzik */
document.addEventListener("click", () => {
  const music = document.getElementById("bgMusic");
  if (music) music.play();
}, { once: true });

/* 💌 cevap */
function answer(choice) {

  next('result');

  const text = document.getElementById("resultText");

  if (choice === 'A') text.innerHTML = "A) Seni sevdiği için ❤️";
  if (choice === 'B') text.innerHTML = "B) Seni daha çok sevdiği için ❤️";
  if (choice === 'C') text.innerHTML = "C) Seni sürekli düşündüğü için ❤️";
  if (choice === 'D') text.innerHTML = "D) Hepsi + biraz fazlası ❤️💥";

  spawnHearts(25);
}

/* 💗 kalp sistemi */
function spawnHearts(count) {
  for (let i = 0; i < count; i++) {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = (10 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

/* 🌗 seçim */
function choose(type) {
  spawnHearts(20);

  if (type === "coffee") next("coffee");
  if (type === "risk") next("risk");
}

/* ☑️ final */
function finalConfirm() {

  spawnHearts(40);

  alert("seni seviyom kadın ❤️");

  window.location.href = "https://wa.me/";
}

/* ✨ TYPEWRITER EFFECT (Şevval için) */
window.addEventListener("load", () => {
  const el = document.getElementById("title");
  const text = "Şevval...";
  el.innerHTML = "";

  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text[i];
      i++;
      setTimeout(type, 200);
    }
  }

  type();
});