// CONFIG
const SITE = {
  ownerName: "Esakkivel Esakkiraja",
  ownerHandle: "@dotvignesh",
  githubUrl: "https://github.com/dotvignesh",
  linkedinUrl: "https://www.linkedin.com/in/esakkivel-esakkiraja/",
  twitterUrl: "https://twitter.com/dotvignesh",
  email: "esakkiraja.e@northeastern.edu",
  intro: `Hey there 👋 \n I’m Esakkivel - an ML engineer and a Northeastern grad student that likes to build things that think. I started by shipping Android apps at 12 to 21.5K+ users worldwide; now I’m engineering reasoning systems beyond standard RL playbooks. \nLately, I’ve built SFT and RL post-training pipelines for code search and rerankers, focusing on the path from data → training → evaluation (and the tooling around it). I’m always excited to talk about computers and AI. \nLove opportunities in hands-on ML and applied research that ships.`,
};

const DATA = {
  educationItems: [
    {
      heading: "Northeastern University, Boston, MA — May, 2026",
      bullets: [
        "MS, Computer Science",
        "GPA: 4.0"
      ]
    },
    {
      heading: "College Of Engineering, Guindy — 2020-2024",
      bullets: [
        "Bachelor of Engineering in Computer Science & Engineering"
      ]
    }
  ],
  experienceItems: [
    {
      heading: "Machine Learning Engineer Intern, ServiceNow, Santa Clara, CA — May 2025 - Aug. 2025",
      bullets: [
        "Built a multi-stage retrieval pipeline to reduce hallucinations in LLM-based code autocompletion, improving context-retrieval Top-K accuracy from ~48% to ~88%.",
        "Constructed a Knowledge Graph from ServiceNow metadata, cutting search space by ~59% and improving semantic search results with advanced indexing and LLM-powered query expansion.",
        "Developed SFT+RL post-training pipelines with curated and synthetic data, ensuring robust out-of-distribution generalization, and trained a 0.6B reranker to outperform-8B performance with ~2.5x lower latency.",
        `First-author <a href="https://www.arxiv.org/abs/2509.25716" target="_blank" rel="noopener noreferrer">publication</a> accepted at the GeCoIn Workshop, ECAI 2025, presenting the above methods and results.`
      ]
    },
    {
      heading: "Graduate Teaching Assistant, Khoury College Of Computer Sciences, Boston, MA — Jan. 2025 – Apr. 2025",
      bullets: [
        "Assisted in teaching the graduate-level CS5100 Foundations of AI course for 130+ students."
      ]
    },
    {
      heading: "Research Intern, Anna University, Chennai, TN, India — Aug. 2023 – Dec. 2023",
      bullets: [
        "Researched under Dr. R. Baskaran and M. S. Karthika Devi, developing a generalist reasoning language model through a novel Supervised-Fine-Tuning approach using synthetic CoT traces on STEM datasets.",
        "Applied compute and cost-efficient methods to train 7B and 13B models, surpassing the then-SOTA performance on multiple benchmarks such as GSM8K (+7%) and ARC (+8%)."
      ]
    },
    {
      heading: "SWE-ML Intern, FedEx Express, Remote — May 2023 – Aug. 2023",
      bullets: [
        "Developed a Spring Boot microservice for critical information extraction from invoices, handling over 30% of UAE’s shipping volume with ~sub-second latency per document.",
        "Performed supervised fine-tuning (SFT) of a large language model (LLM) on internal FedEx data (tickets, documentation, etc.) to assist L1/L2 support teams.",
        "Designed and trained a CNN model for X-ray-based dangerous commodity classification, achieving over 85% accuracy for preventing fraudulent shipments."
      ]
    },
    {
      heading: "Research Intern, Anna University, Chennai, TN, India — Dec. 2022 – May 2023",
      bullets: [
        "Researched under Dr. R. Baskaran and M. S. Karthika Devi, applying parameter-efficient fine-tuning to integrate image diffusion models with AR, enabling creative and productive workflows for design professionals.",
        "Enhanced models to generate real-time video sequences and proposed AR hardware with Automatic Speech Recognition for instant voice-to-video transformation."
      ]
    }
  ],
  projects: [
    {
      name: "CoCo — The Multi-Agent Data Consultant",
      summary: "Voice-first multi-agent data consultant that orchestrates research agents and assembles editable presentations on the fly for a given business problem.",
      image: "img/coco.png",
      alt: "Screenshot of CoCo multi-agent data consultant",
      link: "https://devpost.com/software/coco-the-multi-agent-data-consultant",
      linkLabel: "View project",
      tags: ["Multi-agent", "Voice Agents"]
    },
    {
      name: "TAVGen",
      summary: "Text-to-video generator that turns prompts into Khan Academy-style lessons with a custom LLM, speech synthesis, and a custom code-video animation pipeline based on manim.",
      image: "img/tavgen.png",
      alt: "Frames from TAVGen educational video generator",
      link: "https://x.com/DotVignesh/status/1804522566742057200",
      linkLabel: "View project",
      tags: ["Text-to-video", "LLM", "SFT", "DPO", "Synthetic Data Generation"]
    },
    {
      name: "CmdF",
      summary: "Terminal-first assistant that transcribes YouTube videos with whisper.cpp and jumps to moments with fuzzy timestamp search.",
      image: "img/cmdf.png",
      alt: "CmdF terminal interface preview",
      link: "https://github.com/dotvignesh/CmdF",
      linkLabel: "View project",
      tags: ["whisper.cpp", "Fuzzy String Matching"]
    },
    {
      name: "Smart Eye",
      summary: "Assistive device combining obstacle detection and image recognition to aid visually impaired navigation.",
      image: "img/smarteye.png",
      alt: "Smart Eye assistive device mockup",
      link: "https://dev.makerfaire.com/maker/entry/65269/",
      linkLabel: "View project",
      tags: ["Computer Vision", "Raspberry Pi", "Assistive Tech"]
    },
    {
      name: "PDFChat",
      summary: "An app that embeds PDFs with LangChain and OpenAI to let you query documents conversationally with GPT-3.5.",
      image: "img/pdfchat.png",
      alt: "Screenshot of PDFChat interface",
      link: "https://github.com/dotvignesh/PDFChat",
      linkLabel: "View project",
      tags: ["LangChain", "Embeddings", "RAG"]
    },
    {
      name: "Decentralized Twitter Clone",
      summary: "Solidity-powered microblog on Ethereum testnet with wallet login, on-chain posts, and random ETH rewards for posts.",
      image: "img/dApp.png",
      alt: "Decentralized Twitter clone dApp interface",
      link: "http://twitter-clone.vigneshraja.repl.co/",
      linkLabel: "View project",
      tags: ["Solidity", "Web3", "Metamask"]
    },
    {
      name: "digest — Article Summarizing App",
      summary: "Mobile reader that compresses long-form articles with NLP, keeps them offline, and strips trackers for focus mode.",
      image: "img/digest.png",
      alt: "digest article summarizer app screens",
      link: "https://www.producthunt.com/posts/digest-app",
      linkLabel: "View on Product Hunt",
      tags: ["NLP", "Text Summarization"]
    },
    {
      name: "Virtual Clinic — KFAS Hackathon",
      summary: "Telehealth app that queues patients, vets doctors, and hosts online video call appointments to ease pandemic load.",
      image: "img/qify.png",
      alt: "Virtual Clinic app interface mockups",
      link: "https://github.com/dotvignesh/Qify",
      linkLabel: "View on GitHub",
      tags: ["Flutter", "Firebase"]
    },
    {
      name: "Rendezvous — Abacus Hackathon",
      summary: "Hackathon-winning scheduling app that matches students with faculty, handles approvals, and shares supporting material.",
      image: "img/rendezvous.png",
      alt: "Rendezvous scheduling app screens",
      link: "link_temp_broke",
      linkLabel: "View project",
      disabled: true,
      disabledLabel: "Link unavailable",
      tags: ["Hackathon Winner 🏆"]
    },
    // {
    //   name: "Hyper",
    //   summary: "Marketplace where buyers post wanted items and sellers respond, built for Android with a Parse backend.",
    //   image: "img/hyper.png",
    //   alt: "Hyper marketplace app preview",
    //   link: "https://devpost.com/software/hyper",
    //   linkLabel: "View project",
    //   tags: ["Android", "Marketplace", "Parse"]
    // }
  ],
  skillsGroups: [
    {
      heading: "ML & Data",
      columns: 2,
      items: ["PyTorch", "Transformers", "SFT/RLHF", "RAG", "LoRA/PEFT", "GRPO", "vLLM", "NumPy", "pandas", "Weights & Biases"]
    },
    {
      heading: "Programming Languages",
      columns: 1,
      items: ["Python", "Java", "C", "JavaScript"]
    },
    {
      heading: "Backend & Platforms",
      columns: 2,
      items: ["Spring Boot", "Node.js", "MySQL", "MongoDB", "Firebase"]
    }
  ],
  contact: () => `Reach out via <strong><a href="mailto:esakkiraja.e@northeastern.edu">email</a></strong><br>Or DM me on <strong><a href="https://www.linkedin.com/in/esakkivel-esakkiraja/" target="_blank" rel="noopener noreferrer">LinkedIn</a></strong>`,
};

