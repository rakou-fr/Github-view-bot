const puppeteer = require('puppeteer');

const url = process.argv[2];
const iterations = parseInt(process.argv[3], 10);

if (!url || isNaN(iterations)) {
  console.error("Usage: node prog.js <url> <nombre_iterations>");
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`Lancement de ${iterations} F5 sur : ${url}`);

  await page.goto(url, { waitUntil: 'domcontentloaded' });

  for (let i = 1; i <= iterations; i++) {
    console.log(`[${i}/${iterations}] F5 à ${new Date().toLocaleTimeString()}`);
    await page.reload({ waitUntil: 'domcontentloaded' });
    if (i < iterations) {
      await new Promise(resolve => setTimeout(resolve, 3000)); // cooldown 3 sec
    }
  }

  await browser.close();
  console.log("Fini ✅");
})();
