import Link from "next/link";
import {Grid, GridItem, Stack, InputGroup, InputLeftElement, PhoneIcon, Input, InputRightElement, CheckIcon, Radio, chakra} from "@chakra-ui/react";
import {Tabs, TabList, Tab, TabPanels, TabPanel, RadioGroup} from "@chakra-ui/react";
import {SimpleGrid, Box, Button, Badge, IconButton} from "@chakra-ui/react";
import { Icon, CopyIcon, DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import {Stat, StatLabel, StatNumber, StatHelpText, Tooltip} from "@chakra-ui/react"

export default function create() {
  return (
    <div>
      <div className="navbar bg-base-100 bg-white">
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div className="flex-1">
  <Link href="/../">
    <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
    </Link>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

      <div className="my-2 flex justify-center">
        <ul className="steps">
          <li className="step step-primary">퀴즈 설정 &nbsp; &nbsp; &nbsp; &nbsp;</li>
          <li className="step step-primary">문제 설정</li>
          <li li className="step">
          배포하기
          </li>
        </ul>
      </div>
      <Grid className="mx-10"templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='100' bg='gray.100' />
  <GridItem w='100%' h='100' bg='gray.100' />
  <GridItem w='100%' h='100' bg='gray.100' />
  <GridItem w='100%' h='100' bg='gray.100' />
  <GridItem w='100%' h='100' bg='gray.100' />
</Grid>
<br></br>
<div className="mx-10">
<Tooltip label="복사하기" arial-label="A tooltip" placement="top">
<IconButton aria-label='Search database' icon={<CopyIcon />} />
</Tooltip>
    &nbsp;
    <Tooltip label="가져오기" arial-label="A tooltip" placement="top">
    <IconButton aria-label='Search database' icon={<ExternalLinkIcon />} />
    </Tooltip>
    &nbsp;
    <Tooltip label="삭제하기" arial-label="A tooltip" placement="top">
    <IconButton aria-label='Search database' icon={<DeleteIcon />} />
    </Tooltip>
    </div>

<div className="mx-10 my-5">
<Tabs variant='enclosed'>
  <TabList>
    <Tab>객관식</Tab>
    <Tab>O/X</Tab>
    <Tab>넌센스</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <p className="text-2xl">미리보기</p>
    <br></br>
    <Input placeholder='문제 내용을 입력하세요.' />
    <br></br>
    <br></br>
    <RadioGroup defaultValue='1'>
  <Stack spacing={5} direction='row'>
    <Radio size='lg' colorScheme='red' value='1' />
    <Radio size='lg' colorScheme='orange' value='1' />
    <Radio size='lg' colorScheme='yellow' value='1' />
    <Radio size='lg' colorScheme='green' value='1' />
    <Radio size='lg' colorScheme='blue' value='1' />
    <Radio size='lg' colorScheme='purple' value='1' />
    <Radio size='lg' colorScheme='black' value='1' />
  </Stack>
</RadioGroup>
<br></br>
<RadioGroup defaultValue='2'>
    <SimpleGrid columns={2} spacing={5}>

  <Box bg='Crimson' height='80px' className="text-center my-auto rounded-lg">
    <div className="my-2 mx-5">
  <Radio colorScheme='blue' value='1' />
    <Input variant='filled' placeholder='선지 1' />
  </div>
  </Box>
  <Box bg='DodgerBlue' height='80px' className="text-center my-auto rounded-lg">
  <div className="my-2 mx-5">
  <Radio colorScheme='blue' value='3' />
    <Input variant='filled' placeholder='선지 2' />
  </div>
  </Box>
  <Box bg='LimeGreen' height='80px' className="text-center my-auto rounded-lg">
  <div className="my-2 mx-5">
  <Radio colorScheme='blue' value='4' />
    <Input variant='filled' placeholder='선지 3' />
  </div>
  </Box>
  <Box bg='Gold' height='80px' className="text-center my-auto rounded-lg">
  <div className="my-2 mx-5">
  <Radio colorScheme='blue' value='5' />
    <Input variant='filled' placeholder='선지 4' />
  </div>
  </Box>
</SimpleGrid>
</RadioGroup>
<br></br>
<hr></hr>
<br></br>
<Input placeholder='태그 추가하기' className="inline"/>
<Badge colorScheme='red' mx = {1}>객관식</Badge>
<Badge colorScheme='blue' mx = {1}>지구과학</Badge>
<Badge colorScheme='gray' mx = {1}>고등학교</Badge>

    </TabPanel>
    <TabPanel>
      <p>o/x</p>
    </TabPanel>
    <TabPanel>
      <p>넌센스</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    


    <div className="content-center items-center flex justify-center">
      <div><Button colorScheme='blue'>계속하기</Button> &nbsp; <Button colorScheme='green'>완성하기</Button>
      </div>
    </div>
    <br></br>
</div>
    
    </div>
  );
}
