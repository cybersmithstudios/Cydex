import React from "react";
import Header from "../navigation/Header";
import DeliveryMap from "../dashboard/DeliveryMap";
import OrdersList from "../orders/OrdersList";
import CarbonMetrics from "../sustainability/CarbonMetrics";
import ChatInterface from "../chat/ChatInterface";

interface CustomerDashboardProps {
  userName?: string;
  walletBalance?: number;
}

const CustomerDashboard = ({
  userName = "John Doe",
  walletBalance = 100.0,
}: CustomerDashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        userRole="customer"
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
              <OrdersList userRole="customer" />
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
                role: "customer",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CustomerDashboard;
