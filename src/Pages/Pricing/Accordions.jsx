import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  OrderedList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
const Accordions = () => {
  return (
    <div>
      <h3>
        <Box fontSize={"2xl"} margin="40px">
          Related FAQs
        </Box>
      </h3>
      <Accordion maxWidth="30%" allowToggle marginLeft="20px" textAlign="left">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How much does Milaap charge?
              </Box>
              {/* <AccordionIcon /> */}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Milaap charges <bold> NO platform fees on donations.</bold>
            <br />
            We have a <bold> 0% platform fee</bold>. We rely on the generosity
            of our users to power the platform.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are payment gateway charges and why is it charged?
              </Box>
              {/* <AccordionIcon /> */}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <OrderedList>
              Whenever you purchase (eg book tickets) or make an online payment,
              it needs to be securely processed and verified by a third party
              payment processor. <br />
              <ListItem>
                These processors include Banks (for netbanking, IMPS, NEFT, RTGS
                transactions), Visa, Mastercard, AMEX, Rupay etc (for credit and
                debit card transactions), Paytm, UPI apps and other payment
                wallets who charge a small fee for this service (‘payment
                gateway charges’). These charges on crowdfunding websites are
                unavoidable.
              </ListItem>
              <ListItem>
                This is NOT Milaap fees. These fees go directly to the payment
                processor and help us keep Milaap a safe place to donate.
                Payment gateways charge their fees as a % of donation amount
                made. It varies based on the mode of payment and service
                provider.
              </ListItem>
              <br />
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>

            <UnorderedList>
              <ListItem>For donations made in Indian Rupees (INR)</ListItem>
              <ListItem>UPI apps - 0.75% to 2.45%</ListItem>
              <ListItem>Paytm - 1.92%</ListItem>
              <ListItem>Debit/Credit cards - 2.33%</ListItem>
              <ListItem>Netbanking - 2.51%</ListItem>
              <ListItem>Amazon Pay - 2.71%</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Is the free fundraising applicable for organizations and
                not-for-profits?
              </Box>
              {/* <AccordionIcon /> */}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, Milaap charges NO platform fees for individuals, NGOs and
            organizations alike. In fact, organizations with 80G tax-exempt
            status
            <br />
            also have the option to either issue tax-exemption receipts from
            Milaap's dashboard or issue it separately. Receipts to donors from{" "}
            <br />
            Milaap's dashboard can be issued, at a click of a button. This
            feature is FREE to use and entails NO FEES.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Does Milaap help in outreach of campaigns?
              </Box>
              {/* <AccordionIcon /> */}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Over 98% of Milaap’s fundraisers which have raised money do it for
            FREE using our best-in-class social fundraising technology and{" "}
            <br />
            round-the-clock assistance and support from our relationship
            managers.
            <br />
            <br />
            In certain scenarios, where the beneficiaries come from a
            disadvantaged backgrounds with no digital literacy, exhausted most
            of their
            <br />
            finances with no other sources available and require funds very
            urgently; Milaap may consider them on a case-by-case basis for
            <br />
            outreach on social media and digital promotion platforms after
            verification and a signed request letter from the beneficiary. This
            is
            <br />
            subject to availability of our team members, and situations where we
            believe promotions can achieve something significant for the
            <br />
            cause.
            <br />
            <br />
            Similar to payment gateway costs where it's paid to payment
            processor, outreach costs are paid towards social media and digital
            <br />
            promotion platforms. To ensure that donor money goes primarily to
            the intended purpose, we cap the outreach costs to not more than
            <br />
            15% of funds raised. Please note that Milaap doesn't earn / keep any
            additional fee or commission for itself from the costs incurred{" "}
            <br />
            through promotions.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordions;
