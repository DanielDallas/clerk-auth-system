export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">Welcome to ClerkAuth</h2>
          <p className="text-gray-600">You are now authenticated with Clerk</p>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Dashboard",
};
