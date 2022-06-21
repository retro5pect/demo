import { info } from "daisyui/src/colors";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Progress, Badge, Stat, StatGroup, StatLabel, StatNumber, StatHelpText, StatArrow, CircularProgress, useAccordionItemState} from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select, SimpleGrid } from '@chakra-ui/react'

export default function create() {
  return (
    <div className="mx-10">

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
<Tabs variant='enclosed'>
  <TabList>
    <Tab>학생별 레포트</Tab>
    <Tab>퀴즈별 레포트</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <p className="text-2xl font-bold">학급 관리</p>
    
    <Select placeholder='학급반을 선택하세요'>
      <option value='option1'>3학년 1반</option>
      <option value='option2'>3학년 2반</option>
      <option value='option3'>3학년 3반</option>
    </Select>
    <br></br>

    <span>
    <CircularProgress value={30} size='120px' valueText={"S"} />
      <span className="text-3xl"> 3학년 2반 진도율</span>
      </span>
      <span>
      </span>

    <br></br>
    <br></br>
    <hr></hr>
    <br></br>
    <p className="text-2xl font-bold">학생 관리</p>
      <div>
<Badge colorScheme='purple' mx = {1}>강석진</Badge>
<Badge colorScheme='red' mx = {1}>고동환</Badge>
<Badge colorScheme='orange' mx = {1}>김민겸</Badge>
<Badge colorScheme='blue' mx = {1}>김세진</Badge>
<Badge colorScheme='blue' mx = {1}>김병환</Badge>
<Badge colorScheme='purple' mx = {1}>박정석</Badge>
<Badge colorScheme='green' mx = {1}>박태현</Badge>
<Badge colorScheme='orange' mx = {1}>오진석</Badge>
<Badge colorScheme='yellow' mx = {1}>오병우</Badge>
<Badge colorScheme='gray' mx = {1}>이민식</Badge>
<Badge colorScheme='red' mx = {1}>이상빈</Badge>
<Badge colorScheme='blue' mx = {1}>이성준</Badge>
<Badge colorScheme='red' mx = {1}>이정혁</Badge>
<Badge colorScheme='gray' mx = {1}>이태민</Badge>
<Badge colorScheme='green' mx = {1}>임동빈</Badge>
<Badge colorScheme='green' mx = {1}>임준현</Badge>
<Badge colorScheme='yellow' mx = {1}>정상수</Badge>
<Badge colorScheme='red' mx = {1}>정지환</Badge>
<Badge colorScheme='purple' mx = {1}>지정석</Badge>
</div>
<div className="my-30 mx-30"> 
  <br></br>
  <span className="text-3xl"> 🥇 김민겸</span>
  <Badge colorScheme='green' mx = {1}>명랑한 소크라테스</Badge>
  <Badge colorScheme='purple' mx = {1}>민겸공듀</Badge>
  <Badge colorScheme='red' mx = {1}>뮤묘뮤</Badge>
  <Progress colorScheme='yellow' height='32px' value={20} />

<StatGroup>
  <Stat>
    <StatLabel colorScheme='yellow'>정답률</StatLabel>
    <StatNumber>96.2%</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>풀이 속도</StatLabel>
    <StatNumber>보통</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>

<br></br>
<p className="text-2xl font-bold">최근에 푼 문제</p>
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          1단원. 우리나라의 다양한 하천 <Badge colorScheme='blue' mx = {1}>지구과학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30">

<StatGroup>
  <Stat>
    <StatLabel>정답률</StatLabel>
    <StatNumber>96.2%</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      다른 반 대비 23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>풀이 속도</StatLabel>
    <StatNumber>보통</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      다른 반 대비 9.05%
    </StatHelpText>
  </Stat>
  </StatGroup>

  <br></br>
  <p> exquiz.me에서 분석한 취약 문제입니다.</p>
  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          문제 30
  <Badge colorScheme='red' mx = {1}>많이 틀린</Badge>
  <Badge colorScheme='purple' mx = {1}>실수하기 쉬운</Badge>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30">
  <br></br>

    <p className="text-2xl">우리나라에서 가장 높은 산은 뭘까요?</p>
    <SimpleGrid columns={2} spacing={5}>
  <Box bg='Tomato' height='80px' className="text-center my-auto">
  <span className="text-1xl"> 1. 설악산 </span>
  <Stat>
    <StatLabel></StatLabel>
    <StatNumber>10%</StatNumber>
    <StatHelpText>
    </StatHelpText>
  </Stat>
  </Box>
  <Box bg='DodgerBlue' height='80px' className="text-center my-auto">
  <span className="text-1xl"> 2. 지리산 </span>
  <Stat>
    <StatLabel></StatLabel>
    <StatNumber>15%</StatNumber>
    <StatHelpText>
    </StatHelpText>
  </Stat>
  </Box>
  <Box bg='Gold' height='80px' className="text-center my-auto">
  <span className="text-1xl"> 3. 한라산 </span>
  <Stat>
    <StatLabel></StatLabel>
    <StatNumber>65%</StatNumber>
    <StatHelpText>
    </StatHelpText>
  </Stat>
  </Box>
  <Box bg='LimeGreen' height='80px' className="text-center my-auto">
  <span className="text-1xl"> 4. 북한산 </span>
  <Stat>
    <StatLabel></StatLabel>
    <StatNumber>10%</StatNumber>
    <StatHelpText>
    </StatHelpText>
  </Stat>
  </Box>
</SimpleGrid>
    <br></br>
    <hr></hr>
  </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          문제 21&nbsp;
          <Badge colorScheme='red' mx = {1}>많이 틀린</Badge>
  <Badge colorScheme='green' mx = {1}>오래 걸리는</Badge>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30">
  <br></br> 


  <br></br>
  <hr></hr>
  </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          문제 19&nbsp;
          <Badge colorScheme='blue' mx = {1}>헷갈리는</Badge>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30"> 


  </div>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
    <br></br>
    <hr></hr>
  </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          2단원. 일반 상대성 이론
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30">
  <br></br> 
  <span className="text-2xl"> 2단원. 일반 상대성 이론 </span>
  <Badge colorScheme='blue' mx = {1}>물리학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>

<StatGroup>
  <Stat>
    <StatLabel>정답률</StatLabel>
    <StatNumber>96.2%</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>풀이 속도</StatLabel>
    <StatNumber>보통</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
  </StatGroup>
  <br></br>
  <hr></hr>
  </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          3단원. 시스템 아키텍처(x64)
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30"> 
  <span className="text-2xl"> 3단원. 시스템 아키텍처(x64) </span>
  <Badge colorScheme='blue' mx = {1}>컴퓨터공학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>

<StatGroup>
  <Stat>
    <StatLabel>정답률</StatLabel>
    <StatNumber>96.2%</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>풀이 속도</StatLabel>
    <StatNumber>보통</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
  </StatGroup>
  </div>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
<br />
<hr></hr>
</div>
    </TabPanel>
    <TabPanel>
      
    </TabPanel>
  </TabPanels>
</Tabs>


    </div>
  );
}
