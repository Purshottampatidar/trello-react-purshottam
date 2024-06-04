import React from "react";
import applog from "..//assets/apps_20dp_FILL0_wght400_GRAD0_opsz20.png";
import { Box, Flex, Image, UnorderedList, ListItem } from "@chakra-ui/react";
const Header = () => {
  return (
    <>
      <Box bg="gray.200" h={"10vh"}>
        <Flex alignItems="center" justifyContent="space-between" p={5} gap={3}>
          <Flex gap={7} alignItems="center">
            <Flex gap={1} alignItems="center">
              <Image src={applog} alt="apps-logo" w="6" h="6" />
              <Image
                bg={"blue.600"}
                src="https://trello.com/assets/87e1af770a49ce8e84e3.gif"
                w="15"
                h="5"
              />
            </Flex>
            <Flex display={{ base: "none", md: "flex" }} gap={5}>
              <UnorderedList display="flex" gap={5} listStyleType={"none"}>
                <ListItem>
                  Workspaces <i className="fa-solid fa-caret-down"></i>
                </ListItem>
                <ListItem>
                  Recent <i className="fa-solid fa-caret-down"></i>
                </ListItem>
                <ListItem>
                  Starred <i className="fa-solid fa-caret-down"></i>
                </ListItem>
                <ListItem>
                  Templates <i className="fa-solid fa-caret-down"></i>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
