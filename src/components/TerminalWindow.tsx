"use client";

import { useRef, useState, type ReactNode } from "react";

import { tabs, type TabId } from "@/content/site";

type Props = {
  panes: { id: TabId; content: ReactNode }[];
};

export function TerminalWindow({ panes }: Props) {
  const [active, setActive] = useState<TabId>(tabs[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  function focusTab(id: TabId) {
    setActive(id);
    tabRefs.current[id]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const index = tabs.findIndex((tab) => tab.id === active);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(tabs[(index + 1) % tabs.length].id);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(tabs[(index - 1 + tabs.length) % tabs.length].id);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(tabs[0].id);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(tabs[tabs.length - 1].id);
    }
  }

  return (
    <div className="glass overflow-hidden">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span aria-hidden className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]/80" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]/80" />
        </span>
        <p className="flex-1 truncate text-center font-mono text-xs text-slate-400">
          amber@ahawker: ~/{activeTab.id}
        </p>
        <span aria-hidden className="hidden font-mono text-[11px] text-slate-600 sm:block">
          zsh · 120×40
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Portfolio sections"
        onKeyDown={onKeyDown}
        className="scrollbar-thin flex gap-1 overflow-x-auto border-b border-white/10 bg-white/[0.02] px-2 py-2"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 font-mono text-xs transition-colors ${
                selected
                  ? "bg-white/10 text-accent shadow-[inset_0_0_0_1px_rgba(94,234,212,0.25)]"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="bg-black/20 px-4 py-6 sm:px-8 sm:py-8">
        <p className="prompt">
          <span className="text-accent">amber@ahawker</span>
          <span className="text-slate-600">:</span>
          <span className="text-accent-soft">~</span>
          <span className="text-slate-600">$</span>
          <span className="text-slate-200">{activeTab.command}</span>
          <span aria-hidden className="inline-block h-4 w-2 animate-blink bg-accent/80" />
        </p>

        <div className="mt-6">
          {panes.map((pane) => (
            <div
              key={pane.id}
              role="tabpanel"
              id={`panel-${pane.id}`}
              aria-labelledby={`tab-${pane.id}`}
              tabIndex={0}
              hidden={pane.id !== active}
              className="animate-fade-up focus-visible:outline-none"
            >
              {pane.content}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[11px] text-slate-500">
        <span>~/portfolio · main</span>
        <span aria-hidden>use ← → to switch tabs</span>
      </div>
    </div>
  );
}
