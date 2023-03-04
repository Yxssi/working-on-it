import React from 'react';
import { Sidebar } from 'flowbite-react';

export default function MainLayoutSidebar() {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Dashboard</Sidebar.Item>
            <Sidebar.Item href="#">Kanban</Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">Upgrade to Pro</Sidebar.Item>
            <Sidebar.Item href="#">Documentation</Sidebar.Item>
            <Sidebar.Item href="#">Help</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
