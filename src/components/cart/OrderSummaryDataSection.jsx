import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { numberWithCommas } from "../../utils/extraFunctions";


export const OrderSummaryDataSection = ({ subTotal, discount, quantity, total, shipping }) => {
    return (
        <>
            <Text fontSize={'20px'} fontWeight={600}>Summary</Text>

            <Box my={'20px'} fontSize={'18px'}>
                <Flex justifyContent={'space-between'}>
                    <Text>Subtotal</Text>
                    <Text>USD {numberWithCommas(subTotal)}.00</Text>
                </Flex>

                <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text>Quantity</Text>
                    <Text>{quantity}</Text>
                </Flex>

                <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text >Estimated Delivery</Text>
                    <Text
                        title={'Free delivery applies to orders of USD 14,000 or more'}
                        cursor={'pointer'}
                    >
                        USD {numberWithCommas(shipping)}.00
                    </Text>
                </Flex>

                <Flex mt={'5px'} justifyContent={'space-between'}>
                    <Text>Discount</Text>
                    <Text>USD {numberWithCommas(discount)}.00</Text>
                </Flex>
            </Box>

            <Divider />

            <Flex fontSize={'18px'} justifyContent={'space-between'} my={'20px'}>
                <Text>Total</Text>
                <Text fontWeight={500} >USD {numberWithCommas(total)}.00</Text>
            </Flex>

            <Divider mb={'20px'} />
        </>
    );
};