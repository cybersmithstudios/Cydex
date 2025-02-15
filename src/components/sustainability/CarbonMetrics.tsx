import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Recycle, Trophy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CarbonMetricsProps {
  co2Saved?: number;
  bottlesRecycled?: number;
  rewardsEarned?: number;
}

const CarbonMetrics = ({
  co2Saved = 125.5,
  bottlesRecycled = 45,
  rewardsEarned = 3,
}: CarbonMetricsProps) => {
  const bottleProgress = (bottlesRecycled % 10) * 10; // Progress towards next reward (10 bottles)

  return (
    <Card className="p-6 bg-white w-full max-w-[300px] space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Sustainability Impact
      </h2>

      <TooltipProvider>
        <div className="flex items-center gap-4">
          <Tooltip>
            <TooltipTrigger>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                <span className="text-lg font-medium">{co2Saved}kg</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>CO2 emissions saved</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-blue-600" />
              <span>Bottles Recycled</span>
            </div>
            <span className="font-medium">{bottlesRecycled}</span>
          </div>
          <Progress value={bottleProgress} className="h-2" />
          <p className="text-sm text-gray-600">
            {10 - (bottlesRecycled % 10)} more bottles until next reward
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span>Rewards Earned</span>
          </div>
          <span className="font-medium">{rewardsEarned}</span>
        </div>
      </TooltipProvider>
    </Card>
  );
};

export default CarbonMetrics;
