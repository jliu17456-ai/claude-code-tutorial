/* ============================================================
   Claude Code 通关秘籍 · 交互脚本
   ============================================================ */

/* ---------- 1. 斜杠命令数据 ---------- */
const COMMANDS = [
  // —— 会话管理 ——
  { name:'/clear',    cat:'会话', desc:'清空当前对话上下文，开启全新一局。切换不相关任务前的必备动作。' },
  { name:'/compact',  cat:'会话', desc:'压缩当前对话，保留要点、释放上下文空间。对话变长变慢时用它。' },
  { name:'/context',  cat:'会话', desc:'查看当前上下文窗口的占用情况，了解 Claude 的"脑容量"还剩多少。' },
  { name:'/resume',   cat:'会话', desc:'恢复之前的某次会话，接着上次的进度继续聊。' },
  { name:'/rewind',   cat:'会话', desc:'回退到对话或代码的某个检查点——你的"后悔药"。' },
  { name:'/export',   cat:'会话', desc:'把当前对话导出为文件，方便分享、存档或复盘。' },
  { name:'/todos',    cat:'会话', desc:'查看 Claude 当前任务的待办清单，掌握多步任务的进度。' },
  { name:'/exit',     cat:'会话', desc:'退出 Claude Code 会话。（也可用 Ctrl+C）' },

  // —— 配置与账户 ——
  { name:'/config',   cat:'配置', desc:'打开设置界面，调整主题、模型、行为等各项配置。' },
  { name:'/model',    cat:'配置', desc:'切换使用的模型（如 Opus / Sonnet / Haiku），平衡能力与速度。' },
  { name:'/login',    cat:'配置', desc:'登录你的 Anthropic 账户，或切换到另一个账户。' },
  { name:'/logout',   cat:'配置', desc:'退出当前登录的账户。' },
  { name:'/permissions',cat:'配置',desc:'配置权限规则——哪些工具/命令自动放行，哪些需要你确认。' },
  { name:'/memory',   cat:'配置', desc:'编辑 CLAUDE.md 记忆文件，管理项目级 / 全局的常驻记忆。' },
  { name:'/output-style',cat:'配置',desc:'调整 Claude 的输出风格与回答方式。' },
  { name:'/statusline',cat:'配置',desc:'自定义底部状态栏显示的内容（分支、模型、用量等）。' },
  { name:'/vim',      cat:'配置', desc:'开启 Vim 风格的输入编辑模式，键盘党狂喜。' },
  { name:'/terminal-setup',cat:'配置',desc:'优化终端配置（如换行快捷键），改善输入体验。' },
  { name:'/add-dir',  cat:'配置', desc:'把额外的目录加入工作区，让 Claude 能访问多个项目路径。' },
  { name:'/privacy-settings',cat:'配置',desc:'查看与管理隐私相关的设置。' },

  // —— 代码与 Git ——
  { name:'/init',     cat:'代码', desc:'扫描代码库并自动生成初版 CLAUDE.md，一键让 Claude "认识"你的项目。' },
  { name:'/review',   cat:'代码', desc:'审查一个 Pull Request 或当前改动，找出 bug 与改进点。' },
  { name:'/pr-comments',cat:'代码',desc:'拉取并查看某个 PR 上的评论，方便逐条处理 review 意见。' },
  { name:'/install-github-app',cat:'代码',desc:'安装 GitHub App，把 Claude Code 接入你的仓库工作流（如 @claude 自动响应）。' },

  // —— 扩展能力 ——
  { name:'/agents',   cat:'扩展', desc:'创建与管理子代理（Subagents）——拥有独立上下文的专职 AI 助手。' },
  { name:'/hooks',    cat:'扩展', desc:'交互式配置钩子，在特定时机自动执行脚本（格式化、测试等）。' },
  { name:'/mcp',      cat:'扩展', desc:'管理 MCP 服务器：查看已连接服务、工具、认证状态并开关它们。' },
  { name:'/ide',      cat:'扩展', desc:'连接 IDE（VS Code / JetBrains），实现编辑器内联动。' },
  { name:'/bashes',   cat:'扩展', desc:'查看与管理后台运行的 bash 任务（长时间命令、服务进程等）。' },

  // —— 信息与诊断 ——
  { name:'/help',     cat:'信息', desc:'查看全部可用命令与用法。不知道能干啥时，先按它。' },
  { name:'/doctor',   cat:'信息', desc:'体检 Claude Code 安装与环境是否健康，排查疑难杂症。' },
  { name:'/status',   cat:'信息', desc:'查看当前会话状态：账户、模型、版本、目录等概览信息。' },
  { name:'/cost',     cat:'信息', desc:'查看本次会话的 token 用量与花费估算，心里有数。' },
  { name:'/usage',    cat:'信息', desc:'查看你的用量额度与限制情况。' },
  { name:'/release-notes',cat:'信息',desc:'查看最新版本更新了什么新功能。' },
  { name:'/bug',      cat:'信息', desc:'报告一个 bug，把问题直接反馈给 Claude Code 团队。' },
  { name:'/feedback', cat:'信息', desc:'提交使用反馈与建议，帮助产品变得更好。' },
  { name:'/migrate-installer',cat:'信息',desc:'把旧的安装方式迁移到本地安装器，便于自动更新。' },
];

/* ---------- 2. 渲染命令卡片 ---------- */
const grid = document.getElementById('cmd-grid');
const emptyMsg = document.getElementById('cmd-empty');
const searchInput = document.getElementById('cmd-search');
let activeCat = 'all';

function renderCommands(){
  const q = searchInput.value.trim().toLowerCase();
  const filtered = COMMANDS.filter(c=>{
    const matchCat = activeCat==='all' || c.cat===activeCat;
    const matchText = !q || c.name.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.cat.includes(q);
    return matchCat && matchText;
  });
  grid.innerHTML = filtered.map(c=>`
    <div class="cmd-card" data-cmd="${c.name}">
      <div class="cmd-name">${c.name}</div>
      <div class="cmd-desc">${c.desc}</div>
      <span class="cmd-cat">${c.cat}</span>
    </div>`).join('');
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
