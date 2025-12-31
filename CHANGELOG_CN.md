# 更新日志

## 2.0.74

- 添加了 LSP (Language Server Protocol) 工具，用于代码智能功能，如转到定义、查找引用和悬停文档
- 添加了对 Kitty、Alacritty、Zed 和 Warp 终端的 `/terminal-setup` 支持
- 在 `/theme` 中添加了 ctrl+t 快捷键来切换语法高亮的开关
- 在主题选择器中添加了语法高亮信息
- 为 macOS 用户添加了有关终端配置导致 Alt 快捷键失败的指南
- 修复了技能 `allowed-tools` 未应用于技能调用的工具的问题
- 修复了当用户已经在使用 Opus 时错误显示 Opus 4.5 提示的问题
- 修复了当语法高亮未正确初始化时可能发生的崩溃
- 修复了 `/plugins discover` 中的视觉错误，即当搜索框处于焦点时显示列表选择指示器
- 修复了 macOS 键盘快捷键显示 'opt' 而不是 'alt' 的问题
- 改进了 `/context` 命令的可视化，按来源对技能和 agents、斜杠命令进行分组，并排序 token 计数
- [Windows] 修复了渲染不正确的问题
- [VSCode] 为年终促销消息添加了礼品标签符号

## 2.0.73

- 添加了可点击的 `[Image #N]` 链接，可在默认查看器中打开附加的图像
- 添加了 alt-y yank-pop，在 ctrl-y yank 后循环查看 kill ring 历史
- 为插件发现屏幕添加了搜索过滤（输入以按名称、描述或 marketplace 过滤）
- 添加了对自定义会话 ID 的支持，在使用 `--session-id` 结合 `--resume` 或 `--continue` 和 `--fork-session` 来 fork 会话时
- 修复了输入历史循环缓慢以及在提交消息后可能覆盖文本的竞态条件
- 改进了 `/theme` 命令以直接打开主题选择器
- 改进了主题选择器 UI
- 通过统一的 SearchBox 组件改进了恢复会话、权限和插件屏幕的搜索 UX
- [VSCode] 添加了选项卡图标徽章，显示待处理的权限（蓝色）和未读的补全（橙色）

## 2.0.72

