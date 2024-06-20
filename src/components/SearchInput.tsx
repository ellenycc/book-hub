// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
// import { useRef } from "react";
// import { BsSearch } from "react-icons/bs";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
//   const ref = useRef<HTMLInputElement>(null);

//   return (
//     // A form element that wraps the input components
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//         if (ref.current) onSearch(ref.current.value); // calls onSearch with the current input value
//       }}
//     >
//       <InputGroup minWidth="50vw">
//         <InputLeftElement children={<BsSearch />} />
//         <Input
//           ref={ref}
//           borderRadius={20}
//           placeholder="Search books..."
//           variant="filled"
//         />
//       </InputGroup>
//     </form>
//   );
// };

// export default SearchInput;
