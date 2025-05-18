function tampilkanSalam() {
  const jam = new Date().getHours()
  const menit = new Date().getMinutes()
  const h1 = document.getElementById("greeting")
  const body = document.body

  // Remove all time-based classes first
  body.classList.remove("pagi", "siang", "sore", "malam")

  if (jam >= 0 && jam < 11) {
    if (jam === 0 && menit === 0) {
      h1.textContent = "SELAMAT MALAM"
      body.classList.add("malam")
    } else {
      h1.textContent = "SELAMAT PAGI"
      body.classList.add("pagi")
    }
  } else if (jam >= 11 && jam < 14) {
    h1.textContent = "SELAMAT SIANG"
    body.classList.add("siang")
  } else if (jam >= 14 && jam < 18) {
    h1.textContent = "SELAMAT SORE"
    body.classList.add("sore")
  } else {
    h1.textContent = "SELAMAT MALAM"
    body.classList.add("malam")
  }

  // Update time display
  updateClock()

  // Set interval to update clock every second
  setInterval(updateClock, 1000)
}

function updateClock() {
  const now = new Date()
  const timeDisplay = document.getElementById("time-display")

  const hours = String(now.getHours()).padStart(2, "0")
  const minutes = String(now.getMinutes()).padStart(2, "0")
  const seconds = String(now.getSeconds()).padStart(2, "0")

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`
}

// Panggil fungsi setelah halaman dimuat
window.onload = () => {
  // Create time display element
  const timeDisplay = document.createElement("div")
  timeDisplay.id = "time-display"
  document.body.appendChild(timeDisplay)

  tampilkanSalam()
}
