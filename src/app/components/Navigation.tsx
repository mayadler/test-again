import { NavBar, NavItem } from "@/components/ui/navigation";

export const Navigation = () => {
  return (
    <NavBar>
      <div>My App</div>
      <div className="flex gap-4">
        <NavItem>Home</NavItem>
        <NavItem>Players</NavItem>
      </div>
    </NavBar>
  );
};
