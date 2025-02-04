import { Home, User, Briefcase } from "lucide-react";
import { TubeLightNavbar } from "../../components/blocks/tubelight-navbar";
import { useState } from "react";
import AutoMaskPage from "./components/AutoMaskPage";
import CatPzcTryOn from "./components/CatPzcTryOn";
import ManualMaskPage from "./components/ManualMaskPage";

export default function TryOnPage() {
  const navItems = [
    { name: "Auto Mode", icon: Home },
    { name: "Manuel Mode", icon: User },
    { name: "Cat PZC", icon: Briefcase },
  ];

  const [activeTab, setActiveTab] = useState(navItems[0].name);

  return (
    <section className="w-full bg-[#030303]">
      <TubeLightNavbar
        items={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="w-full">
        {activeTab === "Auto Mode" && <AutoMaskPage />}
        {activeTab === "Manuel Mode" && <ManualMaskPage />}
        {activeTab === "Cat PZC" && <CatPzcTryOn />}
      </div>
    </section>
  );
}