const QUICK_PROMPTS = [
  "What do you study?",
  "Talk about your experience",
  "Show me your projects",
  "List skills",
  "How do I reach out?"
];


const ICONS = {
  send: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M5 4l14 8-14 8z"/></svg>',
  skip: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 4l8 8-8 8z"/><path d="M12 4l8 8-8 8z"/></svg>'
};

let inputEl = null;
let sendBtnEl = null;
let chipsEl = null;
const quickPromptButtons = [];
let activeStream = null;
let streaming = false;
let defaultPlaceholder = '';
let composerWrapEl = null;

// Theme
function applyTheme(t) { document.documentElement.classList.toggle('dark', t === 'dark'); document.getElementById('themeToggle').textContent = t === 'dark' ? '☀︎' : '☾'; }
(function () { const saved = localStorage.getItem('theme'); const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; applyTheme(saved || (systemDark ? 'dark' : 'light')); document.getElementById('themeToggle').addEventListener('click', () => { const nowDark = !document.documentElement.classList.contains('dark'); applyTheme(nowDark ? 'dark' : 'light'); localStorage.setItem('theme', nowDark ? 'dark' : 'light'); }); })();

// Helpers
const $ = (s) => document.querySelector(s);
const messages = $('#messages');
const BOTTOM_GAP = 16;
const SCROLL_IDLE_MS = 180;
let currentComposerHeight = 0;

