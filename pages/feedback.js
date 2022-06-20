import { info } from "daisyui/src/colors";
import Image from "next/image";
import { Progress, Badge, Stat, StatGroup, StatLabel, StatNumber, StatHelpText, StatArrow, CircularProgress} from '@chakra-ui/react'
import {Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Box} from '@chakra-ui/react'

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
    <a className="btn btn-ghost normal-case text-xl">exquiz.me</a>
  </div>
  <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</div>
<CircularProgress valueText={"S"} value={30} size='120px' /> <span className="text-3xl"> 3학년 2반 진도율 : F...</span>

<div>
<Badge colorScheme='purple' mx = {1}>1번</Badge>
<Badge colorScheme='red' mx = {1}>2번</Badge>
<Badge colorScheme='orange' mx = {1}>3번</Badge>
<Badge colorScheme='blue' mx = {1}>4번</Badge>
<Badge colorScheme='blue' mx = {1}>5번</Badge>
<Badge colorScheme='purple' mx = {1}>6번</Badge>
<Badge colorScheme='green' mx = {1}>7번</Badge>
<Badge colorScheme='orange' mx = {1}>8번</Badge>
<Badge colorScheme='yellow' mx = {1}>9번</Badge>
<Badge colorScheme='gray' mx = {1}>10번</Badge>
<Badge colorScheme='red' mx = {1}>11번</Badge>
<Badge colorScheme='blue' mx = {1}>12번</Badge>
<Badge colorScheme='red' mx = {1}>13번</Badge>
<Badge colorScheme='gray' mx = {1}>14번</Badge>
<Badge colorScheme='green' mx = {1}>15번</Badge>
<Badge colorScheme='green' mx = {1}>16번</Badge>
<Badge colorScheme='yellow' mx = {1}>17번</Badge>
<Badge colorScheme='red' mx = {1}>18번</Badge>
<Badge colorScheme='purple' mx = {1}>19번</Badge>
</div>

<div className="my-30 mx-30"> 
  <hr />
  <br></br>
  <span className="text-3xl"> 🥇 김민겸</span>
  <Badge colorScheme='green' mx = {1}>명랑한 소크라테스</Badge>
  <Badge colorScheme='purple' mx = {1}>민겸공듀</Badge>
  <Badge colorScheme='red' mx = {1}>뮤묘뮤</Badge>
  <Progress colorScheme='yellow' height='32px' value={20} />

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
<br />
<hr></hr>
</div>

<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          1단원. 우리나라의 다양한 하천
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div className="my-30 mx-30">
  <br></br>
  <span className="text-2xl"> 1단원. 우리나라의 다양한 하천 </span>
  <Badge colorScheme='blue' mx = {1}>지구과학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>
  <Progress colorScheme='orange' height='32px' value={80} />

<StatGroup>
  <Stat>
    <StatLabel></StatLabel>
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
  <Progress colorScheme='orange' height='32px' value={20} />

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
  <Progress colorScheme = 'orange' height='32px' value={20} />

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
    </div>
  );
}
