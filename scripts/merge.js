const fs = require('fs');

function main() {
  // 读取所有版本文件
  const versionFiles = fs.readdirSync('versions')
    .filter(f => f.endsWith('.cn.md'))
    .sort((a, b) => b.localeCompare(a)); // 降序排列

  // 合并内容
  let merged = '# Changelog\n\n';
  for (const file of versionFiles) {
    const content = fs.readFileSync(`versions/${file}`, 'utf-8');
    merged += content + '\n\n';
  }

  // 保存
  fs.writeFileSync('CHANGELOG_CN.md', merged);
  console.log('已生成 CHANGELOG_CN.md');
}

main();
