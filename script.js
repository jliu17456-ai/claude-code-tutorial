/* ============================================================
   Claude Code 通关秘籍 · 交互脚本
   ============================================================ */

/* ---------- 1. 斜杠命令数据 ----------
   截至 Claude Code v2.1.156（2026-05-29），依据官方 commands 文档整理。
   type: 内置 / 技能 / 工作流 / 别名 / 已移除
*/
const CC_VERSION = 'v2.1.156 · 2026-05-29';
const COMMANDS = [
  // ======== 会话管理 ========
  { name:'/clear',    cat:'会话', type:'内置', desc:'清空上下文、开启全新一局。切换不相关任务前的必备动作。别名 /reset、/new。' },
  { name:'/compact',  cat:'会话', type:'内置', desc:'压缩对话历史、保留要点、释放上下文空间。对话变长变慢时用它。' },
  { name:'/context',  cat:'会话', type:'内置', desc:'可视化当前上下文窗口占用，看看 Claude 的"脑容量"还剩多少。' },
  { name:'/resume',   cat:'会话', type:'内置', desc:'恢复之前的某次会话，接着上次进度继续。别名 /continue。' },
  { name:'/rewind',   cat:'会话', type:'内置', desc:'把代码与对话回滚到之前的检查点——你的"后悔药"。别名 /checkpoint、/undo。' },
  { name:'/export',   cat:'会话', type:'内置', desc:'把当前对话导出为纯文本，方便分享、存档或复盘。' },
  { name:'/recap',    cat:'会话', type:'内置', desc:'为当前会话生成一行总结，快速回顾干了啥。' },
  { name:'/rename',   cat:'会话', type:'内置', desc:'重命名当前会话，便于以后检索。' },
  { name:'/branch',   cat:'会话', type:'内置', desc:'从当前对话拉一个分支，探索不同方向。别名 /fork。' },
  { name:'/copy',     cat:'会话', type:'内置', desc:'把最后一条（或第 N 条）助手回复复制到剪贴板。' },
  { name:'/btw',      cat:'会话', type:'内置', desc:'快速旁注提问，不加入对话历史，问完即走。' },
  { name:'/goal',     cat:'会话', type:'内置', desc:'设定一个目标条件，Claude 会持续工作直到满足它。' },
  { name:'/plan',     cat:'会话', type:'内置', desc:'进入计划模式：只规划不动手，方案你点头后再执行。' },
  { name:'/diff',     cat:'会话', type:'内置', desc:'打开交互式 diff 查看器，逐处审阅改动。' },
  { name:'/background',cat:'会话', type:'内置', desc:'把当前会话转到后台运行，释放终端去干别的。' },
  { name:'/stop',     cat:'会话', type:'内置', desc:'停止正在后台运行的会话。' },
  { name:'/tasks',    cat:'会话', type:'内置', desc:'列出与管理后台任务（长命令、服务进程等）。别名 /bashes。' },
  { name:'/focus',    cat:'会话', type:'内置', desc:'切换焦点视图（仅全屏模式）。' },
  { name:'/schedule', cat:'会话', type:'内置', desc:'创建/更新/列出/运行例程与日程。别名 /routines。' },
  { name:'/workflows',cat:'会话', type:'内置', desc:'打开工作流进度视图，管理多步流程。' },
  { name:'/loop',     cat:'会话', type:'技能', desc:'按间隔（或自适应步调）重复运行某个提示/命令。' },
  { name:'/exit',     cat:'会话', type:'内置', desc:'退出 CLI。别名 /quit。' },

  // ======== 配置与外观 ========
  { name:'/config',   cat:'配置', type:'内置', desc:'打开设置界面，调整主题、模型、行为等。别名 /settings。' },
  { name:'/model',    cat:'配置', type:'内置', desc:'切换模型（opus/sonnet/haiku 等），方向键还能调思考强度。' },
  { name:'/effort',   cat:'配置', type:'内置', desc:'设定模型思考强度：low/medium/high/xhigh/max/ultracode。' },
  { name:'/fast',     cat:'配置', type:'内置', desc:'切换快速模式（Opus 更快输出，不降级到小模型）。' },
  { name:'/login',    cat:'配置', type:'内置', desc:'登录 Anthropic 账户，或切换账户。' },
  { name:'/logout',   cat:'配置', type:'内置', desc:'登出当前账户。' },
  { name:'/permissions',cat:'配置',type:'内置', desc:'管理工具权限规则——哪些自动放行、哪些需确认。别名 /allowed-tools。' },
  { name:'/memory',   cat:'配置', type:'内置', desc:'编辑 CLAUDE.md 与自动记忆，管理项目级/全局常驻记忆。' },
  { name:'/sandbox',  cat:'配置', type:'内置', desc:'切换沙箱模式（受支持平台），更安全地跑命令。' },
  { name:'/add-dir',  cat:'配置', type:'内置', desc:'把额外目录加入工作区，让 Claude 访问多个项目路径。' },
  { name:'/theme',    cat:'配置', type:'内置', desc:'更改配色主题。' },
  { name:'/color',    cat:'配置', type:'内置', desc:'设置提示栏颜色。' },
  { name:'/statusline',cat:'配置',type:'内置', desc:'自定义底部状态栏内容（分支、模型、用量等）。' },
  { name:'/keybindings',cat:'配置',type:'内置', desc:'打开或创建按键绑定配置文件。' },
  { name:'/terminal-setup',cat:'配置',type:'内置',desc:'配置终端按键绑定（如换行），改善输入体验。' },
  { name:'/tui',      cat:'配置', type:'内置', desc:'设置终端 UI 渲染器：default / fullscreen。' },
  { name:'/voice',    cat:'配置', type:'内置', desc:'切换语音听写：hold / tap / off。' },
  { name:'/scroll-speed',cat:'配置',type:'内置',desc:'调整鼠标滚轮速度（仅全屏模式）。' },
  { name:'/privacy-settings',cat:'配置',type:'内置',desc:'查看与更新隐私设置（Pro/Max 订阅）。' },
  { name:'/upgrade',  cat:'配置', type:'内置', desc:'打开升级页面，切换到更高的订阅计划。' },
  { name:'/usage-credits',cat:'配置',type:'内置',desc:'配置使用额度（原 /extra-usage）。' },
  { name:'/fewer-permission-prompts',cat:'配置',type:'技能',desc:'扫描历史并生成权限允许列表，减少重复确认弹窗。' },

  // ======== 代码与审查 ========
  { name:'/init',     cat:'代码', type:'内置', desc:'扫描代码库自动生成初版 CLAUDE.md，一键让 Claude "认识"项目。' },
  { name:'/review',   cat:'代码', type:'内置', desc:'在本地审查一个 Pull Request。' },
  { name:'/code-review',cat:'代码',type:'技能', desc:'审查当前改动，支持 low/medium/high/xhigh/max/ultra 多级；可 --fix / --comment。' },
  { name:'/ultrareview',cat:'代码',type:'内置', desc:'云沙箱中的深度多代理代码审查。等价 /code-review ultra。' },
  { name:'/ultraplan',cat:'代码', type:'内置', desc:'在 ultraplan 会话中起草更深入的实现计划。' },
  { name:'/security-review',cat:'代码',type:'内置',desc:'分析当前分支待处理改动，查找安全漏洞。' },
  { name:'/simplify', cat:'代码', type:'技能', desc:'审查并应用代码清理（复用/简化/效率），不找 bug。v2.1.154+。' },
  { name:'/verify',   cat:'代码', type:'技能', desc:'实际运行应用、观察行为，验证改动是否真的生效。v2.1.145+。' },
  { name:'/run',      cat:'代码', type:'技能', desc:'启动并驱动项目应用，亲眼看到改动跑起来。v2.1.145+。' },
  { name:'/debug',    cat:'代码', type:'技能', desc:'开启调试日志并诊断问题。' },
  { name:'/batch',    cat:'代码', type:'技能', desc:'编排大规模并行变更（5–30 个独立单元同时改）。' },
  { name:'/autofix-pr',cat:'代码',type:'内置', desc:'在网页版启动一个自动修复 PR 的会话。' },
  { name:'/install-github-app',cat:'代码',type:'内置',desc:'为仓库设置 GitHub Actions 应用（如 @claude 自动响应）。' },
  { name:'/run-skill-generator',cat:'代码',type:'技能',desc:'教 /run 与 /verify 如何构建并启动你的项目应用。v2.1.145+。' },

  // ======== 扩展能力 ========
  { name:'/agents',   cat:'扩展', type:'内置', desc:'创建与管理子代理——拥有独立上下文的专职 AI 助手。' },
  { name:'/hooks',    cat:'扩展', type:'内置', desc:'查看与配置钩子，在特定时机自动执行脚本（格式化、测试等）。' },
  { name:'/mcp',      cat:'扩展', type:'内置', desc:'管理 MCP 服务器连接与 OAuth 认证，查看其提供的工具。' },
  { name:'/skills',   cat:'扩展', type:'内置', desc:'列出当前可用的技能（Skills）。' },
  { name:'/plugin',   cat:'扩展', type:'内置', desc:'管理 Claude Code 插件。' },
  { name:'/reload-plugins',cat:'扩展',type:'内置',desc:'重新加载所有活跃插件以应用待处理更改。' },
  { name:'/reload-skills',cat:'扩展',type:'内置',desc:'重新扫描技能目录。v2.1.152+。' },
  { name:'/claude-api',cat:'扩展',type:'技能', desc:'加载 Claude API 参考资料，支持代码在模型版本间升级迁移。' },
  { name:'/deep-research',cat:'扩展',type:'工作流',desc:'并行网络搜索 + 抓取来源 + 核验 + 综合成带引用的报告。' },

  // ======== 跨端与平台 ========
  { name:'/ide',      cat:'跨端', type:'内置', desc:'管理 IDE（VS Code / JetBrains）集成并显示状态。' },
  { name:'/desktop',  cat:'跨端', type:'内置', desc:'把会话继续到桌面 App。别名 /app。' },
  { name:'/mobile',   cat:'跨端', type:'内置', desc:'显示二维码下载 Claude 移动应用。别名 /ios、/android。' },
  { name:'/web-setup',cat:'跨端', type:'内置', desc:'连接 GitHub 账户，启用网页版 Claude Code。' },
  { name:'/remote-control',cat:'跨端',type:'内置',desc:'让此会话可从 claude.ai 远程控制。别名 /rc。' },
  { name:'/remote-env',cat:'跨端',type:'内置', desc:'配置网页会话的默认远程执行环境。' },
  { name:'/teleport', cat:'跨端', type:'内置', desc:'把网页版会话拉到终端继续。别名 /tp。' },
  { name:'/chrome',   cat:'跨端', type:'内置', desc:'配置 Chrome 集成设置。' },
  { name:'/install-slack-app',cat:'跨端',type:'内置',desc:'安装 Claude Slack 应用。' },
  { name:'/setup-bedrock',cat:'跨端',type:'内置',desc:'配置 Amazon Bedrock 认证与模型（启用 Bedrock 时）。' },
  { name:'/setup-vertex',cat:'跨端',type:'内置',desc:'配置 Google Vertex AI 认证与模型（启用 Vertex 时）。' },

  // ======== 信息与诊断 ========
  { name:'/help',     cat:'信息', type:'内置', desc:'显示帮助与全部可用命令。不知道能干啥时先按它。' },
  { name:'/doctor',   cat:'信息', type:'内置', desc:'诊断并验证 Claude Code 的安装与设置是否健康。' },
  { name:'/status',   cat:'信息', type:'内置', desc:'查看版本、模型、账户与连接状态概览。' },
  { name:'/usage',    cat:'信息', type:'内置', desc:'查看会话成本、计划用量限额与活动统计。别名 /cost、/stats。' },
  { name:'/insights', cat:'信息', type:'内置', desc:'生成分析你 Claude Code 使用情况的报告。' },
  { name:'/release-notes',cat:'信息',type:'内置',desc:'在版本选择器中查看更新日志。' },
  { name:'/feedback', cat:'信息', type:'内置', desc:'提交反馈、报 bug 或分享对话。别名 /bug、/share。' },
  { name:'/powerup',  cat:'信息', type:'内置', desc:'通过交互式课程发现 Claude Code 的功能。' },
  { name:'/team-onboarding',cat:'信息',type:'内置',desc:'基于 30 天使用历史，生成团队入门指南。' },
  { name:'/heapdump', cat:'信息', type:'内置', desc:'写出堆快照与内存分解，用于性能诊断。' },

  // ======== 趣味 & 周边 ========
  { name:'/radio',    cat:'其他', type:'内置', desc:'打开 Claude FM lo-fi 电台，敲代码配点背景音乐。' },
  { name:'/stickers', cat:'其他', type:'内置', desc:'订购 Claude Code 贴纸。' },
  { name:'/passes',   cat:'其他', type:'内置', desc:'分享给朋友免费一周的 Claude Code 使用权。' },

  // ======== 已移除（仍标注，便于老用户排错）========
  { name:'/vim',      cat:'配置', type:'已移除', desc:'已于 v2.1.92 移除。改用 /config → Editor mode 开启 Vim 编辑。' },
  { name:'/pr-comments',cat:'代码',type:'已移除', desc:'已于 v2.1.91 移除。现在直接让 Claude 去看 PR 评论即可。' },
];

