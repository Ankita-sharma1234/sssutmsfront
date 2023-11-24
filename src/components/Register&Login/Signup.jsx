import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const [name, setName] = useState("");
  const [fathersname, setFathersname] = useState("");
  const [mothersname, setMothersname] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [emailRegisteredMessage, setEmailRegisteredMessage] = useState("");
  const otpInputRef = useRef(null);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;

  const sendEmail = async (e) => {
    e.preventDefault();
    setVerificationMessage("");

    if (
      !name ||
      !email ||
      !dob ||
      !fathersname ||
      !mothersname ||
      !mobile ||
      (!otpSent && !email) ||
      !emailRegex.test(email)
    ) {
      setVerificationMessage(
        <span style={{ color: "red" }}>
          All required fields must be filled in, or email must be in a valid
          format.
        </span>
      );

      return;
    }
    if (!otpSent) {
      const res = await fetch("http://localhost:7786/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setShow(true);
        setOtpSent(true);
        setVerificationMessage("");
        // otpInputRef.current.focus();
      } else if (data.status === 401) {
        console.log(setEmailRegisteredMessage, "dhgqdgqgdu");
      }
    } else {
      const res = await fetch("http://localhost:7786/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp,
        }),
      });

      const data = await res.json();
      console.log("verify", data);
      if (data.status === 200) {
        console.log("chal gaya ");
        setIsOtpVerified(true);
        setVerificationMessage("Registered successfully");
        const registerRes = await fetch("http://localhost:7786/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            dob,
            fathersname,
            mothersname,
            mobile,
          }),
        });
        const registerData = await registerRes.json();

        if (registerData.status === 200) {
          setVerificationMessage("User registered successfully");
          navigate("/studentlogin");
        }
      } else if (data.status === 401) {
        setVerificationMessage("Invalid OTP");
      } else {
        console.log("Error:", data.message);
      }
    }
  };
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [show]);

  return (
    <>
      {show ? (
        <Alert status="success">
          <AlertIcon />
          {otpSent ? "OTP Sent Successfully" : "This Email"}
        </Alert>
      ) : null}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={["100%", "100%", "80%"]}
          maxW={"2xl"}
          py={2}
          px={[4, 6]}
        >
          <Stack align={"center"}>
            <Heading fontSize={["2xl", "4xl"]} textAlign={"center"}>
              {" "}
              STUDENT SIGN UP
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                    transition: "box-shadow 0.3s",
                  }}
                />
              </FormControl>
              <FormControl id="fathersname" isRequired>
                <FormLabel>Fathers Name</FormLabel>
                <Input
                  type="text"
                  name="fathersname"
                  value={fathersname}
                  autoComplete="off"
                  onChange={(e) => setFathersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mothersname" isRequired>
                <FormLabel>Mothers Name</FormLabel>
                <Input
                  type="text"
                  name="mothersname"
                  value={mothersname}
                  autoComplete="off"
                  onChange={(e) => setMothersname(e.target.value)}
                />
              </FormControl>
              <FormControl id="mobile" isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input
                  type="number"
                  name="mobile"
                  value={mobile}
                  autoComplete="off"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>

              <FormControl id="dob" isRequired>
                <FormLabel>DOB</FormLabel>
                <Input
                  type="Date"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  autoComplete="off"
                />
              </FormControl>

              {otpSent && (
                <FormControl id="otp" isRequired>
                  <FormLabel>Enter OTP</FormLabel>
                  <Input
                    type="number"
                    name="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    ref={otpInputRef}
                  />
                </FormControl>
              )}
              <Button colorScheme="blue" type="submit" onClick={sendEmail}>
                {otpSent ? "Verify OTP" : "Send OTP"}
              </Button>
              {verificationMessage && (
                <div className="mt-2">
                  <Alert
                    variant={
                      verificationMessage === "Invalid OTP"
                        ? "danger"
                        : "success"
                    }
                  >
                    {verificationMessage}
                  </Alert>
                </div>
              )}
              {emailRegisteredMessage && (
                <div className="mt-2">
                  <Alert variant="danger">{emailRegisteredMessage}</Alert>
                </div>
              )}
              <p>
                Already have an account? <Link to="/studentlogin"> SignIn</Link>
              </p>
              {/* <FormControl id="OTP" isRequired>
                <FormLabel>OTP</FormLabel>
                <Input type="number" />
              </FormControl> */}

              {/*
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sent Otp
                </Button>
              </Stack> */}
              {/* <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