- 添加了 Chrome 中的 Claude (Beta) 功能，该功能与 Chrome 扩展程序 (https://claude.ai/chrome) 配合使用，允许您直接从 Claude Code 控制浏览器
- 减少了终端闪烁
- 在移动应用提示中添加了可扫描的二维码，以便快速下载应用
- 添加了恢复对话时的加载指示器，以提供更好的反馈
- 修复了 `/context` 命令在非交互模式下不遵守自定义系统提示的问题
- 修复了使用 Ctrl+Y 粘贴时连续 Ctrl+K 行的顺序
- 改进了 @ 提及文件建议的速度（在 git 存储库中快约 3 倍）
- 改进了具有 `.ignore` 或 `.rgignore` 文件的存储库中的文件建议性能
- 改进了设置验证错误，使其更加突出
- 将思考切换键从 Tab 更改为 Alt+T，以避免意外触发

## 2.0.71

- 添加了 /config 切换以启用/禁用提示建议
- 添加了 `/settings` 作为 `/config` 命令的别名
- 修复了当光标位于路径中间时错误触发 @ 文件引用建议的问题
- 修复了使用 `--dangerously-skip-permissions` 时来自 `.mcp.json` 的 MCP 服务器未加载的问题
- 修复了权限规则错误地拒绝包含 shell glob 模式的有效 bash 命令（例如，`ls *.txt`、`for f in *.png`）
- Bedrock：现在遵守环境变量 `ANTHROPIC_BEDROCK_BASE_URL` 用于 token 计数和推断配置文件列出
- 原生构建的新语法高亮引擎

## 2.0.70

- 添加了 Enter 键以立即接受并提交提示建议（Tab 仍然接受进行编辑）
- 为 MCP 工具权限添加了通配符语法 `mcp__server__*`，以允许或拒绝服务器的所有工具
- 为插件 marketplace 添加了自动更新切换，允许对每个 marketplace 的自动更新进行控制
- 向状态行输入添加了 `current_usage` 字段，从而能够准确计算上下文窗口百分比
- 修复了在处理排队的命令时用户正在键入时输入被清除的问题
- 修复了按 Tab 键时提示建议替换键入输入的问题
- 修复了调整终端大小时差异视图未更新的问题
- 将大型对话的内存使用量提高了 3 倍
- 改进了复制到剪贴板 (Ctrl+S) 的统计截图的分辨率，以获得更清晰的图像
- 删除了用于快速内存输入的 # 快捷方式（改为告诉 Claude 编辑您的 CLAUDE.md）
- 修复了 /config 中的思考模式切换未正确持久化的问题
- 改进了文件创建权限对话框的 UI

## 2.0.69

- 小错误修复

## 2.0.68

- 通过将组合窗口正确定位在光标处，修复了对中文、日文和韩文等语言的 IME (Input Method Editor) 支持
- 修复了不允许的 MCP 工具对模型可见的错误
- 修复了 subagent 正在工作时可能丢失引导消息的问题
- 修复了 Option+Arrow 单词导航将整个 CJK（中文、日文、韩文）文本序列视为单个单词而不是按单词边界导航的问题
- 改进了计划模式退出 UX：当退出空或缺失的计划时，显示简化的“是/否”对话框，而不是抛出错误
- 添加了对企业托管设置的支持。联系您的 Anthropic 账户团队以启用此功能。

## 2.0.67

- Opus 4.5 默认启用思考模式
- 思考模式配置已移至 /config
- 向 `/permissions` 命令添加了搜索功能，使用 `/` 键盘快捷键按工具名称过滤规则
- 在 `/doctor` 中显示禁用自动更新程序的原因
- 修复了当另一个实例已经是最新版本时运行 `claude update` 时出现错误的“另一个进程当前正在更新 Claude”的错误
- 修复了在非交互模式（`-p` 标志或管道输入）下运行时来自 `.mcp.json` 的 MCP 服务器卡在挂起状态的问题
- 修复了在 `/permissions` 中删除权限规则后滚动位置重置的问题
- 修复了单词删除 (opt+delete) 和单词导航 (opt+arrow) 无法正确处理非拉丁文本（如西里尔文、希腊文、阿拉伯文、希伯来文、泰文和中文）的问题
- 修复了 `claude install --force` 未绕过过时锁文件的问题
- 修复了由于 markdown 删除线干扰，CLAUDE.md 中连续的 @~/ 文件引用被错误解析的问题
- Windows：修复了由于日志目录路径中的冒号导致插件 MCP 服务器失败的问题

## 2.0.65

- 添加了在编写提示时使用 alt+p (linux, windows)、option+p (macos) 切换模型的功能。
- 向状态行输入添加了上下文窗口信息
- 添加了用于自定义 `@` 文件搜索命令的 `fileSuggestion` 设置
- 添加了 `CLAUDE_CODE_SHELL` 环境变量以覆盖自动 shell 检测（当登录 shell 与实际工作 shell 不同时很有用）
- 修复了使用 Escape 中止查询时提示未保存到历史记录的问题
- 修复了 Read 工具图像处理以从字节而不是文件扩展名识别格式

## 2.0.64

- 使自动压缩即时进行
- Agents 和 bash 命令可以异步运行并发送消息以唤醒主 agent
- /stats 现在为用户提供有趣的 CC 统计数据，例如最喜欢的模型、使用图、使用连续记录
- 添加了命名会话支持：使用 `/rename` 命名会话，在 REPL 中使用 `/resume <name>` 或从终端使用 `claude --resume <name>` 恢复它们
- 添加了对 .claude/rules/ 的支持。有关详细信息，请参阅 https://code.claude.com/docs/en/memory。
- 调整图像大小时添加了图像尺寸元数据，从而能够准确映射大图像的坐标
- 修复了使用本机安装程序时自动加载 .env 的问题
- 修复了使用 `--continue` 或 `--resume` 标志时忽略 `--system-prompt` 的问题
- 改进了 `/resume` 屏幕，对 fork 的会话进行分组，并添加了预览 (P) 和重命名 (R) 的键盘快捷键
- VSCode：在代码块和 bash 工具输入上添加了复制到剪贴板按钮
- VSCode：通过模拟回退到 x64 二进制文件，修复了扩展程序在 Windows ARM64 上无法工作的问题
- Bedrock：提高 token 计数的效率
- Bedrock：添加对 `aws login` AWS Management Console 凭证的支持
- 取消发布 AgentOutputTool 和 BashOutputTool，转而使用新的统一 TaskOutputTool

## 2.0.62

- 为多项选择题添加了“（推荐）”指示器，推荐的选项移至列表顶部
- 添加了 `attribution` 设置以自定义提交和 PR 署名（弃用 `includeCoAuthoredBy`）
- 修复了当 ~/.claude 符号链接到项目目录时出现重复的斜杠命令的问题
- 修复了当多个命令共享相同名称时斜杠命令选择不起作用的问题
- 修复了符号链接技能目录中的技能文件可能成为循环符号链接的问题
- 修复了由于锁文件错误地过时而删除正在运行的版本的问题
- 修复了拒绝文件更改时 IDE 差异选项卡未关闭的问题

## 2.0.61

- 由于响应问题，恢复了对多个终端客户端的 VSCode 支持。

## 2.0.60

- 添加了后台 agent 支持。Agents 在您工作时在后台运行
- 添加了 --disable-slash-commands CLI 标志以禁用所有斜杠命令
- 向“Co-Authored-By”提交消息添加了模型名称
- 启用“/mcp enable [server-name]”或“/mcp disable [server-name]”以快速切换所有服务器
- 更新了 Fetch 以跳过预先批准的网站的摘要
- VSCode：添加了对多个终端客户端同时连接到 IDE 服务器的支持

## 2.0.59

- 添加了 --agent CLI 标志以覆盖当前会话的 agent 设置
- 添加了 `agent` 设置，以使用特定 agent 的系统提示、工具限制和模型配置主线程
- VS Code：修复了从错误位置读取 .claude.json 配置文件的问题

## 2.0.58

- Pro 用户现在可以访问 Opus 4.5 作为其订阅的一部分！
- 修复了计时器持续时间显示“11m 60s”而不是“12m 0s”的问题
- Windows：托管设置现在优先使用 `C:\Program Files\ClaudeCode`（如果存在）。未来版本中将取消对 `C:\ProgramData\ClaudeCode` 的支持。

## 2.0.57

- 添加了拒绝计划时的反馈输入，允许用户告诉 Claude 要更改什么
- VSCode：添加了流式消息支持，用于实时响应显示

## 2.0.56

- 添加了启用/禁用终端进度条 (OSC 9;4) 的设置
- VSCode 扩展：添加了对 VS Code 的辅助侧边栏（VS Code 1.97+）的支持，允许 Claude Code 显示在右侧侧边栏，同时将文件资源管理器保留在左侧。需要在配置中将侧边栏设置为首选位置。

## 2.0.55

- 修复了默认强制启用代理 DNS 解析的问题。现在通过 `CLAUDE_CODE_PROXY_RESOLVES_HOSTS=true` 环境变量选择加入
- 修复了在内存位置选择器中按住箭头键时键盘导航无响应的问题
- 改进了 AskUserQuestion 工具，在最后一个问题上自动提交单选问题，从而为简单的问题流程消除了额外的审查屏幕
- 改进了 `@` 文件建议的模糊匹配，结果更快、更准确

## 2.0.54

- Hooks：启用 PermissionRequest hooks 以处理“始终允许”建议并应用权限更新
- 修复了过多的 iTerm 通知问题

## 2.0.52

- 修复了使用命令行参数启动 Claude 时出现重复消息显示的问题
- 修复了 `/usage` 命令进度条随着使用增加而填充（而不是显示剩余百分比）的问题
- 修复了在运行 Wayland 的 Linux 系统上粘贴图像不起作用的问题（现在当 xclip 不可用时回退到 wl-paste）
- 允许在 bash 命令中使用某些 `$!`

## 2.0.51

- 添加了 Opus 4.5！https://www.anthropic.com/news/claude-opus-4-5
- 推出适用于桌面的 Claude Code：https://claude.com/download
- 为了给您空间试用我们的新模型，我们更新了 Claude Code 用户的使用限制。有关完整详细信息，请参阅 Claude Opus 4.5 博客
- Pro 用户现在可以购买额外的使用量以在 Claude Code 中访问 Opus 4.5
- 计划模式现在构建更精确的计划并执行得更彻底
- 使用限制通知现在更容易理解
- 将 `/usage` 切换回“已使用百分比”
- 修复了思考错误的处理
- 修复了性能回归

## 2.0.50

- 修复了阻止调用在其输入模式中具有嵌套引用的 MCP 工具的错误
- 在升级期间消除了嘈杂但无害的错误
- 改进了 ultrathink 文本显示
- 改进了 5 小时会话限制警告消息的清晰度

## 2.0.49

- 添加了 readline 风格的 ctrl-y 用于粘贴删除的文本
- 改进了使用限制警告消息的清晰度
- 修复了 subagent 权限的处理

## 2.0.47

- 改进了 `claude --teleport` 的错误消息和验证
- 改进了 `/usage` 中的错误处理
- 修复了退出时历史记录条目未记录的竞态条件
- 修复了未从 `settings.json` 应用 Vertex AI 配置的问题

## 2.0.46

- 修复了当无法从元数据检测格式时图像文件报告的媒体类型不正确的问题

## 2.0.45

- 添加了对 Microsoft Foundry 的支持！请参阅 https://code.claude.com/docs/en/azure-ai-foundry
- 添加了 `PermissionRequest` hook，以使用自定义逻辑自动批准或拒绝工具权限请求
- 通过以 `&` 开头消息将后台任务发送到 Web 上的 Claude Code

## 2.0.43

- 为自定义 agents 添加了 `permissionMode` 字段
- 向 `PreToolUseHookInput` 和 `PostToolUseHookInput` 类型添加了 `tool_use_id` 字段
- 添加了 skills frontmatter 字段，以声明为 subagents 自动加载的技能
- 添加了 `SubagentStart` hook 事件
- 修复了在 @-提及时未加载嵌套 `CLAUDE.md` 文件的问题
- 修复了 UI 中某些消息的重复渲染
- 修复了一些视觉闪烁
- 修复了当单元格 ID 与模式 `cell-N` 匹配时 NotebookEdit 工具在错误位置插入单元格的问题

## 2.0.42

- 向 `SubagentStop` hooks 添加了 `agent_id` 和 `agent_transcript_path` 字段。

## 2.0.41

- 向基于提示的停止 hooks 添加了 `model` 参数，允许用户为 hook 评估指定自定义模型
- 修复了来自用户设置的斜杠命令被加载两次的问题，这可能导致渲染问题
- 修复了在命令描述中错误标记用户设置与项目设置的问题
- 修复了插件命令 hooks 在执行期间超时时崩溃的问题
- 修复：Bedrock 用户在使用 `--model haiku` 时不再在 /model 选择器中看到重复的 Opus 条目
- 修复了信任对话框和入门指南中损坏的安全文档链接
- 修复了按 ESC 关闭差异模态框也会中断模型的问题
- ctrl-r 历史搜索落在斜杠命令上不再取消搜索
- SDK：支持 hooks 的自定义超时
- 允许更多安全的 git 命令在未经批准的情况下运行
- 插件：添加了对共享和安装输出样式的支持
- 从 web 传送会话将自动设置上游分支

## 2.0.37

- 修复了如何计算通知的空闲时间
- Hooks：为 Notification hook 事件添加了匹配器值
- 输出样式：向 frontmatter 添加了 `keep-coding-instructions` 选项

## 2.0.36

- 修复：DISABLE_AUTOUPDATER 环境变量现在正确禁用包管理器更新通知
- 修复了排队的消息被错误执行为 bash 命令的问题
- 修复了在处理排队的消息时键入时输入丢失的问题

## 2.0.35

- 改进搜索命令时的模糊搜索结果
- 改进了 VS Code 扩展以遵守整个 UI 中的 `chat.fontSize` 和 `chat.fontFamily` 设置，并立即应用字体更改而无需重新加载
- 添加了 `CLAUDE_CODE_EXIT_AFTER_STOP_DELAY` 环境变量，以便在指定的空闲持续时间后自动退出 SDK 模式，这对于自动化工作流和脚本很有用
- 将 `ignorePatterns` 从项目配置迁移到 localSettings 中的拒绝权限。
- 修复了菜单导航卡在具有空字符串或其他假值的项目上（例如，在 `/hooks` 菜单中）

## 2.0.34

- VSCode 扩展：添加了设置以配置新对话的初始权限模式
- 使用基于 Rust 的本机模糊查找器改进了文件路径建议性能
- 修复了导致具有 OAuth 的 MCP 服务器（例如，Slack）在连接期间挂起的无限令牌刷新循环
- 修复了读取或写入大文件（尤其是 base64 编码的图像）时的内存崩溃

## 2.0.33

- 本机二进制文件安装现在启动更快。
- 修复了 `claude doctor` 通过正确解析符号链接错误检测 Homebrew 与 npm 全局安装的问题
- 修复了 `claude mcp serve` 暴露具有不兼容 outputSchemas 的工具

## 2.0.32

- 根据社区反馈，取消弃用输出样式
- 添加了用于在启动时显示公告的 `companyAnnouncements` 设置
- 修复了 hook 进度消息在 PostToolUse hook 执行期间未正确更新的问题

## 2.0.31

- Windows：本机安装使用 shift+tab 作为模式切换的快捷方式，而不是 alt+m
- Vertex：为支持的模型添加了对 Web Search 的支持
- VSCode：添加 respectGitIgnore 配置以在文件搜索中包含 .gitignored 文件（默认为 true）
- 修复了 subagents 和 MCP 服务器与“工具名称必须唯一”错误相关的错误
- 修复了导致 `/compact` 因 `prompt_too_long` 而失败的问题，方法是使其遵守现有的压缩边界
- 修复了插件卸载未删除插件的问题

## 2.0.30

- 添加了有用的提示，以在 macOS 上使用锁定的钥匙串遇到 API 密钥错误时运行 `security unlock-keychain`
- 添加了 `allowUnsandboxedCommands` 沙箱设置以在策略级别禁用 dangerouslyDisableSandbox 逃生舱
- 向自定义 agent 定义添加了 `disallowedTools` 字段以进行显式工具阻止
- 添加了基于提示的停止 hooks
- VSCode：添加 respectGitIgnore 配置以在文件搜索中包含 .gitignored 文件（默认为 true）
- 在本机构建上启用 SSE MCP 服务器
- 弃用输出样式。查看 `/output-style` 中的选项并使用 --system-prompt-file、--system-prompt、--append-system-prompt、CLAUDE.md 或插件代替
- 取消对自定义 ripgrep 配置的支持，解决了 Search 不返回结果且配置发现失败的问题
- 修复了 Explore agent 在代码库探索期间创建不需要的 .md 调查文件的问题
- 修复了 `/context` 有时因“max_tokens must be greater than thinking.budget_tokens”错误消息而失败的问题
- 修复了 `--mcp-config` 标志以正确覆盖基于文件的 MCP 配置
- 修复了将会话权限保存到本地设置的错误
- 修复了 MCP 工具对 sub-agents 不可用的问题
- 修复了使用 --dangerously-skip-permissions 标志时 hooks 和插件未执行的问题
- 修复了使用箭头键浏览类型建议时的延迟
- VSCode：恢复了输入页脚中的选择指示器，显示当前文件或代码选择状态

## 2.0.28

- 计划模式：引入了新的 Plan subagent
- Subagents：claude 现在可以选择恢复 subagents
- Subagents：claude 可以动态选择其 subagents 使用的模型
- SDK：添加了 --max-budget-usd 标志
- 自定义斜杠命令、subagents 和输出样式的发现不再遵守 .gitignore
- 停止 `/terminal-setup` 向 VS Code 中的 `Shift + Enter` 添加反斜杠
- 使用片段语法为基于 git 的插件和 marketplace 添加分支和标签支持（例如，`owner/repo#branch`）
- 修复了从主目录启动时初始启动时 macOS 权限提示出现的错误
- 各种其他错误修复

## 2.0.27

- 权限提示的新 UI
- 向会话恢复屏幕添加了当前分支过滤和搜索，以便于导航
- 修复了目录 @-mention 导致“No assistant message found”错误的问题
- VSCode 扩展：添加配置设置以在文件搜索中包含 .gitignored 文件
- VSCode 扩展：修复了不相关的“Warmup”对话以及配置/设置偶尔重置为默认值的错误

## 2.0.25

- 删除了旧的 SDK 入口点。请迁移到 @anthropic-ai/claude-agent-sdk 以获取未来的 SDK 更新：https://platform.claude.com/docs/en/agent-sdk/migration-guide

## 2.0.24

- 修复了指定 --setting-sources 'project' 时未加载项目级技能的错误
- Claude Code Web：支持 Web -> CLI 传送
- 沙箱：在 Linux 和 Mac 上的 BashTool 上发布沙箱模式
- Bedrock：当需要身份验证时显示 awsAuthRefresh 输出

## 2.0.22

- 修复了滚动浏览斜杠命令时的内容布局偏移
- IDE：添加切换以启用/禁用思考。
- 修复了导致并行工具调用出现重复权限提示的错误
- 添加对企业托管 MCP 允许列表和拒绝列表的支持

## 2.0.21

- 支持工具响应中的 MCP `structuredContent` 字段
- 添加了交互式问题工具
- Claude 现在将更频繁地在计划模式下向您提问
- 为 Pro 用户添加了 Haiku 4.5 作为模型选项
- 修复了排队的命令无权访问先前消息输出的问题

## 2.0.20

- 添加了对 Claude Skills 的支持

## 2.0.19

- 自动后台运行长时间运行的 bash 命令，而不是终止它们。使用 BASH_DEFAULT_TIMEOUT_MS 自定义
- 修复了 Haiku 在打印模式下不必要被调用的错误

## 2.0.17

- 将 Haiku 4.5 添加到模型选择器！
- Haiku 4.5 在计划模式下自动使用 Sonnet，在执行时使用 Haiku（即默认为 SonnetPlan）
- 3P（Bedrock 和 Vertex）尚未自动升级。可以通过设置 `ANTHROPIC_DEFAULT_HAIKU_MODEL` 进行手动升级
- 推出 Explore subagent。由 Haiku 驱动，它将高效搜索您的代码库以保存上下文！
- OTEL：支持 HTTP_PROXY 和 HTTPS_PROXY
- `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` 现在禁用发行说明获取

## 2.0.15

- 修复了恢复时之前创建的文件需要再次读取才能写入的错误
- 修复了 `-p` 模式下 @-mentioned 文件需要再次读取才能写入的错误

## 2.0.14

- 修复了 @-提及时 MCP 服务器以将其切换开/关的问题
- 改进了带有内联环境变量的 bash 的权限检查
- 修复了 ultrathink + 思考切换
- 减少不必要的登录
- 记录 --system-prompt
- 渲染的几项改进
- 插件 UI 打磨

## 2.0.13

- 修复了 `/plugin` 在本机构建上不起作用的问题

## 2.0.12

- **插件系统发布**：使用来自 marketplace 的自定义命令、agents、hooks 和 MCP 服务器扩展 Claude Code
- `/plugin install`、`/plugin enable/disable`、`/plugin marketplace` 命令用于插件管理
- 通过 `extraKnownMarketplaces` 进行存储库级插件配置以实现团队协作
- `/plugin validate` 命令用于验证插件结构和配置
- 插件公告博客文章位于 https://www.anthropic.com/news/claude-code-plugins
- 插件文档位于 https://code.claude.com/docs/en/plugins
- 通过 `/doctor` 命令提供全面的错误消息和诊断
- 避免在 `/model` 选择器中闪烁
- 改进 `/help`
- 避免在 `/resume` 摘要中提及 hooks
- 现在跨会话持续保留 `/config` 中的“verbose”设置更改

## 2.0.11

- 将系统提示大小减少了 1.4k tokens
- IDE：修复了键盘快捷键和焦点问题，以实现更流畅的交互
- 修复了 Opus 回退速率限制错误出现不正确的问题
- 修复了 /add-dir 命令选择了错误的默认选项卡

## 2.0.10

- 重写了终端渲染器，以实现如丝般顺滑的 UI
- 通过 @mention 或在 /mcp 中启用/禁用 MCP 服务器
- 在 bash 模式下为 shell 命令添加了 Tab 补全
- PreToolUse hooks 现在可以修改工具输入
- 按 Ctrl-G 在系统配置的文本编辑器中编辑您的提示
- 修复了命令中带有环境变量的 bash 权限检查

## 2.0.9

- 修复了 bash 后台停止工作的回归问题

## 2.0.8

- 将 Bedrock 默认 Sonnet 模型更新为 `global.anthropic.claude-sonnet-4-5-20250929-v1:0`
- IDE：在聊天中添加了对文件和文件夹的拖放支持
- /context：修复了思考块的计数
- 为在深色终端上使用浅色主题的用户改进了消息渲染
- 删除了已弃用的 .claude.json allowedTools、ignorePatterns、env 和 todoFeatureEnabled 配置选项（改为在 settings.json 中配置这些）

## 2.0.5

- IDE：修复了使用 Enter 和 Tab 进行 IME 意外提交消息的问题
- IDE：在登录屏幕中添加了“在终端中打开”链接
- 修复了未处理的 OAuth 过期 401 API 错误
- SDK：添加了 SDKUserMessageReplay.isReplay 以防止重复消息

## 2.0.1

- 跳过 Bedrock 和 Vertex 的 Sonnet 4.5 默认模型设置更改
- 各种错误修复和演示改进

## 2.0.0

- 新的本机 VS Code 扩展
- 整个应用程序的新外观
- /rewind 对话以撤消代码更改
- /usage 命令以查看计划限制
- 按 Tab 切换思考（跨会话粘滞）
- Ctrl-R 搜索历史
- 取消发布 claude config 命令
- Hooks：减少了 PostToolUse 'tool_use' ids 在没有 'tool_result' 块错误的情况下被发现的情况
- SDK：Claude Code SDK 现在是 Claude Agent SDK
- 使用 `--agents` 标志动态添加 subagents

## 1.0.126

- 为 Bedrock 和 Vertex 启用 /context 命令
- 为基于 HTTP 的 OpenTelemetry 导出器添加 mTLS 支持

## 1.0.124

- 将 `CLAUDE_BASH_NO_LOGIN` 环境变量设置为 1 或 true 以跳过 BashTool 的登录 shell
- 修复了 Bedrock 和 Vertex 环境变量将所有字符串评估为真值的问题
- 当权限被拒绝时，不再通知 Claude 允许的工具列表
- 修复了 Bash 工具权限检查中的安全漏洞
- 改进了大型文件的 VSCode 扩展性能

## 1.0.123

- Bash 权限规则现在在匹配时支持输出重定向（例如，`Bash(python:*)` 匹配 `python script.py > output.txt`）
- 修复了思考模式在“不要思考”等否定短语上触发的问题
- 修复了 token 流式传输期间的渲染性能下降
- 添加了 SlashCommand 工具，它使 Claude 能够调用您的斜杠命令。https://code.claude.com/docs/en/slash-commands#SlashCommand-tool
- 增强了 BashTool 环境快照日志记录
- 修复了在无头模式下恢复对话有时会不必要地启用思考的错误
- 将 --debug 日志记录迁移到文件，以便轻松 tail 和过滤

## 1.0.120

- 修复了键入期间的输入延迟，尤其是在大提示中很明显
- 改进了 VSCode 扩展命令注册和会话对话框用户体验
- 增强了会话对话框响应能力和视觉反馈
- 通过删除 worktree 支持检查修复了 IDE 兼容性问题
- 修复了安全漏洞，即可以使用前缀匹配绕过 Bash 工具权限检查

## 1.0.119

- 修复了 Windows 在进入交互模式时进程在视觉上冻结的问题
- 通过 headersHelper 配置支持 MCP 服务器的动态标头
- 修复了思考模式在无头会话中不起作用的问题
- 修复了斜杠命令现在正确更新允许的工具而不是替换它们

## 1.0.117

- 添加 Ctrl-R 历史搜索以像 bash/zsh 一样调用以前的命令
- 修复键入时的输入延迟，尤其是在 Windows 上
- 将 sed 命令添加到 acceptEdits 模式下的自动允许命令
- 修复 Windows PATH 比较以不区分驱动器字母的大小写
- 向 /add-dir 输出添加了权限管理提示

## 1.0.115

- 通过增强的视觉效果改进思考模式显示
- 输入 /t 以在提示中临时禁用思考模式
- 改进 glob 和 grep 工具的路径验证
- 为 post-tool hooks 显示浓缩输出以减少视觉混乱
- 修复了加载状态完成时的视觉反馈
- 改进了权限请求对话框的 UI 一致性

## 1.0.113

- 弃用了交互模式下的管道输入
- 将用于切换记录的 Ctrl+R 键绑定移动到 Ctrl+O

## 1.0.112

- 记录模式 (Ctrl+R)：添加了用于生成每个助手消息的模型
- 解决了某些 Claude Max 用户被错误识别为 Claude Pro 用户的问题
- Hooks：为 SessionEnd hooks 添加了 systemMessage 支持
- 添加了 `spinnerTipsEnabled` 设置以禁用微调器提示
- IDE：各种改进和错误修复

## 1.0.111

- /model 现在验证提供的模型名称
- 修复了由格式错误的 shell 语法解析导致的 Bash 工具崩溃

## 1.0.110

- /terminal-setup 命令现在支持 WezTerm
- MCP：OAuth 令牌现在在过期前主动刷新
- 修复了后台 Bash 进程的可靠性问题

## 1.0.109

- SDK：通过 `--include-partial-messages` CLI 标志添加了部分消息流支持

## 1.0.106

- Windows：修复了路径权限匹配以一致地使用 POSIX 格式（例如，`Read(//c/Users/...)`）

## 1.0.97

- 设置：/doctor 现在验证权限规则语法并建议更正

## 1.0.94

- Vertex：为支持的模型添加了对全局端点的支持
- /memory 命令现在允许直接编辑所有导入的内存文件
- SDK：将自定义工具添加为回调
- 添加了 /todos 命令以列出当前的待办事项

## 1.0.93

- Windows：添加 alt + v 快捷键以从剪贴板粘贴图像
- 支持 NO_PROXY 环境变量以绕过指定主机名和 IP 的代理

## 1.0.90

- 设置文件更改立即生效 - 无需重新启动

## 1.0.88

- 修复了导致“当前不支持 OAuth 身份验证”的问题
- 状态行输入现在包括 `exceeds_200k_tokens`
- 修复了 /cost 中不正确的使用跟踪。
- 引入了 `ANTHROPIC_DEFAULT_SONNET_MODEL` 和 `ANTHROPIC_DEFAULT_OPUS_MODEL` 用于控制模型别名 opusplan、opus 和 sonnet。
- Bedrock：将默认 Sonnet 模型更新为 Sonnet 4

## 1.0.86

- 添加了 /context 以帮助用户自助调试上下文问题
- SDK：为所有 SDK 消息添加了 UUID 支持
- SDK：添加了 `--replay-user-messages` 以将用户消息回放到 stdout

## 1.0.85

- 状态行输入现在包括会话费用信息
- Hooks：引入了 SessionEnd hook

## 1.0.84

- 修复了网络不稳定时 tool_use/tool_result id 不匹配错误
- 修复了 Claude 在完成任务时有时忽略实时引导的问题
- @-mention：将 ~/.claude/\* 文件添加到建议中，以便更轻松地编辑 agent、输出样式和斜杠命令
- 默认使用内置 ripgrep；若要选择退出此行为，请设置 USE_BUILTIN_RIPGREP=0

## 1.0.83

- @-mention：支持路径中带有空格的文件
- 新的闪烁微调器

## 1.0.82

- SDK：添加请求取消支持
- SDK：新的 additionalDirectories 选项以搜索自定义路径，改进了斜杠命令处理
- 设置：验证防止 .claude/settings.json 文件中的无效字段
- MCP：改进工具名称一致性
- Bash：修复了当 Claude 尝试自动读取大文件时崩溃的问题

## 1.0.81

- 发布了输出样式，包括新的内置教育输出样式“解释性”和“学习”。文档：https://code.claude.com/docs/en/output-styles
- Agents：修复了当 agent 文件无法解析时的自定义 agent 加载

## 1.0.80

- UI 改进：修复了自定义 subagent 颜色的文本对比度和微调器渲染问题

## 1.0.77

- Bash 工具：修复了 heredoc 和多行字符串转义，改进了 stderr 重定向处理
- SDK：添加了会话支持和权限拒绝跟踪
- 修复了对话摘要中的 token 限制错误
- Opus 计划模式：/model 中的新设置，仅在计划模式下运行 Opus，否则运行 Sonnet

## 1.0.73

- MCP：使用 `--mcp-config file1.json file2.json` 支持多个配置文件
- MCP：按 Esc 取消 OAuth 身份验证流程
- Bash：改进了命令验证并减少了虚假安全警告
- UI：增强了微调器动画和状态行视觉层次
- Linux：添加了对基于 Alpine 和 musl 的发行版的支持（需要单独安装 ripgrep）

## 1.0.72

- 询问权限：让 Claude Code 始终请求确认以使用 /permissions 中的特定工具

## 1.0.71

- 后台命令：(Ctrl-b) 在后台运行任何 Bash 命令，以便 Claude 可以继续工作（非常适合开发服务器、tail 日志等）
- 可自定义的状态行：使用 /statusline 将您的终端提示添加到 Claude Code

## 1.0.70

- 性能：优化了消息渲染以提高大型上下文的性能
- Windows：修复了本机文件搜索、ripgrep 和 subagent 功能
- 添加了对斜杠命令参数中 @-mentions 的支持

## 1.0.69

- 将 Opus 升级到 4.1 版本

## 1.0.68

- 修复了某些命令（如 `/pr-comments`）使用了不正确的模型名称
- Windows：改进 allow/deny 工具和项目信任的权限检查。这可能会在 `.claude.json` 中创建新的项目条目 - 如果需要，请手动合并历史记录字段。
- Windows：改进子进程生成以消除运行 pnpm 等命令时的“No such file or directory”
- 使用 CLAUDE.md 和 MCP 工具上下文增强了 /doctor 命令以进行自助调试
- SDK：添加了 canUseTool 回调支持以进行工具确认
- 添加了 `disableAllHooks` 设置
- 改进了大型存储库中的文件建议性能

## 1.0.65

- IDE：修复了连接稳定性问题和诊断错误处理
- Windows：为没有 .bashrc 文件的用户修复了 shell 环境设置

## 1.0.64

- Agents：添加了模型自定义支持 - 您现在可以指定 agent 应该使用的模型
- Agents：修复了对递归 agent 工具的意外访问
- Hooks：向 hook JSON 输出添加了 systemMessage 字段，用于显示警告和上下文
- SDK：修复了跨多轮对话的用户输入跟踪
- 向文件搜索和 @-mention 建议添加了隐藏文件

## 1.0.63

- Windows：修复了文件搜索、@agent mentions 和自定义斜杠命令功能

## 1.0.62

- 添加了 @-mention 支持，并为自定义 agents 提供了类型提示。@<your-custom-agent> 以调用它
- Hooks：为新的会话初始化添加了 SessionStart hook
- /add-dir 命令现在支持目录路径的类型提示
- 改进了网络连接检查的可靠性

## 1.0.61

- 记录模式 (Ctrl+R)：将 Esc 更改为退出记录模式而不是中断
- 设置：添加了 `--settings` 标志以从 JSON 文件加载设置
- 设置：修复了作为符号链接的设置文件路径的解析
- OTEL：修复了身份验证更改后报告错误的组织
- 斜杠命令：修复了 Bash 的 allowed-tools 权限检查
- IDE：添加了在 VSCode MacOS 中使用 ⌘+V 粘贴图像的支持
- IDE：添加了 `CLAUDE_CODE_AUTO_CONNECT_IDE=false` 以禁用 IDE 自动连接
- 添加了 `CLAUDE_CODE_SHELL_PREFIX` 用于包装由 Claude Code 运行的 Claude 和用户提供的 shell 命令

## 1.0.60

- 您现在可以为专门的任务创建自定义 subagents！运行 /agents 开始

## 1.0.59

- SDK：添加了带有 canUseTool 回调的工具确认支持
- SDK：允许为生成的进程指定 env
- Hooks：向 hooks 公开了 PermissionDecision（包括“ask”）
- Hooks：UserPromptSubmit 现在在高级 JSON 输出中支持 additionalContext
- 修复了某些指定 Opus 的 Max 用户仍会看到回退到 Sonnet 的问题

## 1.0.58

- 添加了对读取 PDF 的支持
- MCP：改进了 'claude mcp list' 中的服务器健康状况显示
- Hooks：为 hook 命令添加了 CLAUDE_PROJECT_DIR 环境变量

## 1.0.57

- 添加了在斜杠命令中指定模型的支持
- 改进了权限消息以帮助 Claude 了解允许的工具
- 修复：从终端包装的 bash 输出中删除尾随换行符

## 1.0.56

- Windows：在支持终端 VT 模式的 Node.js 版本上启用 shift+tab 进行模式切换
- 修复了 WSL IDE 检测
- 修复了导致 awsRefreshHelper 对 .aws 目录的更改未被获取的问题

## 1.0.55

- 阐明了 Opus 4 和 Sonnet 4 模型的知识截止日期
- Windows：修复了 Ctrl+Z 崩溃
- SDK：添加了捕获错误日志的能力
- 添加 --system-prompt-file 选项以在打印模式下覆盖系统提示

## 1.0.54

- Hooks：添加了 UserPromptSubmit hook 和当前工作目录到 hook 输入
- 自定义斜杠命令：向 frontmatter 添加了 argument-hint
- Windows：OAuth 使用端口 45454 并正确构造浏览器 URL
- Windows：模式切换现在使用 alt + m，并且计划模式正确渲染
- Shell：切换到内存中 shell 快照以修复与文件相关的错误

## 1.0.53

- 将 @-mention 文件截断从 100 行更新为 2000 行
- 为 AWS 令牌刷新添加了帮助脚本设置：awsAuthRefresh（用于 aws sso login 等前台操作）和 awsCredentialExport（用于类似 STS 响应的后台操作）。

## 1.0.52

- 添加了对 MCP 服务器指令的支持

## 1.0.51

- 添加了对本机 Windows 的支持（需要 Git for Windows）
- 添加了对通过环境变量 AWS_BEARER_TOKEN_BEDROCK 使用 Bedrock API 密钥的支持
- 设置：/doctor 现在可以帮助您识别和修复无效的设置文件
- `--append-system-prompt` 现在可以在交互模式下使用，而不仅仅是 --print/-p。
- 将自动压缩警告阈值从 60% 增加到 80%
- 修复了处理带有空格的用户目录以进行 shell 快照的问题
- OTEL 资源现在包括 os.type、os.version、host.arch 和 wsl.version（如果在 Windows Subsystem for Linux 上运行）
- 自定义斜杠命令：修复了子目录中的用户级命令
- 计划模式：修复了来自子任务的被拒绝计划会被丢弃的问题

## 1.0.48

- 修复了 v1.0.45 中的应用程序有时在启动时冻结的错误
- 根据命令输出的最后 5 行向 Bash 工具添加了进度消息
- 为 MCP 服务器配置添加了扩展变量支持
- 将 shell 快照从 /tmp 移至 ~/.claude，以实现更可靠的 Bash 工具调用
- 改进了当 Claude Code 在 WSL 中运行时的 IDE 扩展路径处理
- Hooks：添加了 PreCompact hook
- Vim 模式：添加了 c、f/F、t/T

## 1.0.45

- 使用新的工具输入参数和功能重新设计了搜索 (Grep) 工具
- 为笔记本文件禁用了 IDE 差异，修复了“Timeout waiting after 1000ms”错误
- 通过强制原子写入修复了配置文件损坏问题
- 更新了提示输入撤消为 Ctrl+\_，以避免破坏现有的 Ctrl+U 行为，匹配 zsh 的撤消快捷键
- 停止 Hooks：修复了 /clear 之后的记录路径，并修复了循环以工具调用结束时触发的问题
- 自定义斜杠命令：根据子目录恢复了命令名称中的命名空间。例如，.claude/commands/frontend/component.md 现在是 /frontend:component，而不是 /component。

## 1.0.44

- 新的 /export 命令让您可以快速导出对话以进行共享
- MCP：现在支持 resource_link 工具结果
- MCP：工具注释和工具标题现在显示在 /mcp 视图中
- 将 Ctrl+Z 更改为挂起 Claude Code。通过运行 `fg` 恢复。提示输入撤消现在是 Ctrl+U。

## 1.0.43

- 修复了主题选择器过度保存的错误
- Hooks：添加了 EPIPE 系统错误处理

## 1.0.42

- 向 `/add-dir` 命令添加了波浪号 (`~`) 扩展支持

## 1.0.41

- Hooks：将 Stop hook 触发拆分为 Stop 和 SubagentStop
- Hooks：为每个命令启用了可选的超时配置
- Hooks：向 hook 输入添加了“hook_event_name”
- 修复了 MCP 工具在工具列表中显示两次的错误
- `tool_decision` 事件中 Bash 工具的新工具参数 JSON

## 1.0.40

- 修复了导致 API 连接错误并显示 UNABLE_TO_GET_ISSUER_CERT_LOCALLY（如果设置了 `NODE_EXTRA_CA_CERTS`）的错误

## 1.0.39

- OpenTelemetry 日志记录中的新活动时间指标

## 1.0.38

- 发布了 hooks。特别感谢 https://github.com/anthropics/claude-code/issues/712 中的社区输入。文档：https://code.claude.com/docs/en/hooks

## 1.0.37

- 删除了通过 ANTHROPIC_AUTH_TOKEN 或 apiKeyHelper 设置 `Proxy-Authorization` 标头的能力

## 1.0.36

- Web 搜索现在考虑今天的日期
- 修复了 stdio MCP 服务器在退出时未正确终止的错误

## 1.0.35

- 添加了对 MCP OAuth 授权服务器发现的支持

## 1.0.34

- 修复了导致出现 MaxListenersExceededWarning 消息的内存泄漏

## 1.0.33

- 改进了带有会话 ID 支持的日志记录功能
- 添加了提示输入撤消功能（Ctrl+Z 和 vim 'u' 命令）
- 计划模式的改进

## 1.0.32

- 更新了 litellm 的环回配置
- 添加了 forceLoginMethod 设置以绕过登录选择屏幕

## 1.0.31

- 修复了当文件包含无效 JSON 时 ~/.claude.json 被重置的错误

## 1.0.30

- 自定义斜杠命令：运行 bash 输出、@-mention 文件，使用思考关键词启用思考
- 通过文件名匹配改进了文件路径自动补全
- 在 Ctrl-r 模式下添加了时间戳并修复了 Ctrl-c 处理
- 增强了 jq 正则表达式对带有管道和 select 的复杂过滤器的支持

## 1.0.29

- 改进了光标导航和渲染中的 CJK 字符支持

## 1.0.28

- 斜杠命令：修复了历史导航期间的选择器显示
- 上传前调整图像大小以防止 API 大小限制错误
- 向配置目录添加了 XDG_CONFIG_HOME 支持
- 内存使用的性能优化
- OpenTelemetry 日志记录中的新属性（terminal.type、language）

## 1.0.27

- 现在支持可流式传输的 HTTP MCP 服务器
- 远程 MCP 服务器（SSE 和 HTTP）现在支持 OAuth
- MCP 资源现在可以被 @-mentioned
- /resume 斜杠命令以在 Claude Code 中切换对话

## 1.0.25

- 斜杠命令：将“project”和“user”前缀移至描述
- 斜杠命令：改进了命令发现的可靠性
- 改进对 Ghostty 的支持
- 改进了 Web 搜索的可靠性

## 1.0.24

- 改进了 /mcp 输出
- 修复了设置数组被覆盖而不是合并的错误

## 1.0.23

- 发布了 TypeScript SDK：导入 @anthropic-ai/claude-code 开始
- 发布了 Python SDK：pip install claude-code-sdk 开始

## 1.0.22

- SDK：将 `total_cost` 重命名为 `total_cost_usd`

## 1.0.21

- 改进了基于制表符缩进的文件的编辑可靠性
- 修复了 tool_use 没有匹配 tool_result 错误的问题
- 修复了 stdio MCP 服务器进程在退出 Claude Code 后仍然存在的错误

## 1.0.18

- 添加了 --add-dir CLI 参数以指定其他工作目录
- 添加了流式输入支持，无需 -p 标志
- 改进了启动性能和会话存储性能
- 添加了 CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR 环境变量以冻结 bash 命令的工作目录
- 添加了详细的 MCP 服务器工具显示 (/mcp)
- MCP 身份验证和权限改进
- 为 MCP SSE 连接在断开连接时添加了自动重新连接
- 修复了出现对话框时粘贴内容丢失的问题

## 1.0.17

- 我们现在在 -p 模式下从子任务发出消息（查找 parent_tool_use_id 属性）
- 修复了快速多次调用 VS Code 差异工具时崩溃的问题
- MCP 服务器列表 UI 改进
- 将 Claude Code 进程标题更新为显示“claude”而不是“node”

## 1.0.11

- Claude Code 现在也可以与 Claude Pro 订阅一起使用
- 添加了 /upgrade 以更平稳地切换到 Claude Max 计划
- 改进了从 API 密钥和 Bedrock/Vertex/外部身份验证令牌进行身份验证的 UI
- 改进了 shell 配置错误处理
- 改进了压缩期间的待办事项列表处理

## 1.0.10

- 添加了 markdown 表格支持
- 改进了流式传输性能

## 1.0.8

- 修复了使用 CLOUD_ML_REGION 时的 Vertex AI 区域回退
- 将默认 otel 间隔从 1s 增加到 5s
- 修复了 MCP_TIMEOUT 和 MCP_TOOL_TIMEOUT 未被遵守的边缘情况
- 修复了搜索工具不必要地询问权限的回归
- 添加了对触发非英语语言思考的支持
- 改进了压缩 UI

## 1.0.7

- 将 /allowed-tools 重命名为 /permissions
- 将 allowedTools 和 ignorePatterns 从 .claude.json 迁移到 settings.json
- 弃用了 claude config 命令，转而使用编辑 settings.json
- 修复了 --dangerously-skip-permissions 在 --print 模式下有时不起作用的错误
- 改进了 /install-github-app 的错误处理
- 错误修复、UI 打磨和工具可靠性改进

## 1.0.6

- 改进了基于制表符缩进的文件的编辑可靠性
- 在任何地方遵守 CLAUDE_CONFIG_DIR
- 减少了不必要的工具权限提示
- 添加了对 @file 类型提示中符号链接的支持
- 错误修复、UI 打磨和工具可靠性改进

## 1.0.4

- 修复了 MCP 工具错误未正确解析的错误

## 1.0.1

- 添加了 `DISABLE_INTERLEAVED_THINKING` 以给用户选择退出交错思考的机会。
- 改进了模型引用以显示特定于提供商的名称（Bedrock 的 Sonnet 3.7，Console 的 Sonnet 4）
- 更新了文档链接和 OAuth 过程描述

## 1.0.0

- Claude Code 现已正式发布
- 推出了 Sonnet 4 和 Opus 4 模型

## 0.2.125

- 重大更改：传递给 `ANTHROPIC_MODEL` 或 `ANTHROPIC_SMALL_FAST_MODEL` 的 Bedrock ARN 不应再包含转义的斜杠（指定 `/` 而不是 `%2F`）
- 删除了 `DEBUG=true`，转而使用 `ANTHROPIC_LOG=debug`，以记录所有请求

## 0.2.117

- 重大更改：--print JSON 输出现在返回嵌套的消息对象，以实现向前兼容性，因为我们引入了新的元数据字段
- 引入了 settings.cleanupPeriodDays
- 引入了 CLAUDE_CODE_API_KEY_HELPER_TTL_MS 环境变量
- 引入了 --debug 模式

## 0.2.108

- 您现在可以在 Claude 工作时发送消息以实时引导 Claude
- 引入了 BASH_DEFAULT_TIMEOUT_MS 和 BASH_MAX_TIMEOUT_MS 环境变量
- 修复了思考在 -p 模式下不起作用的错误
- 修复了 /cost 报告中的回归
- 弃用了 MCP 向导界面，转而使用其他 MCP 命令
- 许多其他错误修复和改进

## 0.2.107

- CLAUDE.md 文件现在可以导入其他文件。将 @path/to/file.md 添加到 ./CLAUDE.md 以在启动时加载其他文件

## 0.2.106

- MCP SSE 服务器配置现在可以指定自定义标头
- 修复了 MCP 权限提示并不总是正确显示的错误

## 0.2.105

- Claude 现在可以搜索 Web
- 将系统和帐户状态移至 /status
- 为 Vim 添加了单词移动键绑定
- 改进了启动、todo 工具和文件编辑的延迟

## 0.2.102

- 改进了思考触发可靠性
- 改进了图像和文件夹的 @mention 可靠性
- 您现在可以将多个大块粘贴到一个提示中

## 0.2.100

- 修复了由堆栈溢出错误导致的崩溃
- 使数据库存储成为可选；缺少数据库支持会禁用 --continue 和 --resume

## 0.2.98

- 修复了自动压缩运行两次的问题

## 0.2.96

- Claude Code 现在也可以与 Claude Max 订阅一起使用 (https://claude.ai/upgrade)

## 0.2.93

- 使用“claude --continue”和“claude --resume”从中断的地方恢复对话
- Claude 现在可以访问待办事项列表，以帮助它保持正轨并更有条理

## 0.2.82

- 添加了对 --disallowedTools 的支持
- 为了一致性重命名了工具：LSTool -> LS、View -> Read 等

## 0.2.75

- 按 Enter 键在 Claude 工作时排队其他消息
- 将图像文件拖动或复制/粘贴直接到提示中
- @-mention 文件以直接将其添加到上下文
- 使用 `claude --mcp-config <path-to-file>` 运行一次性 MCP 服务器
- 改进了文件名自动完成的性能

## 0.2.74

- 添加了对刷新动态生成的 API 密钥（通过 apiKeyHelper）的支持，TTL 为 5 分钟
- Task 工具现在可以执行写入和运行 bash 命令

## 0.2.72

- 更新了微调器以指示加载的 tokens 和工具使用情况

## 0.2.70

- 像 curl 这样的网络命令现在可供 Claude 使用
- Claude 现在可以并行运行多个 Web 查询
- 在自动接受模式下按 ESC 一次会立即中断 Claude

## 0.2.69

- 通过改进 Select 组件行为修复了 UI 故障
- 增强了终端输出显示，具有更好的文本截断逻辑

## 0.2.67

- 共享项目权限规则可以保存在 .claude/settings.json 中

## 0.2.66

- 打印模式 (-p) 现在通过 --output-format=stream-json 支持流式输出
- 修复了粘贴可能意外触发内存或 bash 模式的问题

## 0.2.63

- 修复了 MCP 工具被加载两次从而导致工具调用错误的问题

## 0.2.61

- 使用 vim 风格键 (j/k) 或 bash/emacs 快捷键 (Ctrl+n/p) 导航菜单以更快地交互
- 增强了图像检测，以实现更可靠的剪贴板粘贴功能
- 修复了 ESC 键可能崩溃对话历史选择器的问题

## 0.2.59

- 将图像复制+粘贴直接到您的提示中
- 改进了 bash 和 fetch 工具的进度指示器
- 非交互模式 (-p) 的错误修复

## 0.2.54

- 通过以“#”开头消息快速添加到内存
- 按 ctrl+r 查看长工具结果的完整输出
- 添加了对 MCP SSE 传输的支持

## 0.2.53

- 新的 Web 获取工具让 Claude 可以查看您粘贴的 URL
- 修复了 JPEG 检测的错误

## 0.2.50

- 新的 MCP“project”范围现在允许您将 MCP 服务器添加到 .mcp.json 文件并将其提交到您的存储库

## 0.2.49

- 以前的 MCP 服务器范围已重命名：以前的“project”范围现在是“local”，“global”范围现在是“user”

## 0.2.47

- 按 Tab 键自动完成文件和文件夹名称
- 按 Shift + Tab 切换文件编辑的自动接受
- 自动对话压缩以实现无限对话长度（使用 /config 切换）

## 0.2.44

- 让 Claude 使用思考模式制定计划：只需说“think”或“think harder”，甚至“ultrathink”

## 0.2.41

- MCP 服务器启动超时现在可以通过 MCP_TIMEOUT 环境变量进行配置
- MCP 服务器启动不再阻止应用程序启动

## 0.2.37

- 新的 /release-notes 命令让您可以随时查看发行说明
- `claude config add/remove` 命令现在接受用逗号或空格分隔的多个值

## 0.2.36

- 使用 `claude mcp add-from-claude-desktop` 从 Claude Desktop 导入 MCP 服务器
- 使用 `claude mcp add-json <n> <json>` 将 MCP 服务器添加为 JSON 字符串

## 0.2.34

- 文本输入的 Vim 绑定 - 使用 /vim 或 /config 启用

## 0.2.32

- 交互式 MCP 设置向导：运行“claude mcp add”以添加具有逐步界面的 MCP 服务器
- 修复了一些 PersistentShell 问题

## 0.2.31

- 自定义斜杠命令：.claude/commands/ 目录中的 Markdown 文件现在显示为自定义斜杠命令，以将提示插入到您的对话中
- MCP 调试模式：使用 --mcp-debug 标志运行以获取有关 MCP 服务器错误的更多信息

## 0.2.30

- 添加了 ANSI 颜色主题以更好地兼容终端
- 修复了斜杠命令参数未正确发送的问题
- （仅限 Mac）API 密钥现在存储在 macOS 钥匙串中

## 0.2.26

- 新的 /approved-tools 命令用于管理工具权限
- 单词级差异显示以提高代码可读性
- 斜杠命令的模糊匹配

## 0.2.21

- /commands 的模糊匹配