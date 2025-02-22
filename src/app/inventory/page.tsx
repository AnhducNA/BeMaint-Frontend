import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SettingBoxes from "@/components/SettingBoxes";
import InventoryManagementView from "@/sections/inventory/inventory-manager-view";

export const metadata: Metadata = {
  title: "Next.js Settings Page | NextAdmin - Next.js Dashboard c",
  description: "This is Next.js Settings page for NextAdmin Dashboard Kit",
};

const InventoryPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px]">
        <Breadcrumb pageName="Kho vật tư" />

        <InventoryManagementView />
      </div>
    </DefaultLayout>
  );
};

export default InventoryPage;
