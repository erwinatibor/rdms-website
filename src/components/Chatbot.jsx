import { useState, useRef, useEffect } from 'react';
import { botConfig, quickReplies, knowledgeBase } from '../chatbotKB';

function matchQuery(input) {
  const q = input.toLowerCase().trim();
  let best = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    for (const trigger of entry.triggers) {
      const t = trigger.toLowerCase();
      if (q === t) return entry.answer;
      if (q.includes(t)) {
        const score = t.length / q.length + t.split(' ').length * 0.3;
        if (score > bestScore) { bestScore = score; best = entry.answer; }
      }
      if (t.includes(q) && q.length > 2) {
        const score = q.length / t.length * 0.6;
        if (score > bestScore) { bestScore = score; best = entry.answer; }
      }
      const qWords = q.split(/\s+/);
      const tWords = t.split(/\s+/);
      const overlap = qWords.filter(w => w.length > 2 && tWords.some(tw => tw.includes(w) || w.includes(tw))).length;
      if (overlap > 0) {
        const score = overlap / Math.max(qWords.length, tWords.length) * 0.8;
        if (score > bestScore) { bestScore = score; best = entry.answer; }
      }
    }
  }

  return bestScore > 0.25 ? best : null;
}

function matchQuickReply(key) {
  for (const entry of knowledgeBase) {
    if (entry.keys && entry.keys.includes(key)) return entry.answer;
  }
  return null;
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
    .replace(/([\w.-]+@[\w.-]+\.\w+)/g, '<a href="mailto:$1" style="color:var(--green);text-decoration:underline">$1</a>')
    .replace(/(\+250[\s\d]+)/g, '<a href="tel:$1" style="color:var(--green);text-decoration:underline">$1</a>');
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showQuick, setShowQuick] = useState(true);
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ from: 'bot', text: botConfig.greeting, time: new Date() }]);
    }
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = window.innerWidth <= 600 ? 'hidden' : '';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setMessages([]);
      setInput('');
      setShowQuick(true);
      setTyping(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const addBotReply = (text) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { from: 'bot', text, time: new Date() }]);
    }, 600);
  };

  const handleSend = () => {
    const q = input.trim();
    if (!q) return;
    setMessages(prev => [...prev, { from: 'user', text: q, time: new Date() }]);
    setInput('');
    setShowQuick(false);
    const answer = matchQuery(q);
    addBotReply(answer || botConfig.fallback);
  };

  const handleQuickReply = (qr) => {
    setMessages(prev => [...prev, { from: 'user', text: qr.label, time: new Date() }]);
    setShowQuick(false);
    const answer = matchQuickReply(qr.key);
    addBotReply(answer || botConfig.fallback);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const timeStr = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* FAB button */}
      <button
        className={`chatbot-fab${open ? ' chatbot-fab-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat' : 'Open RDMS Assistant'}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* Overlay for mobile */}
      {open && <div className="chatbot-overlay" onClick={() => setOpen(false)} />}

      {/* Chat window */}
      {open && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <img src="/logo.png" alt="RDMS" style={{ width: 24, height: 24, objectFit: 'contain' }} />
              </div>
              <div>
                <div className="chatbot-header-name">{botConfig.name}</div>
                <div className="chatbot-header-status">
                  <span className="chatbot-online-dot" />
                  Online
                </div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Disclaimer */}
          <div className="chatbot-disclaimer">{botConfig.disclaimer}</div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg-${msg.from}`}>
                <div
                  className={`chatbot-bubble chatbot-bubble-${msg.from}`}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                />
                <div className="chatbot-time">{timeStr(msg.time)}</div>
              </div>
            ))}

            {typing && (
              <div className="chatbot-msg chatbot-msg-bot">
                <div className="chatbot-bubble chatbot-bubble-bot chatbot-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}

            {showQuick && messages.length > 0 && (
              <div className="chatbot-quick-replies">
                {quickReplies.map((qr) => (
                  <button key={qr.key} className="chatbot-qr" onClick={() => handleQuickReply(qr)}>
                    {qr.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input-bar">
            <input
              ref={inputRef}
              type="text"
              className="chatbot-input"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
            />
            <button className="chatbot-send" onClick={handleSend} disabled={!input.trim()} aria-label="Send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
