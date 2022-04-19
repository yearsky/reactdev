/* eslint-disable comma-dangle */
/* eslint-disable semi */
// ** Vertical Menu Components
import VerticalNavMenuLink from "./VerticalNavMenuLink";
import VerticalNavMenuGroup from "./VerticalNavMenuGroup";
import VerticalNavMenuSectionHeader from "./VerticalNavMenuSectionHeader";

// ** Utils
import {
  canViewMenuItem,
  canViewMenuGroup,
  resolveVerticalNavMenuItemComponent as resolveNavItemComponent,
} from "@layouts/utils";

const VerticalMenuNavItems = (props) => {
  // ** Components Object
  const Components = {
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    VerticalNavMenuSectionHeader,
  };

  // console.log(props)

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)];
    // if (!item.children) {
    //   console.log("kosong");
    // } else {
    //   console.log("ada");
    // }
    if (item.children) {
      return (
        canViewMenuGroup(item) && (
          <TagName item={item} index={index} key={item.id} {...props} />
        )
      );
    }

    return (
      canViewMenuItem(item) && (
        <TagName key={item.id || item.header} item={item} {...props} />
      )
    );
  });

  return RenderNavItems;
};

export default VerticalMenuNavItems;
