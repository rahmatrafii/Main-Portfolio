import { NavActiveType, activeLinkType } from "@/types";

export function useSetNavActive(
  scrollPosition: number,
  navActive: NavActiveType
): activeLinkType {
  if (scrollPosition >= 0 && scrollPosition < navActive.about) {
    return "Home";
  }
  if (scrollPosition > navActive.about && scrollPosition < navActive.skills) {
    return "About";
  }
  if (
    scrollPosition > navActive.skills &&
    scrollPosition < navActive.portfolio
  ) {
    return "Skills";
  }
  if (
    scrollPosition > navActive.portfolio &&
    scrollPosition < navActive.contact
  ) {
    return "Portfolio";
  }
  if (scrollPosition > navActive.contact) {
    return "Contact";
  }
  return "Home";
}
