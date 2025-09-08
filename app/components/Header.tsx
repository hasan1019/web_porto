import StaggeredMenu from "@/lib/ui/StaggeredMenu/StaggeredMenu";
import React from "react";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Porto", ariaLabel: "Learn about us", link: "/portofolio" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/hasan1019" },
  { label: "LinkedIn", link: "https://linkedin.com/in/hasanfarikhi/" },
];

export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#000"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#197CAE"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
      />
    </div>
  );
}
