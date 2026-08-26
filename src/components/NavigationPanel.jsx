import React, { useState } from 'react';

const STARS = [{ name: '太阳', emoji: '☀️' }];
const PLANETS = [
  { name: '水星', emoji: '☿️' },
  { name: '金星', emoji: '♀️' },
  { name: '地球', emoji: '🌍' },
  { name: '火星', emoji: '♂️' },
  { name: '木星', emoji: '♃' },
  { name: '土星', emoji: '🪐' },
  { name: '天王星', emoji: '⛢' },
  { name: '海王星', emoji: '♆' },
  { name: '冥王星', emoji: '⯓' }
];
const MOONS = [{ name: '月球', emoji: '🌙' }];

export function NavigationPanel({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handle = (name) => {
    setActive(name);
    onSelect(name);
    setOpen(false);
  };

  const renderItem = (item) => (
    <div
      key={item.name}
      className={'nav-item' + (active === item.name ? ' active' : '')}
      data-name={item.name}
      onClick={() => handle(item.name)}
    >
      {item.emoji} {item.name}
    </div>
  );

  return (
    <>
      <button className="navigation-btn" onClick={() => setOpen(o => !o)} title="天体导航">
        ☰ 导航
      </button>

      {open && (
        <div className="navigation-panel">
          <div className="navigation-panel-header">
            <span>选择天体进行追踪</span>
            <button className="close-nav-btn" onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="navigation-panel-content">
            <div className="nav-category">
              <div className="nav-category-title">恒星</div>
              <div className="nav-items">{STARS.map(renderItem)}</div>
            </div>
            <div className="nav-category">
              <div className="nav-category-title">行星</div>
              <div className="nav-items">{PLANETS.map(renderItem)}</div>
            </div>
            <div className="nav-category">
              <div className="nav-category-title">卫星</div>
              <div className="nav-items">{MOONS.map(renderItem)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
