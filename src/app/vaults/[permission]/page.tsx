"use client";
import { useEffect } from "react";
import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import VaultDetailsBanner from "@/components/Permissionless/VaultDetailsBanner";
import VaultPermissionless from "@/components/Permissionless/VaultPermissionless";
import Technicals from "@/components/Vaults/Technicals";
import TopVaults from "@/components/Vaults/TopVaults";

const VaultPermissionlessDetailsPage = ({
  params,
}: {
  params: { permission: string };
}) => {
  const { permission } = params;

  useEffect(() => {
    document.title = `Arcana Vaults | ${permission}`;
  }, [permission]);

  return (
    <div className=" overflow-hidden relative">
      <div className=" sm:h-[486px] flex flex-col">
        <Navbar />
        <div className=" flex-grow flex justify-center w-full items-center">
          <VaultDetailsBanner params={params} />
        </div>
      </div>
      <VaultPermissionless params={params} />
      <Technicals />
      <TopVaults />
      <Footer />
    </div>
  );
};

export default VaultPermissionlessDetailsPage;
