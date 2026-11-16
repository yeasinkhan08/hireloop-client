import { useSession } from "@/lib/auth-client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@workspace/ui/components/sidebar"
import { role } from "better-auth/plugins";
import { Session } from "inspector";

import { Plus } from "lucide-react"

const menuItemsByRole = {
  seeker: [],
  recruiter: [],
  admin: [],
}
export function DashboardSidebar() {
const {data: session, isPending}= useSession();
const role=session?.user?.role? || 'seeker'
 

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-xl font-bold">Dashboard</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItemsByRole[role].map((project) => (
              <SidebarMenuItem key={project.name}>
                <SidebarMenuButton render={<a href={project.url} />}>
                  <project.icon />
                  <span>{project.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>{/* Footer content */}</SidebarFooter>
    </Sidebar>
  )
}
