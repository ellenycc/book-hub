import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useBookQueryStore from "../stores/BookQueryStore";

const SortSelector = () => {
  const setSortOrder = useBookQueryStore((s) => s.setSortOrder);
  const sortOrder = useBookQueryStore((s) => s.bookQuery.sortOrder);
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
              setSortOrder(order.value);
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
