import { FaUserCog, FaChartPie, FaNewspaper, FaBuilding } from "react-icons/fa";
import { MdMovie, MdFastfood, MdDashboard } from "react-icons/md";

export const menus = [
  { id: 1, title: "Dashpoard", link: "/", icon: <MdDashboard /> },
  { id: 2, title: "Movies", link: "/movies", icon: <MdMovie /> },
  { id: 3, title: "Users", link: "/users", icon: <FaUserCog /> },
  { id: 4, title: "News", link: "/news", icon: <FaNewspaper /> },
  { id: 5, title: "Foods", link: "/foods", icon: <MdFastfood /> },
  { id: 6, title: "Cinema", link: "/cinemas", icon: <FaBuilding /> },
  { id: 7, title: "Chart", link: "/chart", icon: <FaChartPie /> },
];
