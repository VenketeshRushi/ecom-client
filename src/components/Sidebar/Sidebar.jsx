import { Box, useColorModeValue, useToast } from "@chakra-ui/react";
import axios from "axios";
import Actions from "./Actions";
import Data from "./Data";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { setToast } from "../../utils/extraFunctions";
import { useState } from "react";

function Sidebar() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const toast = useToast();

  const onProfilePicSubmit = async () => {
    const formData = new FormData();
    formData.append("imgCollection", selectedProfile);

    try {
      const response = await axios.post("user/adduserimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setToast(toast, "Profile Piture Upload Succsfully.", "success");
    } catch (error) {
      console.log(error);
      setToast(toast, "Something Went Wrong!", "error");
    }
  };
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: "translateY(-100px)" }}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Profile
        selectedProfile={selectedProfile}
        setSelectedProfile={setSelectedProfile}
      />
      <Data />
      <Actions onProfilePicSubmit={onProfilePicSubmit} />
    </Box>
  );
}

export default Sidebar;
