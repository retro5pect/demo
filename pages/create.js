import Link from "next/link";
import {Grid, GridItem, Stack, InputGroup, InputLeftElement, PhoneIcon, Input, InputRightElement, CheckIcon, Radio, chakra} from "@chakra-ui/react";
import {Tabs, TabList, Tab, TabPanels, TabPanel, RadioGroup, CopyIcon, DeleteIcon} from "@chakra-ui/react";

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
    <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>

      <div className="my-2 flex justify-center">
        <ul className="steps">
          <li className="step step-primary">1. 퀴즈 설정</li>
          <li className="step step-primary">2. 문제 설정</li>
          <li li className="step">
            3. 완료!
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

<div className="mx-10 my-5">
<Tabs variant='enclosed'>
  <TabList>
    <Tab>객관식</Tab>
    <Tab>주관식</Tab>
    <Tab>O/X</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>

    <Input placeholder='퀴즈 제목을 입력하세요.' />
<br></br><br></br>
<Input placeholder='퀴즈 내용을 입력하세요.' />
<br></br>
<br></br>
<RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    <Radio colorScheme='blue' value='1'>
    <Input placeholder='선지 1' />
    </Radio>
    <Radio colorScheme='blue' value='3'>
    <Input placeholder='선지 2' />
    </Radio>
    <Radio colorScheme='blue' value='4'>
    <Input placeholder='선지 3' />
    </Radio>
    <Radio colorScheme='blue' value='5'>
    <Input placeholder='선지 4' />
    </Radio>
  </Stack>
</RadioGroup>

    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

</div>

    </div>
  );
}