const scrollRoot = () => document.scrollingElement || document.documentElement || document.body;
function reserveSpace(el) {
  if (!el) return BOTTOM_GAP;
  const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
  const reserve = Math.max(0, currentComposerHeight + BOTTOM_GAP);
  return Math.min(reserve, maxScroll);
}
function effectiveBottom(el) {
  if (!el) return 0;
  const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
  return Math.max(0, maxScroll - reserveSpace(el));
}
function distanceFromBottom() {
  const el = scrollRoot();
  if (!el) return 0;
  return Math.max(0, effectiveBottom(el) - el.scrollTop);
}
function isNearBottom(threshold = 128) {
  return distanceFromBottom() <= threshold;
}
function scrollToBottom({ smooth = false } = {}) {
  const el = scrollRoot();
  if (!el) return;
  adjustingScroll = true;
  el.scrollTo({ top: effectiveBottom(el), behavior: smooth ? 'smooth' : 'auto' });
  requestAnimationFrame(() => { adjustingScroll = false; });
}
let stickToBottom = true;
let autoScrollActive = true;
let pendingScrollFrame = null;
let adjustingScroll = false;
let userScrolling = false;
let scrollIdleTimer = null;
function scheduleScrollToBottom({ smooth = false, force = false } = {}) {
  if (pendingScrollFrame) return;
  if (userScrolling && !force) return;
  pendingScrollFrame = requestAnimationFrame(() => {
    pendingScrollFrame = null;
    scrollToBottom({ smooth });
  });
}
function clampScrollToBottom() {
  if (adjustingScroll) return;
  const el = scrollRoot();
  if (!el) return;
  const maxAllowed = effectiveBottom(el);
  if (el.scrollTop > maxAllowed) {
    adjustingScroll = true;
    el.scrollTo({ top: maxAllowed, behavior: 'auto' });
    requestAnimationFrame(() => { adjustingScroll = false; });
  }
}
function updateAutoScroll(autoRequested, { smooth = true, force = false } = {}) {
  const near = isNearBottom();
  const shouldStick = force || (autoRequested && (stickToBottom || near));
  if (shouldStick) {
    stickToBottom = true;
    autoScrollActive = true;
    scheduleScrollToBottom({ smooth, force });
  } else {
    stickToBottom = near;
    if (!near) {
      autoScrollActive = false;
    }
  }
}
window.addEventListener('scroll', () => {
  if (adjustingScroll) return;
  userScrolling = true;
  if (scrollIdleTimer) {
    clearTimeout(scrollIdleTimer);
  }
  scrollIdleTimer = setTimeout(() => {
    scrollIdleTimer = null;
    userScrolling = false;
    const nearBottom = isNearBottom();
    stickToBottom = nearBottom;
    if (nearBottom) {
      autoScrollActive = true;
      scheduleScrollToBottom({ smooth: false, force: true });
    }
  }, SCROLL_IDLE_MS);
  clampScrollToBottom();
  if (!isNearBottom()) {
    stickToBottom = false;
    autoScrollActive = false;
  }
}, { passive: true });
stickToBottom = isNearBottom();
autoScrollActive = stickToBottom;
function escapeHTML(s) { return (s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escapeAttr(s) { return escapeHTML(s).replace(/"/g, '&quot;'); }
function renderPlainText(text) { return escapeHTML(text ?? '').replace(/\n/g, '<br>'); }
function sanitizeRichText(input) {
  const template = document.createElement('template');
  template.innerHTML = (input ?? '').replace(/\n/g, '<br>');
  const allowedTags = new Set(['A', 'BR', 'STRONG', 'EM', 'B', 'I', 'UL', 'OL', 'LI', 'P', 'DIV', 'SPAN', 'IMG']);
  const cleanClass = node => {
    const classValue = node.getAttribute('class');
    if (!classValue) {
      return;
    }
    const cleaned = classValue.split(/\s+/).filter(Boolean).filter(token => /^[a-zA-Z0-9_-]+$/.test(token)).join(' ');
    if (cleaned) {
      node.setAttribute('class', cleaned);
    } else {
      node.removeAttribute('class');
    }
  };
  template.content.querySelectorAll('*').forEach(node => {
    if (!allowedTags.has(node.tagName)) {
      node.replaceWith(document.createTextNode(node.textContent));
      return;
    }
    if (node.tagName === 'A') {
      let href = (node.getAttribute('href') || '#').trim();
      if (!/^(https?:|mailto:|#)/i.test(href)) { href = '#'; }
      Array.from(node.attributes).forEach(attr => {
        if (attr.name !== 'href' && attr.name !== 'class') { node.removeAttribute(attr.name); }
      });
      node.setAttribute('href', href);
      node.style.textDecoration = 'underline';
      node.setAttribute('target', '_blank');
      node.setAttribute('rel', 'noopener noreferrer');
      cleanClass(node);
    } else if (node.tagName === 'UL') {
      const cols = node.getAttribute('data-cols');
      Array.from(node.attributes).forEach(attr => {
        if (attr.name !== 'data-cols' && attr.name !== 'class') {
          node.removeAttribute(attr.name);
        }
      });
      if (cols && /^(1|2|3)$/.test(cols)) {
        node.setAttribute('data-cols', cols);
      } else {
        node.removeAttribute('data-cols');
      }
      cleanClass(node);
    } else if (node.tagName === 'IMG') {
      let src = (node.getAttribute('src') || '').trim();
      const isHttpOrRoot = /^(https?:|\/|\.\/|\.\.\/)/i.test(src);
      const isSafeRelative = /^[a-z0-9_\-./]+$/i.test(src);
      if (!isHttpOrRoot && !isSafeRelative) {
        src = '';
      }
      const alt = (node.getAttribute('alt') || '').replace(/[\r\n]+/g, ' ').trim();
      Array.from(node.attributes).forEach(attr => {
        if (attr.name !== 'src' && attr.name !== 'alt' && attr.name !== 'class') {
          node.removeAttribute(attr.name);
        }
      });
      if (src) {
        node.setAttribute('src', src);
      } else {
        node.removeAttribute('src');
      }
      node.setAttribute('alt', alt);
      node.setAttribute('loading', 'lazy');
      node.setAttribute('decoding', 'async');
      cleanClass(node);
    } else {
      Array.from(node.attributes).forEach(attr => {
        if (attr.name !== 'class') {
          node.removeAttribute(attr.name);
        }
      });
      cleanClass(node);
    }
  });
  return template.innerHTML;
}

function setStreamingUI(active) {
  streaming = active;
  if (!sendBtnEl || !inputEl) return;
  if (!defaultPlaceholder) {
    defaultPlaceholder = inputEl.getAttribute('placeholder') || '';
  }
  if (active) {
    sendBtnEl.innerHTML = ICONS.skip;
    sendBtnEl.setAttribute('aria-label', 'Skip response');
    sendBtnEl.classList.add('skip-btn');
    sendBtnEl.classList.remove('bg-accent', 'text-white');
    inputEl.setAttribute('disabled', 'disabled');
    inputEl.classList.add('opacity-60', 'cursor-not-allowed');
    inputEl.placeholder = 'Streaming… (Skip to finish)';
    if (chipsEl) {
      chipsEl.classList.add('opacity-60');
    }
    quickPromptButtons.forEach(btn => btn.disabled = true);
    if (composerWrapEl) {
      composerWrapEl.classList.add('streaming');
    }
  } else {
    sendBtnEl.innerHTML = ICONS.send;
    sendBtnEl.setAttribute('aria-label', 'Send message');
    sendBtnEl.classList.remove('skip-btn');
    sendBtnEl.classList.add('bg-accent', 'text-white');
    inputEl.removeAttribute('disabled');
    inputEl.classList.remove('opacity-60', 'cursor-not-allowed');
    inputEl.placeholder = defaultPlaceholder || 'Message… (Shift+Enter for newline)';
    if (chipsEl) {
      chipsEl.classList.remove('opacity-60');
    }
    quickPromptButtons.forEach(btn => btn.disabled = false);
    if (composerWrapEl) {
      composerWrapEl.classList.remove('streaming');
    }
  }
  adjustMessagePadding();
}

function attachStream(controller) {
  if (!controller) return controller;
  if (activeStream && activeStream !== controller) {
    activeStream.finish();
  }
  activeStream = controller;
  setStreamingUI(true);
  controller.promise.finally(() => {
    if (activeStream === controller) {
      activeStream = null;
      setStreamingUI(false);
    }
  });
  return controller;
}

function streamRichHTML(el, html, speed) {
  const template = document.createElement('template');
  template.innerHTML = html;
  const cursor = document.createElement('span'); cursor.className = 'typing-cursor'; el.appendChild(cursor);
  const queue = Array.from(template.content.childNodes).map(node => ({ node, parent: el }));
  let currentText = null;
  let textNode = null;
  let index = 0;
  let finished = false;
  let timer = null;
  let resolvePromise;

  function appendFull(parent, node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) return;
      const tn = document.createTextNode(text);
      if (parent === el) {
        parent.insertBefore(tn, cursor);
      } else {
        parent.appendChild(tn);
      }
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      if (parent === el) {
        parent.insertBefore(clone, cursor);
      } else {
        parent.appendChild(clone);
      }
      Array.from(node.childNodes).forEach(child => appendFull(clone, child));
    }
  }

  function finalize(flushRemaining) {
    if (finished) return;
    finished = true;
    if (timer) clearInterval(timer);
    if (flushRemaining) {
      if (currentText && textNode) {
        textNode.textContent += currentText.slice(index);
      }
      while (queue.length) {
        const { node, parent } = queue.shift();
        appendFull(parent, node);
      }
    }
    cursor.remove();
    if (autoScrollActive) {
      scheduleScrollToBottom({ smooth: false });
    }
    if (resolvePromise) resolvePromise();
  }

  function step() {
    if (finished) return;
    if (currentText) {
      if (index >= currentText.length) {
        currentText = null;
        textNode = null;
        return;
      }
      if (!textNode) {
        currentText = null;
        return;
      }
      textNode.textContent += currentText[index++];
      if (autoScrollActive) {
        scheduleScrollToBottom({ smooth: false });
      }
      return;
    }
    if (!queue.length) {
      finalize(false);
      return;
    }
    const { node, parent } = queue.shift();
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      if (!text) return;
      textNode = document.createTextNode('');
      if (parent === el) {
        parent.insertBefore(textNode, cursor);
      } else {
        parent.appendChild(textNode);
      }
      currentText = text;
      index = 0;
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const clone = node.cloneNode(false);
      if (parent === el) {
        parent.insertBefore(clone, cursor);
      } else {
        parent.appendChild(clone);
      }
      const children = Array.from(node.childNodes);
      for (let i = children.length - 1; i >= 0; i--) {
        queue.unshift({ node: children[i], parent: clone });
      }
      if (autoScrollActive) {
        scheduleScrollToBottom({ smooth: false });
      }
      return;
    }
    if (autoScrollActive) {
      scheduleScrollToBottom({ smooth: false });
    }
  }

  const promise = new Promise(res => {
    resolvePromise = res;
    if (!queue.length) {
      finalize(false);
      return;
    }
    timer = setInterval(step, speed);
  });

  return {
    promise,
    finish() { finalize(true); }
  };
}

function streamText(el, text, { speed = 5, rich = false } = {}) {
  const content = text ?? '';
  if (rich) {
    const sanitized = sanitizeRichText(content);
    return streamRichHTML(el, sanitized, speed);
  }
  let i = 0;
  let finished = false;
  let timer = null;
  let resolvePromise;
  const cursor = document.createElement('span'); cursor.className = 'typing-cursor'; el.appendChild(cursor);

  function finalize(flushRemaining) {
    if (finished) return;
    finished = true;
    if (timer) clearInterval(timer);
    if (flushRemaining) {
      const remaining = content.slice(i);
      if (remaining) {
        cursor.insertAdjacentHTML('beforebegin', escapeHTML(remaining));
      }
    }
    cursor.remove();
    if (autoScrollActive) {
      scheduleScrollToBottom({ smooth: false });
    }
    if (resolvePromise) resolvePromise();
  }

  function step() {
    if (finished) return;
    if (i >= content.length) {
      finalize(false);
      return;
    }
    const ch = content[i++];
    if (ch === '\r') { return; }
    if (ch === '\n') {
      cursor.insertAdjacentHTML('beforebegin', '<br>');
      if (autoScrollActive) {
        scheduleScrollToBottom({ smooth: false });
      }
      return;
    }
    cursor.insertAdjacentHTML('beforebegin', escapeHTML(ch));
    if (autoScrollActive) {
      scheduleScrollToBottom({ smooth: false });
    }
  }

  const promise = new Promise(res => {
    resolvePromise = res;
    if (!content.length) {
      finalize(false);
      return;
    }
    timer = setInterval(step, speed);
  });

  return {
    promise,
    finish() { finalize(true); }
  };
}

function createMessage(role = 'assistant', { autoScroll = true } = {}) {
  const wrap = document.createElement('div'); wrap.className = 'grid grid-cols-[40px,minmax(0,1fr)] gap-3 p-4 border border-border rounded-2xl bg-panel shadow';
  const avatar = document.createElement('div'); avatar.className = role === 'assistant' ? 'w-7 h-7 rounded-full grid place-items-center border border-border bg-panel-2' : 'w-9 h-9 rounded-full overflow-hidden border border-border bg-panel-2';
  avatar.innerHTML = role === 'assistant'
    ? '<img src="img/profile-pic-new.png" class="w-full h-full object-cover" onerror="this.style.display=\'none\'">'
    : '<div class="w-full h-full grid place-items-center bg-panel-2 text-muted"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.4 4.9L20 9l-4 3.9.9 5.7L12 16.8 7.1 18.6 8 12.9 4 9l5.6-1.1L12 3z"/></svg></div>';
  const content = document.createElement('div'); content.className = 'leading-relaxed min-w-0'; content.innerHTML = '<div class="text-xs text-muted mb-2">' + (role === 'assistant' ? 'NotGPT' : 'You') + '</div><div class="body break-words"></div>';
  wrap.appendChild(avatar); wrap.appendChild(content); messages.appendChild(wrap);
  adjustMessagePadding();
  updateAutoScroll(autoScroll, { smooth: true, force: role === 'user' });
  return content.querySelector('.body');
}

function mdList(items) { return items.map(i => '• ' + i).join('\n'); }
function renderSection(section) {
  if (Array.isArray(section)) {
    return section.join('\n');
  }
  if (!section) return '';
  const heading = section.heading ? `${section.heading}\n` : '';
  const bullets = section.bullets ? mdList(section.bullets) : '';
  return `${heading}${bullets}`.trim();
}
function renderExperienceItems(items) {
  return items.map(item => {
    const heading = item.heading ? `<p><strong>${escapeHTML(item.heading)}</strong></p>` : '';
    const bulletList = Array.isArray(item.bullets) && item.bullets.length
      ? `<ul>${item.bullets.map(b => `<li>${b}</li>`).join('')}</ul>`
      : '';
    return [heading, bulletList].filter(Boolean).join('');
  }).join('');
}
function renderSkillGroups(groups) {
  if (!Array.isArray(groups) || !groups.length) return '';
  return groups.map(group => {
    const heading = group.heading ? `<p><strong>${escapeHTML(group.heading)}</strong></p>` : '';
    const cols = group.columns && Number.isFinite(group.columns) ? Math.max(1, Math.min(3, Math.round(group.columns))) : 1;
    const list = Array.isArray(group.items) && group.items.length
      ? `<ul${cols > 1 ? ` data-cols="${cols}"` : ''}>${group.items.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul>`
      : '';
    return [heading, list].filter(Boolean).join('');
  }).join('');
}
function renderProjectCards(items) {
  if (!Array.isArray(items) || !items.length) return '';
  const cards = items.map(item => {
    const image = item.image
      ? `<div class="project-card__image"><img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.alt || item.name)}"></div>`
      : '';
    const title = `<p class="project-card__title">${escapeHTML(item.name)}</p>`;
    const summary = item.summary ? `<p class="project-card__summary">${escapeHTML(item.summary)}</p>` : '';
    const tags = Array.isArray(item.tags) && item.tags.length
      ? `<ul class="project-card__tags">${item.tags.map(tag => `<li>${escapeHTML(tag)}</li>`).join('')}</ul>`
      : '';
    const linkAvailable = item.link && !item.disabled && item.link !== 'link_temp_broke';
    const linkLabel = escapeHTML(item.linkLabel || 'View project');
    const linkMarkup = linkAvailable
      ? `<a class="project-card__link" href="${escapeAttr(item.link)}" target="_blank" rel="noopener noreferrer">${linkLabel}</a>`
      : `<span class="project-card__link disabled">${escapeHTML(item.disabledLabel || 'Link unavailable')}</span>`;
    return `<div class="project-card" role="listitem">${image}<div class="project-card__body">${title}${summary}${tags}<div class="mt-auto flex items-center">${linkMarkup}</div></div></div>`;
  }).join('');
  const intro = `<p class="project-scroll__intro">Here are a few projects I'm excited about:</p>`;
  return `<div class="project-scroll-wrap">${intro}<div class="project-scroll" role="list">${cards}</div></div>`;
}
function makeSections() {
  const edText = DATA.educationItems.map(renderSection).join('\n\n');
  const exText = renderExperienceItems(DATA.experienceItems);
  const pjText = renderProjectCards(DATA.projects);
  const skText = renderSkillGroups(DATA.skillsGroups);
  const hasMarkup = s => /<\/?[a-z][^>]*>/i.test(s);
  return {
    ed: { text: edText, rich: hasMarkup(edText) },
    ex: { text: exText, rich: hasMarkup(exText) },
    pj: { text: pjText, rich: hasMarkup(pjText) },
    sk: { text: skText, rich: hasMarkup(skText) },
  };
}

function decideResponse(m0) {
  const m = (m0 || '').toLowerCase();
  const { ed, ex, pj, sk } = makeSections();
  if (/(education|study|degree|school)/.test(m)) return { text: `Here is my education history —\n\n${ed.text}`, rich: ed.rich };
  if (/(project|portfolio|build|repo)/.test(m)) return { text: pj.text, rich: pj.rich };
  if (/(experience|work|job|career)/.test(m)) return { text: `Here is a quick highlight of my work experience —\n\n${ex.text}`, rich: ex.rich };
  if (/(skill|stack|tools|tech)/.test(m)) return { text: `My current tech stack & skills include —\n\n${sk.text}`, rich: sk.rich };
  if (/(contact|email|reach|connect)/.test(m)) return { text: DATA.contact(), rich: true };
  // if(/(resume|cv)/.test(m)) return {text:`You can view/download my CV here: <a href="cv.pdf">cv.pdf</a>.`, rich:true};
  if (/(about|intro|hello|hi|who are you)/.test(m)) return { text: SITE.intro };
  return { text: `I can chat about my education, work experience, projects, skills, or about my contact information. Try the quick prompts below.` };
}

async function respond(text) {
  if (!text) return;
  if (streaming && activeStream) {
    activeStream.finish();
    return;
  }
  const you = createMessage('user'); you.innerHTML = renderPlainText(text);
  const bot = createMessage('assistant');
  const badge = document.createElement('div'); badge.className = 'badge inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full mb-2'; badge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-current opacity-80"></span> Reasoning';
  bot.parentElement.prepend(badge);
  await new Promise(r => setTimeout(r, 450));
  badge.remove();
  const reply = decideResponse(text);
  const controller = attachStream(streamText(bot, reply.text, { rich: !!reply.rich }));
  await controller.promise;
}

function bindComposer() {
  inputEl = $('#input');
  sendBtnEl = $('#sendBtn');
  chipsEl = $('#chips');
  if (sendBtnEl) {
    sendBtnEl.innerHTML = ICONS.send;
    sendBtnEl.setAttribute('aria-label', 'Send message');
  }
  function send() {
    if (streaming && activeStream) {
      activeStream.finish();
      return;
    }
    const t = inputEl.value.trim();
    if (!t) return;
    inputEl.value = '';
    respond(t);
  }
  sendBtnEl.addEventListener('click', send);
  inputEl.addEventListener('keydown', e => {
    if (streaming) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (activeStream) activeStream.finish();
      } else if (!e.shiftKey) {
        e.preventDefault();
      }
      return;
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });
  chipsEl.addEventListener('wheel', e => {
    if (!e.ctrlKey && Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      chipsEl.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });
  QUICK_PROMPTS.forEach(label => {
    const b = document.createElement('button');
    b.className = 'border border-border bg-panel rounded-xl px-3 py-2 whitespace-nowrap snap-start';
    b.textContent = label;
    b.onclick = () => {
      if (streaming && activeStream) {
        activeStream.finish();
        return;
      }
      respond(label);
    };
    quickPromptButtons.push(b);
    chipsEl.appendChild(b);
  });
  adjustMessagePadding();
}

function branding() {
  $('#ownerName').textContent = SITE.ownerName;
  $('#mOwnerName').textContent = SITE.ownerName;
  $('#brandName').textContent = SITE.ownerName;
  $('#ownerHandle').textContent = SITE.ownerHandle;
  $('#mOwnerHandle').textContent = SITE.ownerHandle;
  const githubDesktop = document.getElementById('githubLink');
  const linkedinDesktop = document.getElementById('linkedinLink');
  const twitterDesktop = document.getElementById('twitterLink');
  const emailDesktop = document.getElementById('emailLink');
  if (githubDesktop) githubDesktop.href = SITE.githubUrl;
  if (linkedinDesktop) linkedinDesktop.href = SITE.linkedinUrl;
  if (twitterDesktop) twitterDesktop.href = SITE.twitterUrl;
  if (emailDesktop) emailDesktop.href = `mailto:${SITE.email}`;
  $('#emailLabel').textContent = "Email";
  const githubMobile = document.getElementById('mGithub');
  const linkedinMobile = document.getElementById('mLinkedIn');
  const twitterMobile = document.getElementById('mTwitter');
  const emailMobile = document.getElementById('mEmail');
  if (githubMobile) githubMobile.href = SITE.githubUrl;
  if (linkedinMobile) linkedinMobile.href = SITE.linkedinUrl;
  if (twitterMobile) twitterMobile.href = SITE.twitterUrl;
  if (emailMobile) emailMobile.href = `mailto:${SITE.email}`;
  $('#mEmailLabel').textContent = "Email";
}

// Layout
let collapsed = false; // expanded by default
const mainWrap = document.getElementById('mainWrap');
const composerWrap = document.getElementById('composerWrap');
composerWrapEl = composerWrap;
const composerInner = composerWrap ? composerWrap.querySelector('.pointer-events-auto') : null;
const sidebarEl = document.getElementById('sidebar');
const collapseIcon = document.getElementById('collapseIcon');
const topbar = document.getElementById('topbarInner');
const brandNameEl = document.getElementById('brandName');

function adjustMessagePadding() {
  if (!messages) return;
  const target = composerInner || composerWrap;
  const height = target ? target.offsetHeight : 0;
  currentComposerHeight = height;
  const total = `${height + BOTTOM_GAP}px`;
  messages.style.paddingBottom = total;
  if (mainWrap) {
    mainWrap.style.paddingBottom = total;
  }
  clampScrollToBottom();
  if (autoScrollActive) {
    scheduleScrollToBottom({ smooth: false });
  }
}

let composerPaddingObserver = null;
if (window.ResizeObserver && composerInner) {
  composerPaddingObserver = new ResizeObserver(() => adjustMessagePadding());
  composerPaddingObserver.observe(composerInner);
}
window.addEventListener('resize', adjustMessagePadding, { passive: true });
adjustMessagePadding();

function updateCollapseIcon() {
  if (!collapseIcon) return;
  collapseIcon.classList.toggle('fa-angles-left', !collapsed);
  collapseIcon.classList.toggle('fa-angles-right', collapsed);
}

function applyLayout() {
  const desktop = window.matchMedia('(min-width: 768px)').matches;
  if (desktop) {
    sidebarEl.classList.toggle('collapsed', collapsed);
    mainWrap.classList.toggle('md:ml-72', !collapsed);
    mainWrap.classList.toggle('md:ml-24', collapsed);
    composerWrap.classList.toggle('md:pl-72', !collapsed);
    composerWrap.classList.toggle('md:pl-24', collapsed);
    if (topbar) {
      topbar.classList.toggle('md:pl-72', !collapsed);
      topbar.classList.toggle('md:pl-24', collapsed);
    }
    if (brandNameEl) {
      brandNameEl.classList.toggle('hidden', !collapsed);
    }
  } else {
    sidebarEl.classList.remove('collapsed');
    mainWrap.classList.remove('md:ml-72', 'md:ml-24');
    composerWrap.classList.remove('md:pl-72', 'md:pl-24');
    if (topbar) {
      topbar.classList.remove('md:pl-72', 'md:pl-24');
    }
    if (brandNameEl) {
      brandNameEl.classList.remove('hidden');
    }
  }
  updateCollapseIcon();
  adjustMessagePadding();
}

function bindSidebar() {
  const burger = $('#burger'); const scrim = $('#scrim'); const mobileSidebar = $('#mobileSidebar');
  $('#collapseBtn').addEventListener('click', () => { collapsed = !collapsed; applyLayout(); });
  $('#newChat').addEventListener('click', (e) => {
    e.preventDefault();
    if (streaming && activeStream) {
      activeStream.finish();
      return;
    }
    messages.innerHTML = '';
    greet();
  });
  burger.addEventListener('click', () => { mobileSidebar.classList.remove('-translate-x-full'); scrim.classList.remove('hidden'); });
  $('#mobileClose').addEventListener('click', () => { mobileSidebar.classList.add('-translate-x-full'); scrim.classList.add('hidden'); });
  scrim.addEventListener('click', () => { mobileSidebar.classList.add('-translate-x-full'); scrim.classList.add('hidden'); });
  $('#mNewChat').addEventListener('click', (e) => {
    e.preventDefault();
    if (streaming && activeStream) {
      activeStream.finish();
      return;
    }
    mobileSidebar.classList.add('-translate-x-full');
    scrim.classList.add('hidden');
    messages.innerHTML = '';
    greet();
  });
  window.addEventListener('resize', applyLayout, { passive: true });
  applyLayout();
}

async function greet() {
  const bot = createMessage('assistant', { autoScroll: false });
  const badge = document.createElement('div'); badge.className = 'badge inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full mb-2'; badge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-current opacity-80"></span> Reasoning'; bot.parentElement.prepend(badge);
  await new Promise(r => setTimeout(r, 450)); badge.remove();
  const intro = decideResponse('about');
  const controller = attachStream(streamText(bot, intro.text, { rich: !!intro.rich }));
  await controller.promise;
}

// Boot
branding(); bindComposer(); bindSidebar(); greet();
