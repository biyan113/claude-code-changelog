const fs = require('fs');
const { execSync } = require('child_process');

// 解析 CHANGELOG.md，提取所有版本
function parseVersions(content) {
  const versions = [];
  const lines = content.split('\n');
  let currentVersion = null;
  let currentContent = [];

  for (const line of lines) {
    const versionMatch = line.match(/^##\s+(\d+\.\d+\.\d+)/);
    if (versionMatch) {
      if (currentVersion) {
        versions.push({
          version: currentVersion,
          content: currentContent.join('\n')
        });
      }
      currentVersion = versionMatch[1];
      currentContent = [line];
    } else if (currentVersion) {
      currentContent.push(line);
    }
  }

  if (currentVersion) {
    versions.push({
      version: currentVersion,
      content: currentContent.join('\n')
    });
  }

  return versions;
}

// 读取已翻译版本列表
function getTranslatedVersions() {
  if (fs.existsSync('.versions.json')) {
    return JSON.parse(fs.readFileSync('.versions.json', 'utf-8'));
  }
  return [];
}

// 翻译单个版本
function translateVersion(version, content) {
  const prompt = `将以下 Claude Code ${version} 版本的更新内容翻译成中文：
要求：
1. 保持 Markdown 格式不变
2. 专有名词如 Claude Code、Opus、Sonnet、Haiku、MCP、LSP 等保持英文
3. 直接返回翻译后的内容

${content}`;

  const result = execSync(
    `claude -p "${prompt}" --output-format json --dangerously-skip-permissions --allowed-tools "Write"`,
    { encoding: 'utf-8', maxBuffer: 10 * 1024 * 1024 }
  );

  const parsed = JSON.parse(result);
  return parsed.content || parsed.message || result;
}

// 主函数
async function main() {
  console.log('开始同步 CHANGELOG...');

  // 1. 获取上游内容
  const content = fs.readFileSync('CHANGELOG.md', 'utf-8');
  const versions = parseVersions(content);

  // 2. 读取已翻译版本
  const translated = getTranslatedVersions();

  // 3. 找出需要翻译的新版本
  const newVersions = versions.filter(v => !translated.includes(v.version));

  console.log(`共 ${versions.length} 个版本，已翻译 ${translated.length} 个，需翻译 ${newVersions.length} 个`);

  if (newVersions.length === 0) {
    console.log('没有新版本需要翻译');
    return;
  }

  // 4. 确保 versions 目录存在
  if (!fs.existsSync('versions')) {
    fs.mkdirSync('versions');
  }

  // 5. 保存所有版本的英文文件
  for (const v of versions) {
    fs.writeFileSync(`versions/${v.version}.md`, v.content);
  }

  // 6. 翻译新版本
  for (const v of newVersions) {
    console.log(`正在翻译版本 ${v.version}...`);
    const translated = translateVersion(v.version, v.content);
    fs.writeFileSync(`versions/${v.version}.cn.md`, translated);
  }

  // 7. 更新已翻译版本列表
  const allVersions = versions.map(v => v.version);
  fs.writeFileSync('.versions.json', JSON.stringify(allVersions, null, 2));

  console.log(`同步完成！已翻译 ${newVersions.length} 个新版本`);
}

main().catch(console.error);
