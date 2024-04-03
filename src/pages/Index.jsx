import { Box, Flex, Heading, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Divider, Image, SimpleGrid } from "@chakra-ui/react";
import { FaChartLine, FaChartPie, FaChartBar, FaUsers, FaDollarSign, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" mb={8}>
        Business Dashboard
      </Heading>

      <SimpleGrid columns={[1, null, 3]} spacing={8} mb={12}>
        <Stat>
          <StatLabel>Total Sales</StatLabel>
          <StatNumber>$345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Revenue</StatLabel>
          <StatNumber>$45,670</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Customers</StatLabel>
          <StatNumber>1,340</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            11.36%
          </StatHelpText>
        </Stat>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, 2]} spacing={8} mb={12}>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaChartLine size={24} color="teal.500" />
            <Heading as="h2" size="lg" ml={2}>
              Sales Trend
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwaW5jcmVhc2luZyUyMHNhbGVzfGVufDB8fHx8MTcxMjEzMTM2MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales trend" />
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaChartPie size={24} color="purple.500" />
            <Heading as="h2" size="lg" ml={2}>
              Revenue by Category
            </Heading>
          </Flex>
          <Image src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwaWUlMjBjaGFydCUyMHNob3dpbmclMjByZXZlbnVlJTIwYnJlYWtkb3duJTIwYnklMjBjYXRlZ29yeXxlbnwwfHx8fDE3MTIxMzEzNjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue by category" />
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, null, 3]} spacing={8}>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaUsers size={24} color="cyan.500" mr={2} />
            <Text fontWeight="bold">Total Customers</Text>
          </Flex>
          <Heading as="h3" size="3xl">
            1,340
          </Heading>
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaDollarSign size={24} color="green.500" mr={2} />
            <Text fontWeight="bold">Avg Order Value</Text>
          </Flex>
          <Heading as="h3" size="3xl">
            $257.52
          </Heading>
        </Box>
        <Box bg="white" borderRadius="lg" boxShadow="md" p={6}>
          <Flex align="center" mb={4}>
            <FaShoppingCart size={24} color="blue.500" mr={2} />
            <Text fontWeight="bold">Orders Processed</Text>
          </Flex>
          <Heading as="h3" size="3xl">
            1,620
          </Heading>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;
