"use client";
import React from "react";

type TabsType = {
  children: React.ReactElement<TabPanelType>[];
  className?: string;
};

const Tabs = ({ children, className }: TabsType) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const TabButtons = React.Children.map(children, (child, index) => {
    return (
      <button
        onClick={() => setActiveTab(index)}
        className={`px-4 py-2 min-w-32  ${
          activeTab === index ? "border-b-2 border-foreground font-bold" : ""
        }`}
      >
        {child.props.label}
      </button>
    );
  });

  return (
    <div className={className ? className : ""}>
      <div className="dark:bg-slate-900 bg-slate-300">{TabButtons}</div>
      {children[activeTab]}
    </div>
  );
};

type TabPanelType = {
  children: React.ReactNode;
  label: string;
};

Tabs.Panel = ({ children }: TabPanelType) => {
  return <>{children}</>;
};

export default Tabs;
