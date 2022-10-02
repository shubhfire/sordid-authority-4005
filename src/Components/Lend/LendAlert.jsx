import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LendButton from "./LendButton";

const LendAlert = ({ name, loanAmount, count, wide }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      {name === "Lend" ? (
        <div className="lendBtn">
          <Button onClick={onOpen}>{name}</Button>{" "}
        </div>
      ) : (
        <LendButton name={name} wide={wide} id={"lendBtnDisabled"} />
      )}

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <div className="alertLend">
            <AlertDialogCloseButton />
            <AlertDialogBody>
              {count} loans added to your basket
            </AlertDialogBody>
            <AlertDialogBody>Total: Rs {loanAmount}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                View Basket
              </Button>
              <div className="lendBtn">
                <Button colorScheme="red" ml={3}
                >
                  Pay Now
                </Button>
              </div>
            </AlertDialogFooter>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LendAlert;
