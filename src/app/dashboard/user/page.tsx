import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import DashboardUserView from "@/components/Dashboard/DashboardUserView";

export const metadata: Metadata = {
  title: "Trang chủ",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <DashboardUserView />
      </DefaultLayout>
    </>
  );
}
