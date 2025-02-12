import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import DashboardView from "@/components/Dashboard/DashboardView";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <DashboardView />
      </DefaultLayout>
    </>
  );
}
