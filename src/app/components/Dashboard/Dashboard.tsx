import React from "react";
import { Global } from "../../../types";

interface DashboardProps {
  global: Global;
  displaySearch: () => void;
}

const Dashboard: React.FC<DashboardProps> = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;
