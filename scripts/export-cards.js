/**
 * 导出所有月度卡片为 PNG 图片
 * 使用 Puppeteer 进行渲染和截图
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function exportCards() {
    console.log('启动浏览器...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // 设置视口大小
    await page.setViewport({ width: 1200, height: 800 });

    // 加载 HTML 文件
    const htmlPath = path.join(__dirname, '..', 'index.html');
    const fileUrl = `file://${htmlPath}`;

    console.log('加载页面...');
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    // 等待卡片加载完成
    await page.waitForSelector('.month-card');

    // 获取所有卡片
    const cards = await page.$$('.month-card');

    console.log(`找到 ${cards.length} 个卡片，开始导出...`);

    // 创建输出目录
    const outputDir = path.join(__dirname, '..', 'exports');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // 导出每个卡片
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        // 获取月份名称
        const monthName = await page.evaluate(el => {
            const h3 = el.querySelector('h3');
            return h3 ? h3.innerText.trim() : `month${i + 1}`;
        }, card);

        const monthNum = (i + 1).toString().padStart(2, '0');
        const filename = `2025_${monthNum}_${monthName}.png`;
        const filepath = path.join(outputDir, filename);

        console.log(`导出: ${filename}`);

        // 截图卡片
        await card.screenshot({
            path: filepath,
            scale: 3, // 高分辨率
        });
    }

    await browser.close();
    console.log(`\n完成！已导出 ${cards.length} 个卡片到 ${outputDir}/`);
}

exportCards().catch(console.error);
