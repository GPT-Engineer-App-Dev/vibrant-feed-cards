import { Box, Flex, Text, Image, Button, VStack, HStack, Badge } from '@chakra-ui/react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const activities = [
  {
    username: "User1",
    timestamp: "2023-09-15T12:34:56",
    description: "Reserved a new pack!",
    imageUrl: "/images/product1.jpg",
    price: "$19.99"
  },
  {
    username: "User2",
    timestamp: "2023-09-15T13:00:00",
    description: "Achieved new rank: Gold!",
    imageUrl: "/images/leaderboard.jpg",
    price: ""
  },
  {
    username: "User3",
    timestamp: "2023-09-15T14:45:22",
    description: "Bought a promotional pack",
    imageUrl: "/images/promo-pack.jpg",
    price: "$29.99"
  }
];

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh" p={5}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" color="white">Live Activity Feed</Text>
        <HStack spacing={4}>
          <Badge colorScheme="green" p="2" borderRadius="lg">Reserved Packs: 34</Badge>
          <Button colorScheme="teal" variant="solid">Refresh</Button>
        </HStack>
        <Flex direction="column" overflowY="scroll" p={3} bg="gray.700" borderRadius="md" boxShadow="xl">
          {activities.map((activity, index) => (
            <Box key={index} p={4} bg="gray.800" borderRadius="lg" boxShadow="2xl" mb={4}>
              <HStack justifyContent="space-between">
                <VStack align="start">
                  <Text color="white" fontWeight="bold">{activity.username}</Text>
                  <Text color="gray.400">{new Date(activity.timestamp).toLocaleString()}</Text>
                  <Text color="white">{activity.description}</Text>
                </VStack>
                <Image borderRadius="md" boxSize="100px" src={activity.imageUrl} alt="Activity Image" />
              </HStack>
              {activity.price && <Text color="yellow.400" fontSize="lg" fontWeight="bold">{activity.price}</Text>}
              <Button mt={2} leftIcon={<FaCheckCircle />} colorScheme="blue">Check it out!</Button>
              <Button mt={2} leftIcon={<FaTimesCircle />} colorScheme="red">Reserve Now!</Button>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;