const Anthropic = require('@anthropic-ai/sdk');
const fs = require('fs');

// 读取原文
const content = fs.readFileSync('CHANGELOG.md', 'utf-8');

// 初始化 Anthropic 客户端
const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  baseURL: process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com',
});

async function translate() {
  console.log('开始翻译 CHANGELOG...');

  // 使用智谱 AI 支持的模型名称
  const model = process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022';

  const response = await client.messages.create({
    model: model,
    max_tokens: 15000,
    messages: [{
      role: 'user',
      content: `将以下 Claude Code CHANGELOG 内容翻译成中文。
要求：
1. 保持 Markdown 格式不变
2. 版本号保持不变（如 ## 2.0.74）
3. 列表符号（-）保持不变
4. 只翻译文本描述内容
5. 专有名词如 Claude Code、Opus、Sonnet、Haiku、MCP、LSP 等保持英文

请直接返回翻译后的 Markdown 内容，不要有任何额外说明：

${content}`
    }]
  });

  // 提取翻译内容
  const translatedContent = response.content[0].text;

  // 保存译文
  fs.writeFileSync('CHANGELOG_CN.md', translatedContent);
  console.log('翻译完成！已保存到 CHANGELOG_CN.md');
}

translate().catch(console.error);
