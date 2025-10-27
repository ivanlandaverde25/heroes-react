import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-purple-100">
        <Outlet />
    </div>
  )
}