/* ---------- 2. 渲染命令卡片 ---------- */
const grid = document.getElementById('cmd-grid');
const emptyMsg = document.getElementById('cmd-empty');
const searchInput = document.getElementById('cmd-search');
const countEl = document.getElementById('cmd-count');
let activeCat = 'all';

function renderCommands(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = COMMANDS.filter(c=>{
    const matchCat = activeCat==='all' || c.cat===activeCat;
    const matchText = !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.cat.includes(q) || (c.type&&c.type.includes(q));
    return matchCat && matchText;
  });
  const typeClass = t=>({'内置':'t-builtin','技能':'t-skill','工作流':'t-flow','别名':'t-alias','已移除':'t-removed'}[t]||'t-builtin');
  grid.innerHTML = filtered.map(c=>`
    <div class="cmd-card ${c.type==='已移除'?'removed':''}" data-cmd="${c.name}">
      <div class="cmd-name">${c.name}</div>
      <div class="cmd-desc">${c.desc}</div>
      <div class="cmd-tags">
        <span class="cmd-cat">${c.cat}</span>
        <span class="cmd-type ${typeClass(c.type)}">${c.type}</span>
      </div>
    </div>`).join('');
  countEl.textContent = `共 ${COMMANDS.length} 条 · 当前显示 ${filtered.length} 条`;
  emptyMsg.hidden = filtered.length>0;
  // 绑定复制
  grid.querySelectorAll('.cmd-card').forEach(card=>{
    card.addEventListener('click',()=>{
      copyText(card.dataset.cmd);
      card.classList.add('copied');
      setTimeout(()=>card.classList.remove('copied'),1300);
    });
  });
}

