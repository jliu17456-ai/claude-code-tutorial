/* ============================================================
   Claude Code 通关秘籍 · 中英双语切换
   中文是 HTML 里的默认内容；这里只提供英文译文。
   ============================================================ */

const I18N_EN = {
  // 侧边栏 / 导航
  brand_sub:'The Mastery Guide v1.0',
  nav_ch1:'🌱 Ch.1 · Getting Started',
  nav_intro:'What is this magic?',
  nav_install:'Install in 5 minutes',
  nav_firstchat:'Your first prompt',
  nav_ch2:'🚀 Ch.2 · Leveling Up',
  nav_concepts:'4 core concepts',
  nav_claudemd:'CLAUDE.md: project brain',
  nav_workflow:'An efficient workflow',
  nav_ch3:'⚡ Ch.3 · Slash Commands',
  nav_slashintro:'What are slash commands',
  nav_slashall:'Full command cheatsheet',
  nav_slashcustom:'Make your own',
  nav_ch4:'🧙 Ch.4 · The Pro Path',
  nav_hooks:'Hooks',
  nav_mcp:'MCP servers',
  nav_subagents:'A fleet of subagents',
  nav_protips:'12 pro tips',
  nav_appendix:'🎯 Appendix',
  nav_cheatsheet:'Keyboard shortcuts',
  nav_faq:'FAQ',
  sidebar_footer:'Made with ❤️ and Claude Code',

  // Hero
  hero_badge:'✦ Coding superpowers in your terminal',
  hero_title2:'Mastery Guide',
  hero_desc:'From the moment you open the terminal, to commanding a fleet of AI subagents — this is a <strong>progressive, fun, complete</strong> tutorial.<br>Finish it and go from <span class="tag-newbie">beginner</span> all the way to <span class="tag-god">pro</span>.',
  hero_cta1:'🌱 I\'m new, start from scratch',
  hero_cta2:'⚡ Jump to the command cheatsheet',
  stat_cmds:'slash commands',
  stat_chapters:'chapters',
  stat_prod:'productivity',
  hero_version:'📦 Content current as of Claude Code <strong>v2.1.156</strong> · 2026-05-29',

  // 等级标签
  lvl_newbie:'🌱 Beginner',
  lvl_pro:'🚀 Intermediate',
  lvl_core:'⚡ Core',
  lvl_god:'🧙 Pro',
  lvl_appendix:'🎯 Appendix',

  // 通用
  ui_terminal:'Terminal',
  ui_copy:'Copy',

  // 第一章 · intro
  intro_h:'What is this magic?',
  intro_lead:'Picture this: you sit at your terminal and say, in <strong>plain language</strong>, what you want — "fix this bug", "add login to this project", "explain this code" — and a brilliant AI programmer actually reads your code, writes code, runs tests, and opens a PR. That\'s <strong>Claude Code</strong>.',
  intro_c1h:'It reads your whole codebase',
  intro_c1p:'No copy-pasting. It searches files, understands structure, and finds the relevant code — like a teammate who just joined but learns insanely fast.',
  intro_c2h:'It actually does the work',
  intro_c2p:'Edits files, runs commands, runs tests, checks Git history, calls tools. Not just "suggestions" — it gets it done.',
  intro_c3h:'Right in your terminal',
  intro_c3p:'No window switching, no plugins. Also works in VS Code / JetBrains, the desktop app, and on the web (claude.ai/code).',
  intro_c4h:'Endlessly customizable',
  intro_c4p:'Slash commands, hooks, subagents, MCP… you can shape it into an agent built around your team\'s workflow.',
  intro_tip_t:'💡 In one sentence',
  intro_tip_b:'Claude Code = an AI pair programmer living in your terminal that can read, write and run code. You <strong>share the idea</strong>; it <strong>does the job well</strong>.',

  // 安装
  install_h:'Install in 5 minutes',
  install_lead:'Three steps to get rolling. Pick whichever you like.',
  install_s1h:'Install',
  install_s1p1:'The fastest way is the official install script (macOS / Linux):',
  install_s1p2:'Or via npm (needs Node.js 18+):',
  install_s2h:'Enter your project and launch',
  install_s2p1:'Cd into your project directory and type one word:',
  install_s2p2:'First run asks you to log in (browser auth or paste an API key). Use <span class="kbd">/login</span> to switch accounts anytime.',
  install_s3h:'Quick health check',
  install_s3p1:'After launch, run <span class="kbd">/doctor</span> to check your install, then <span class="kbd">/help</span> to see what it can do. Done!',
  install_tip_t:'💡 No install needed either',
  install_tip_b:'Open <strong>claude.ai/code</strong> to use Claude Code right in the browser, connect your GitHub repo, and start with zero install.',

  // 第一句对话
  fc_h:'Your first prompt',
  fc_lead:'Relax — it\'s just like chatting with a person. Here are the "spells" beginners use most.',
  fc_q1:'"What does this project do? Give me a quick tour of the structure."',
  fc_a1:'→ It explores the codebase and gives you a tour',
  fc_q2:'"What\'s wrong with the login logic in <code>src/auth.js</code>?"',
  fc_a2:'→ It reads the file, locates the bug, explains why',
  fc_q3:'"Add a dark-mode toggle button for me."',
  fc_a3:'→ It edits code and may run tests to verify',
  fc_q4:'"Commit those changes with a clear commit message."',
  fc_a4:'→ It runs git add / commit (after your okay)',
  fc_tip_t:'⚠️ Three golden rules',
  fc_tip_l1:'<strong>Be specific about the goal</strong>: instead of "optimize the code", say "turn this loop into a map and add type annotations".',
  fc_tip_l2:'<strong>Break big into small</strong>: for complex tasks, let it <em>plan first</em> (see Plan mode), then act.',
  fc_tip_l3:'<strong>You\'re the captain</strong>: it asks before risky actions; hit <span class="kbd">Esc</span> anytime to interrupt and steer.',

  // 核心概念
  con_h:'Four core concepts',
  con_lead:'Grasp these four words and you move from "can use" to "use well".',
  con_1h:'Context',
  con_1p:'What Claude "remembers" has a limit. When a chat gets long it auto-<strong>compacts</strong>. Use <span class="kbd">/context</span> to check usage and <span class="kbd">/clear</span> to start fresh, keeping its head clear.',
  con_2h:'Tools',
  con_2p:'Reading files, writing files, running bash, searching code… are all "tools". It picks which to use. Permission mode decides which ones need your okay.',
  con_3h:'Memory (CLAUDE.md)',
  con_3p:'<code>CLAUDE.md</code> in your project root is its "persistent memory" — coding standards, architecture notes, common commands all live here, loaded automatically every time.',
  con_4h:'Permission modes',
  con_4p:'From "ask every step" to "auto-approve". Configure with <span class="kbd">/permissions</span>, or pass <code>--permission-mode</code> at launch. The balance valve between safety and speed.',

  // CLAUDE.md
  cmd_h:'CLAUDE.md: the project brain',
  cmd_lead:'This is the <strong>highest-leverage</strong> move. A good <code>CLAUDE.md</code> makes Claude instantly "get" your project and skip the detours. Use <span class="kbd">/init</span> to auto-generate a first draft.',
  cmd_sample:'# Project: E-commerce admin\n\n## Tech stack\n- Next.js 14 (App Router) + TypeScript\n- Prisma + PostgreSQL\n- Tailwind CSS\n\n## Common commands\n- Dev: `pnpm dev`\n- Test: `pnpm test` (always run after editing code)\n- Type check: `pnpm typecheck`\n\n## Coding standards\n- Functional components + named exports\n- No `any`; prefer zod for runtime validation\n- Commit messages follow Conventional Commits\n\n## Notes\n- DB migrations must be reviewed; do not edit the schema directly\n',
  cmd_tip_t:'💡 Three memory levels',
  cmd_tip_l1:'<code>./CLAUDE.md</code> — project level, shared by the team (commit it to Git)',
  cmd_tip_l2:'<code>./CLAUDE.local.md</code> — personal & local (add to .gitignore)',
  cmd_tip_l3:'<code>~/.claude/CLAUDE.md</code> — global, applies to all projects',
  cmd_tip_b:'Edit anytime with <span class="kbd">/memory</span>, or start a line with <span class="kbd">#</span> in chat to quickly append a memory.',

  // 工作流
  wf_h:'An efficient workflow',
  wf_lead:'Same tools, 10× faster in expert hands. The secret is rhythm.',
  wf_s1t:'Explore', wf_s1d:'Let it understand the relevant code first — don\'t rush to edit',
  wf_s2t:'Plan', wf_s2d:'Produce a plan in Plan mode; you review it',
  wf_s3t:'Execute', wf_s3d:'After approval, let it implement',
  wf_s4t:'Verify', wf_s4d:'Run tests, run the app, see the result',
  wf_s5t:'Commit', wf_s5d:'A clear commit; open a PR if needed',
  wf_c1h:'Plan mode',
  wf_c1p:'Press <span class="kbd">Shift</span>+<span class="kbd">Tab</span> to switch to "plan only, no edits" mode. Have it lay out the steps first, then execute after your okay — a lifesaver for complex tasks.',
  wf_c2h:'The undo button',
  wf_c2p:'Broke something? Use <span class="kbd">/rewind</span> to roll back to an earlier conversation/code checkpoint. Double-tap <span class="kbd">Esc</span> to edit a past message and re-branch.',
  wf_c3h:'Clear context often',
  wf_c3p:'When switching to an unrelated task, run <span class="kbd">/clear</span> first. Clean context = more accurate answers and lower cost.',
  wf_c4h:'Paste images & drag files',
  wf_c4p:'Paste a screenshot straight into the terminal, or drop in a file path. Error screenshots, design mockups, logs — it can see them all.',

  // 斜杠命令 intro
  si_h:'What are slash commands?',
  si_lead:'Type a <span class="kbd">/</span> at the start of the input and a command menu pops up. They\'re Claude Code\'s "shortcuts" — manage sessions, config, Git, memory, subagents… <strong>Master slash commands and you hold the steering wheel of Claude Code</strong>.',
  si_tip_t:'💡 How to use',
  si_tip_b:'After typing <span class="kbd">/</span>, keep typing to <strong>fuzzy-match</strong> a command name, then press <span class="kbd">Tab</span> or Enter to select. Not sure what exists? Just hit <span class="kbd">/help</span>.',
  si_warn_t:'⚠️ Gotcha: <code>ultrathink</code> is NOT a slash command',
  si_warn_p1:'<code>ultrathink</code> is a <strong>"thinking effort" keyword you type directly in a prompt</strong> — put it anywhere in your message to make Claude think harder for that turn, but it <strong>won\'t</strong> change session settings. Note that plain phrases like <code>think</code> / <code>think hard</code> are <strong>not</strong> recognized as keywords and are treated as ordinary text.',
  si_warn_p2:'To set thinking effort <strong>permanently</strong>, use the slash command <span class="kbd">/effort</span> (<code>low/medium/high/xhigh/max/ultracode</code>). There are also real "ultra" commands: <span class="kbd">/ultraplan</span> (deep planning) and <span class="kbd">/ultrareview</span> (deep code review).',

  // 速查表头
  sa_h:'The full slash-command cheatsheet',
  sa_lead:'This is the tutorial\'s "treasure book". Type a keyword in the search box to filter live, and click any card to copy the command.',
  sa_ver:'📦 Compiled as of Claude Code <strong>v2.1.156</strong> (2026-05-29) · commands change across versions — <strong>your local <span class="kbd">/help</span> output is the final word</strong>',
  type_builtin:'Built-in', legend_builtin:'native command',
  type_skill:'Skill', legend_skill:'a Skill triggered auto/manually',
  type_flow:'Workflow', legend_flow:'long parallel flow',
  type_removed:'Removed', legend_removed:'deleted in an older version',
  search_ph:'🔍 Search commands, e.g. plan, memory, mcp, review, effort, skill…',
  filter_all:'All', filter_session:'Session', filter_config:'Config & UI', filter_code:'Code & review',
  filter_ext:'Extend', filter_platform:'Platforms', filter_info:'Info & diag', filter_fun:'Fun',
  cmd_empty:'No matching commands — try another keyword 🤔',

  // 自定义命令
  sc_h:'Make your own slash commands',
  sc_lead:'Built-ins not enough? Roll your own! Drop a Markdown file in <code>.claude/commands/</code> — the filename becomes the command name. This is the killer move for turning team "playbooks" into one-tap actions.',
  sc_sample:'---\ndescription: Review the current branch\'s changes and suggest fixes\nargument-hint: [focus area, optional]\nallowed-tools: Bash(git*), Read, Grep\n---\n\nPlease review all changes on the current branch vs main:\n\n1. Use `git diff main...HEAD` to see the changes\n2. Focus especially on: $ARGUMENTS\n3. Find potential bugs, security issues, and readability problems\n4. Give actionable fix suggestions as a checklist\n',
  sc_after:'Then type <span class="kbd">/review-pr performance</span> in chat to trigger it; <code>$ARGUMENTS</code> is replaced with "performance".',
  sc_tip_t:'💡 Advanced tips',
  sc_tip_l1:'Put it in <code>~/.claude/commands/</code> for a <strong>global command</strong> available in every project.',
  sc_tip_l2:'Use subfolders to create <strong>namespaces</strong>, e.g. <code>.claude/commands/git/sync.md</code> → <span class="kbd">/git:sync</span>.',
  sc_tip_l3:'In the body, embed shell output with <code>!`command`</code> and reference file contents with <code>@file</code>.',
  sc_tip_l4:'Use <span class="kbd">/agents</span> and <span class="kbd">/hooks</span> to chain commands, subagents and hooks into an automation pipeline.',

  // Hooks
  hk_h:'Hooks: build good habits automatically',
  hk_lead:'Hooks are <strong>scripts that run automatically</strong> at specific moments — like "auto-format every time a file is edited" or "run tests before committing". They\'re executed by the Claude Code engine, not left to Claude\'s discretion — so they\'re 100% reliable.',
  hk_p2:'Configure interactively with <span class="kbd">/hooks</span>, or write into <code>.claude/settings.json</code>:',
  hk_tip_t:'💡 Common hook events',
  hk_tip_b:'<code>PreToolUse</code> (before a tool call, can block), <code>PostToolUse</code> (after), <code>UserPromptSubmit</code> (when you send a message), <code>Stop</code> (when a reply ends), <code>SessionStart</code> (session begins — great for installing deps).',

  // MCP
  mcp_h:'MCP: plug Claude into the outside world',
  mcp_lead:'MCP (Model Context Protocol) is a standard interface that lets Claude Code connect to <strong>external tools and data sources</strong> — GitHub, databases, Slack, Figma, browser automation… instantly adding a pile of new tools.',
  mcp_codehead:'Terminal / add an MCP server',
  mcp_sample:'# Add a local MCP server\nclaude mcp add my-server -- npx -y @some/mcp-server\n\n# View / manage connected servers inside a session\n/mcp',
  mcp_tip_t:'💡 What /mcp does',
  mcp_tip_b:'View connected servers, the tools they expose, auth status (OAuth login), and temporarily enable/disable a server. MCP tools are usually named <code>mcp__server__tool</code>.',

  // 子代理
  sub_h:'A fleet of subagents: command a whole team',
  sub_lead:'Subagents are <strong>specialized AIs with their own context</strong>. You can send an "explore agent" to crawl the codebase and a "test agent" to run verification, keeping the main conversation clean. This is the heart of pro-level parallel work.',
  sub_p2:'Create and manage subagents with <span class="kbd">/agents</span>. Each has its own system prompt, available tools, and model.',
  sub_c1h:'Explore agent',
  sub_c1p:'Does broad code searches and brings back only the conclusions — without polluting the main context.',
  sub_c2h:'Architect agent',
  sub_c2p:'Designs implementation plans, weighs trade-offs, outputs step-by-step plans.',
  sub_c3h:'Review agent',
  sub_c3p:'Reviews code, hunts bugs, suggests simplifications.',
  sub_tip_t:'💡 Parallel speed-up',
  sub_tip_b:'Independent subagents can run <strong>at the same time</strong>. Split one big task across several agents in parallel and the total time drops dramatically.',

  // 大神十二诀
  pt_h:'12 pro tips',
  pt_lead:'Burn these into muscle memory and you\'ll be the person on the team who "wields Claude Code best".',
  pt_1:'<strong>Plan before acting.</strong> Always produce a plan in Plan mode for complex tasks.',
  pt_2:'<strong>CLAUDE.md is priority #1.</strong> Writing standards down beats repeating them.',
  pt_3:'<strong>Use /clear often.</strong> Reset when switching tasks — better accuracy and lower cost.',
  pt_4:'<strong>Turn playbooks into slash commands.</strong> Anything done 3× should be automated.',
  pt_5:'<strong>Guard the baseline with hooks.</strong> Let hooks auto-run format, tests, lint.',
  pt_6:'<strong>Give subagents the grunt work.</strong> Offload big searches and long checks; keep the main line clean.',
  pt_7:'<strong>Give it eyes.</strong> Paste error screenshots, logs, design mockups.',
  pt_8:'<strong>Esc is your steering wheel.</strong> Interrupt the moment it drifts — don\'t wait.',
  pt_9:'<strong>/rewind means no fear of crashing.</strong> Experiment boldly, return to a checkpoint anytime.',
  pt_10:'<strong>Watch /context and /cost.</strong> Know your brain space and spend.',
  pt_11:'<strong>Extend the boundary with MCP.</strong> Wire it directly to your real tools and data.',
  pt_12:'<strong>Small steps, frequent commits.</strong> Commit each small win for easy rollback.',

  // 快捷键
  ks_h:'Keyboard shortcuts',
  ks_1:'Interrupt Claude / stop the current action',
  ks_2:'Edit the previous message, rewind the conversation',
  ks_3:'Cycle permission/planning modes (incl. Plan mode)',
  ks_4:'Open the slash-command menu',
  ks_5:'Reference a file / directory',
  ks_6:'Quickly append a memory to CLAUDE.md',
  ks_7:'Enter bash mode, run a shell command directly',
  ks_8:'Cancel input / exit',
  ks_9:'Cycle through input history',
  ks_10:'Expand/collapse verbose output',

  // FAQ
  faq_h:'FAQ',
  faq_q1:'Does Claude Code cost money?',
  faq_a1:'You need an Anthropic account (a Claude subscription or API credits). Use <span class="kbd">/cost</span> for this session\'s spend and <span class="kbd">/usage</span> for your usage.',
  faq_q2:'Will it secretly change my code or delete files?',
  faq_a2:'By default, "risky" actions like writing files or running commands ask for your okay first. Permission mode is adjustable, but you\'re always the captain. It confirms before deleting/overwriting.',
  faq_q3:'What if the chat gets long, slow or dumb?',
  faq_a3:'Use <span class="kbd">/compact</span> to compress, or <span class="kbd">/clear</span> to start fresh. Always reset when switching tasks.',
  faq_q4:'Can I use it outside the terminal?',
  faq_a4:'Yes. VS Code / JetBrains extensions, the desktop app (Mac/Win), and the web app at claude.ai/code.',
  faq_q5:'How do I report a bug or give feedback?',
  faq_a5:'Type <span class="kbd">/bug</span> or <span class="kbd">/feedback</span> in a session to send it straight to the team.',
  faq_q6:'Which model am I using? How do I switch?',
  faq_a6:'Switch with <span class="kbd">/model</span> (e.g. Opus / Sonnet / Haiku). The most capable is the Claude 4.X family.',

  // 页脚
  ft_h:'Now, go open your terminal 🚀',
  ft_p:'Reading it a hundred times is no match for typing <code>claude</code> once. Start with one simple prompt — you\'re already on the path to mastery.',
  ft_meta:'Claude Code Mastery Guide · a progressive, hands-on tutorial · commands per the official <span class="kbd">/help</span>',
};

