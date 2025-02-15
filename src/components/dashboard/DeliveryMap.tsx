import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  MapPin,
  Package,
  Navigation2,
  Bike,
  Car,
  PersonStanding,
} from "lucide-react";

interface DeliveryMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  deliveries?: Array<{
    id: string;
    location: { lat: number; lng: number };
    status: "pending" | "in-progress" | "completed";
    type: "bike" | "walk" | "ev";
    address: string;
  }>;
  onDeliverySelect?: (id: string) => void;
}

const DeliveryMap = ({
  center = { lat: 40.7128, lng: -74.006 },
  zoom = 12,
  deliveries = [
    {
      id: "1",
      location: { lat: 40.7128, lng: -74.006 },
      status: "pending",
      type: "bike",
      address: "123 Main St, New York, NY",
    },
    {
      id: "2",
      location: { lat: 40.7228, lng: -73.996 },
      status: "in-progress",
      type: "walk",
      address: "456 Park Ave, New York, NY",
    },
    {
      id: "3",
      location: { lat: 40.7328, lng: -74.016 },
      status: "completed",
      type: "ev",
      address: "789 Broadway, New York, NY",
    },
  ],
  onDeliverySelect = () => {},
}: DeliveryMapProps) => {
  const [selectedDelivery, setSelectedDelivery] = useState<string | null>(null);

  const getDeliveryIcon = (type: string) => {
    switch (type) {
      case "bike":
        return <Bike className="h-5 w-5" />;
      case "walk":
        return <PersonStanding className="h-5 w-5" />;
      case "ev":
        return <Car className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "in-progress":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="w-full h-[600px] bg-white p-4 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Delivery Map</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Navigation2 className="h-4 w-4 mr-2" />
            Center Map
          </Button>
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            My Location
          </Button>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="w-full h-[450px] bg-slate-100 rounded-lg relative mb-4">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          Map View (Google Maps Integration)
        </div>

        {/* Delivery markers */}
        {deliveries.map((delivery) => (
          <TooltipProvider key={delivery.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={`absolute ${getStatusColor(delivery.status)} text-white
                    ${delivery.id === "1" ? "top-1/4 left-1/4" : ""}
                    ${delivery.id === "2" ? "top-1/2 left-1/2" : ""}
                    ${delivery.id === "3" ? "bottom-1/4 right-1/4" : ""}
                  `}
                  onClick={() => {
                    setSelectedDelivery(delivery.id);
                    onDeliverySelect(delivery.id);
                  }}
                >
                  {getDeliveryIcon(delivery.type)}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{delivery.address}</p>
                <p>Status: {delivery.status}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center">
        <Badge variant="outline" className="flex items-center gap-2">
          <Bike className="h-4 w-4" /> Bicycle
        </Badge>
        <Badge variant="outline" className="flex items-center gap-2">
          <PersonStanding className="h-4 w-4" /> Walker
        </Badge>
        <Badge variant="outline" className="flex items-center gap-2">
          <Car className="h-4 w-4" /> Electric Vehicle
        </Badge>
      </div>
    </Card>
  );
};

export default DeliveryMap;
