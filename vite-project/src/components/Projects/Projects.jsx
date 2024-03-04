import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

export default function Projects({ title, sub, desc }) {
  return (
    <Card m={10}>
      <CardBody>
        <Heading size="lg" textTransform="uppercase">
          {title}
        </Heading>
        <Text pt="2" fontSize="sm">
          {sub}.
        </Text>
        <Text pt="2" fontSize="md">
          {desc}
        </Text>
      </CardBody>
    </Card>
  );
}
