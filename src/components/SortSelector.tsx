import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

// user select the order, do we need to set the state for the order?

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "newest", label: "Newest" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(order.value);
              console.log(order.value);
            }}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