searchInput.addEventListener('input',renderCommands);
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderCommands();
  });
});
renderCommands();

/* ---------- 3. 复制工具 ---------- */
function copyText(text){
  if(navigator.clipboard){navigator.clipboard.writeText(text).catch(()=>fallbackCopy(text));}
  else fallbackCopy(text);
}
function fallbackCopy(text){
  const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);
}

/* 代码块复制按钮 */
document.querySelectorAll('.code-block').forEach(block=>{
  const btn=block.querySelector('.copy-btn');
  if(!btn)return;
  btn.addEventListener('click',()=>{
    const code=block.querySelector('code').innerText;
    copyText(code);
    btn.textContent='已复制 ✓';btn.classList.add('copied');
    setTimeout(()=>{btn.textContent='复制';btn.classList.remove('copied');},1300);
  });
});

/* ---------- 4. 滚动进度条 + 回到顶部 ---------- */
const progress=document.getElementById('scroll-progress');
const backTop=document.getElementById('back-top');
window.addEventListener('scroll',()=>{
  const h=document.documentElement;
  const scrolled=h.scrollTop/(h.scrollHeight-h.clientHeight)*100;
  progress.style.width=scrolled+'%';
  backTop.classList.toggle('show',h.scrollTop>500);
});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ---------- 5. 导航高亮 (scrollspy) ---------- */
const sections=document.querySelectorAll('.section, #intro');
const navLinks=document.querySelectorAll('.nav-link');
const spy=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      navLinks.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
    }
  });
},{rootMargin:'-40% 0px -55% 0px'});
sections.forEach(s=>spy.observe(s));

