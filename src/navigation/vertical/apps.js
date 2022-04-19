/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** Icons Import
import {
  Mail,
  MessageSquare,
  CheckSquare,
  Calendar,
  FileText,
  Circle,
  ShoppingCart,
  User,
  Shield,
} from "react-feather";

export default [
  {
    id: "email",
    title: "Email",
    icon: <Mail size={20} />,
    navLink: "/apps/email",
    children: null,
  },
  {
    id: "dataCustomer",
    title: "Data Customer",
    icon: <User size={20} />,
    navLink: "/apps/data-grid",
  },
];
