"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useId, useRef, useState } from "react";

export interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  label?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Tabs({ items, label = "Seções", value, defaultValue, onValueChange }: TabsProps) {
  const uid = useId();
  const firstEnabled = items.find((item) => !item.disabled)?.value;
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabled ?? items[0]?.value);
  const selectedValue = value ?? internalValue;
  const selectedIndex = Math.max(0, items.findIndex((item) => item.value === selectedValue));
  const selectedItem = items[selectedIndex] ?? items[0];
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const moveFocus = (currentIndex: number, direction: 1 | -1) => {
    if (!items.length) return;

    let nextIndex = currentIndex;
    for (let step = 0; step < items.length; step += 1) {
      nextIndex = (nextIndex + direction + items.length) % items.length;
      if (!items[nextIndex]?.disabled) {
        buttonRefs.current[nextIndex]?.focus();
        select(items[nextIndex].value);
        return;
      }
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveFocus(index, 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveFocus(index, -1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      const nextIndex = items.findIndex((item) => !item.disabled);
      if (nextIndex >= 0) {
        buttonRefs.current[nextIndex]?.focus();
        select(items[nextIndex].value);
      }
    }
    if (event.key === "End") {
      event.preventDefault();
      const nextIndex = [...items].reverse().findIndex((item) => !item.disabled);
      if (nextIndex >= 0) {
        const realIndex = items.length - 1 - nextIndex;
        buttonRefs.current[realIndex]?.focus();
        select(items[realIndex].value);
      }
    }
  };

  return (
    <div className="ds-tabs" data-slot="tabs">
      <div className="ds-tabs__list" data-slot="tab-list" role="tablist" aria-label={label}>
        {items.map((item, index) => {
          const selected = item.value === selectedItem?.value;
          const tabId = `${uid}-${item.value}-tab`;
          const panelId = `${uid}-${item.value}-panel`;

          return (
            <button
              key={item.value}
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              type="button"
              className="ds-tabs__tab"
              data-slot="tab"
              role="tab"
              id={tabId}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => select(item.value)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => {
        const selected = item.value === selectedItem?.value;
        return (
          <div
            key={item.value}
            className="ds-tabs__panel"
            data-slot="tab-panel"
            role="tabpanel"
            id={`${uid}-${item.value}-panel`}
            aria-labelledby={`${uid}-${item.value}-tab`}
            hidden={!selected}
          >
            {item.content}
          </div>
        );
      })}
    </div>
  );
}
