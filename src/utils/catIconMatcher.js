import { accountDefaultCategories } from "../db";
import {
  GroceriesIcon,
  ServicesIcon,
  TransportationIcon,
  UtilitiesIcon,
  HealthIcon,
  EntertainmentIcon,
  ShoppingIcon,
  IncomeIcon,
  DefaultCategoryIcon,
} from "./icons";

const getCategoryIcon = (category) => {
  switch (category) {
    case accountDefaultCategories[0].name:
      return GroceriesIcon;
    case accountDefaultCategories[1].name:
      return ServicesIcon;
    case accountDefaultCategories[2].name:
      return UtilitiesIcon;
    case accountDefaultCategories[3].name:
      return TransportationIcon;
    case accountDefaultCategories[4].name:
      return HealthIcon;
    case accountDefaultCategories[5].name:
      return EntertainmentIcon;
    case accountDefaultCategories[6].name:
      return ShoppingIcon;
    case accountDefaultCategories[7].name:
      return IncomeIcon;
    default:
      return DefaultCategoryIcon;
  }
};

export default getCategoryIcon;
