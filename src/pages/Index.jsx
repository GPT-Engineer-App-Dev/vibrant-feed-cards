import { Box, Flex, Text, Button, Image, Badge } from '@chakra-ui/react';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const activities = [
  {
    username: "User1",
    timestamp: "2023-09-15T12:34:56Z",
    description: "Reserved a new pack!",
    imageUrl: "/images/product1.jpg",
    price: "$19.99"
  },
  {
    username: "User2",
    timestamp: "2023-09-15T13:45:12Z",
    description: "Achieved new high score!",
    imageUrl: "/images/product2.jpg",
    price: "$29.99"
  }
];

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" p={5}>
      <Flex direction="column" align="center" maxW="1200px" m="auto">
        <Text fontSize="2xl" color="white" fontWeight="bold" mb={4}>Live Activity Feed</Text>
        {activities.map((activity, index) => (
          <Box key={index} bg="gray.700" p={5} rounded="md" shadow="lg" mb={4} w="full">
            <Flex align="center" mb={3}>
              <Badge colorScheme="green" p={1} mr={2}><FaCheckCircle /></Badge>
              <Text color="white" fontWeight="bold">{activity.username}</Text>
              <Box flex="1" textAlign="right">
                <FaClock />
                <Text as="span" ml={2} color="gray.400">{new Date(activity.timestamp).toLocaleString()}</Text>
              </Box>
            </Flex>
            <Text color="white" fontSize="lg">{activity.description}</Text>
            <Image src={activity.imageUrl} alt="Activity Image" rounded="md" mt={3} mb={3} />
            <Text color="yellow.400" fontWeight="bold">{activity.price}</Text>
            <Flex mt={3}>
              <Button colorScheme="blue" mr={3}>Check it out!</Button>
              <Button colorScheme="red">Reserve Now!</Button>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Index;