import StatusCard from "../components/StatusCard";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>
        Overview of your business tax and compliance activities.
      </p>

      <StatusCard
        title="Tax Status"
        message="No tax information available yet."
      />

      <StatusCard
        title="Upcoming Compliance"
        message="No compliance tasks available yet."
      />

      <StatusCard
        title="Planning Opportunities"
        message="No planning analysis available yet."
      />
    </div>
  );
}

export default Dashboard;