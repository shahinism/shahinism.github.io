function ready(fn) {
  if (document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function main() {
  console.log(`
  ┌───────────────────────────────────────────────────────────────────┐
  │                                                                   │
  │     _________.__           .__    .__       .__                   │
  │    /   _____/|  |__ _____  |  |__ |__| ____ |__| ______ _____     │
  │    \_____  \ |  |  \\__  \ |  |  \|  |/    \|  |/  ___//     \    │
  │    /        \|   Y  \/ __ \|   Y  \  |   |  \  |\___ \|  Y Y  \   │
  │   /_______  /|___|  (____  /___|  /__|___|  /__/____  >__|_|  /   │
  │           \/      \/     \/     \/        \/        \/      \/    │
  │                                                                   │
  └───────────────────────────────────────────────────────────────────┘

  Welcome to my Shahinism! 👋🏻😀
  `)

  // Switch to dark-mode if it's preferred
  if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
    document.body.classList.add("latex-dark")
  }

  // Enable swup
  const swup = new Swup()
};

ready(main)
