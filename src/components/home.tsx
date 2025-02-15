import React from "react";
import Header from "./navigation/Header";
import DeliveryMap from "./dashboard/DeliveryMap";
import OrdersList from "./orders/OrdersList";
import CarbonMetrics from "./sustainability/CarbonMetrics";
import ChatInterface from "./chat/ChatInterface";

interface HomeProps {
  userRole?: "customer" | "rider" | "vendor" | "admin";
  userName?: string;
  walletBalance?: number;
}

const Home = ({
  userRole = "customer",
  userName = "John Doe",
  walletBalance = 100.0,
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        userRole={userRole}
        userName={userName}
        walletBalance={walletBalance}
      />

      <main className="pt-[72px] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-8 space-y-6">
            {/* Map Section */}
            <DeliveryMap />

            {/* Orders Section */}
            <div className="bg-white rounded-lg shadow">
              <OrdersList userRole={userRole} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Carbon Metrics */}
            <CarbonMetrics />

            {/* Chat Interface */}
            <ChatInterface
              currentUser={{
                name: userName,
                role: userRole,
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
