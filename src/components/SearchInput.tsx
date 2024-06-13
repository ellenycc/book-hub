import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search books..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
