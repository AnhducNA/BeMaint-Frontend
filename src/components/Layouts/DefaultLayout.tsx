"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import {
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [tabs, setTabs] = useState<{ label: string; route: string }[]>([]);

  useEffect(() => {
    const storedTabs = localStorage.getItem("openTabs");
    if (storedTabs) {
      setTabs(JSON.parse(storedTabs));
    }
  }, []);

  // Hàm thêm tab khi chọn sidebar
  const addTab = (tab: { label: string; route: string }) => {
    if (!tabs.find((t) => t.route === tab.route)) {
      const newTabs = [...tabs, tab];
      setTabs(newTabs);
      localStorage.setItem("openTabs", JSON.stringify(newTabs));
    }
  };
  // Hàm đóng tab
  const removeTab = (route: string) => {
    const newTabs = tabs.filter((tab) => tab.route !== route);
    setTabs(newTabs);
    localStorage.setItem("openTabs", JSON.stringify(newTabs));
  };

  return (
    <>
      {/* <!-- ===== Page Wrapper Star ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Star ===== --> */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onAddTab={addTab}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Star ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Star ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* Hiển thị Tabs */}
          {tabs.length > 0 && (
            <ListItem sx={{ justifyContent: "flex-start" }}>
              {tabs.map((tab) => (
                <ListItemButton
                  key={tab.route}
                  sx={{ width: "fit-content", justifyContent: "flex-start" }}
                >
                  <Link
                    href={tab.route}
                    sx={{ textTransform: "uppercase", mr: 1 }}
                  >
                    {String(tab.label)}
                  </Link>
                  <ListItemIcon
                    onClick={() => removeTab(tab.route)}
                    className="text-red-500"
                  >
                    <CancelIcon />
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </ListItem>
          )}

          {/* <!-- ===== Main Content Star ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
