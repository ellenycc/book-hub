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
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        backgroundColor="teal.500"
        color="white"
        _hover={{ bg: "blue.700" }}
        _dark={{
          bg: "teal.400",
          color: "white",
          _hover: { bg: "blue.500" },
        }}
        borderRadius={20}
        paddingX={6}
        paddingY={4}
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList
        bg="white"
        _dark={{ bg: "gray.700", borderColor: "gray.600" }}
        borderColor="gray.300"
        borderRadius="md"
        shadow="md"
      >
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              setSortOrder(order.value);
            }}
            key={order.value}
            value={order.value}
            _hover={{ bg: "gray.100" }}
            _dark={{
              bg: "gray.600",
              color: "white",
              _hover: { bg: "gray.500" },
            }}
            paddingX={4}
            paddingY={2}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