/* ---------- 6. section 进入动画 ---------- */
const reveal=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target);}});
},{threshold:0.08});
document.querySelectorAll('.section').forEach(s=>reveal.observe(s));

/* ---------- 7. 移动端菜单 ---------- */
const sidebar=document.getElementById('sidebar');
const menuToggle=document.getElementById('menu-toggle');
menuToggle.addEventListener('click',()=>sidebar.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>sidebar.classList.remove('open')));

/* ---------- 8. Hero 终端打字动画 ---------- */
const termEl=document.getElementById('typed-terminal');
const script=[
  {t:'prompt',txt:'~ $ '},{t:'cmd',txt:'claude\n'},
  {t:'out',txt:'✦ Claude Code 已就绪。输入你的想法，或敲 / 查看命令。\n\n'},
  {t:'prompt',txt:'> '},{t:'cmd',txt:'帮我给项目加一个深色模式切换\n'},
  {t:'accent',txt:'● 正在探索代码库…\n'},
  {t:'accent',txt:'● 已定位 ThemeProvider，制定方案…\n'},
  {t:'accent',txt:'● 编辑 theme.ts、Toggle.tsx ✓\n'},
  {t:'accent',txt:'● 运行测试 pnpm test … 全部通过 ✓\n\n'},
  {t:'out',txt:'搞定！深色模式已加好，并通过测试。要我提交吗？\n'},
];
const colorMap={prompt:'tprompt',cmd:'tcmd',out:'tout',accent:'taccent'};
let si=0,ci=0,buf='';
function typeStep(){
  if(si>=script.length){termEl.innerHTML=buf+'<span class="cursor"></span>';return;}
  const part=script[si];
  if(ci===0)buf+=`<span class="${colorMap[part.t]}">`;
  buf+=part.txt[ci]==='\n'?'\n':escapeHtml(part.txt[ci]);
  ci++;
  if(ci>=part.txt.length){buf+='</span>';si++;ci=0;}
  termEl.innerHTML=buf+'<span class="cursor"></span>';
  const delay=part.t==='accent'?14:(part.t==='out'?20:48);
  setTimeout(typeStep,delay+Math.random()*30);
}
function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){typeStep();}
else{termEl.innerHTML=script.map(p=>`<span class="${colorMap[p.t]}">${escapeHtml(p.txt)}</span>`).join('');}

/* ---------- 9. 键盘 / 快捷搜索 ---------- */
document.addEventListener('keydown',e=>{
  if(e.key==='/'&&document.activeElement!==searchInput&&!/input|textarea/i.test(document.activeElement.tagName)){
    e.preventDefault();
    document.getElementById('slash-all').scrollIntoView({behavior:'smooth'});
    setTimeout(()=>searchInput.focus(),500);
  }
});