/* ---------- 切换逻辑 ---------- */
(function(){
  const STORAGE='cc_lang';
  const btn=document.getElementById('lang-toggle');
  const origin=new Map();      // 缓存中文原文
  const originPH=new Map();    // 缓存 placeholder 原文

  function setLang(lang){
    window.__lang = lang;
    document.documentElement.lang = lang==='en'?'en':'zh-CN';
    document.body.dataset.lang = lang;
    btn.textContent = lang==='en'?'中' : 'EN';
    btn.title = lang==='en'?'切换到中文':'Switch to English';

    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key=el.getAttribute('data-i18n');
      if(!origin.has(el)) origin.set(el, el.innerHTML);
      if(lang==='en'){ el.innerHTML = I18N_EN[key] !== undefined ? I18N_EN[key] : origin.get(el); }
      else{ el.innerHTML = origin.get(el); }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key=el.getAttribute('data-i18n-placeholder');
      if(!originPH.has(el)) originPH.set(el, el.getAttribute('placeholder'));
      el.setAttribute('placeholder', (lang==='en' && I18N_EN[key]!==undefined) ? I18N_EN[key] : originPH.get(el));
    });

    if(typeof window.renderCommands==='function') window.renderCommands();
    if(typeof window.startTerminal==='function') window.startTerminal();
    try{ localStorage.setItem(STORAGE, lang); }catch(e){}
  }

  let saved='zh';
  try{ saved = localStorage.getItem(STORAGE) || 'zh'; }catch(e){}
  setLang(saved);

  btn.addEventListener('click',()=> setLang((window.__lang==='en')?'zh':'en'));
})();
