// import User from "./@users/page"
// import Revenue from "./@revenue/page"
// import Notifications from "./@notifications/page"

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login
}: {
  children: React.ReactNode
  users: React.ReactNode
  revenue: React.ReactNode
  notifications: React.ReactNode
  login: React.ReactNode
}) {
  const isLoggedin = true
  return isLoggedin ? (<>
        <div>{children}</div>
        <div> Revenue : {revenue}</div>
        <div> Users : {users}</div>
        <div> Notifications : {notifications}</div>
        </>
        
  ): login
}