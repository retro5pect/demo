import { info } from "daisyui/src/colors";
import Image from "next/image";
import { Progress, Badge, Stat, StatGroup, StatLabel, StatNumber, StatHelpText, StatArrow, CircularProgress} from '@chakra-ui/react'

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
<CircularProgress valueText={"S"} value={30} size='120px' /> <span className="text-3xl"> 3학년 2반 진도율 </span>

<div className="my-30 mx-30"> 
  <hr />
  <br></br>
  <span className="text-3xl"> 3학년 2반 18번 김민겸 </span>
  <Badge colorScheme='green' mx = {1}>수학 마스터</Badge>
  <Badge colorScheme='purple' mx = {1}>영어 그랜드마스터</Badge>
  <Badge colorScheme='red' mx = {1}>멋난이</Badge>
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

<div className="my-30 mx-30">
  <hr></hr>
  <br></br>
  <span className="text-3xl"> 1단원. 우리나라의 다양한 하천 </span>
  <Badge colorScheme='blue' mx = {1}>지구과학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>
  <Progress colorScheme='green' height='32px' value={20} />

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
  </div>


<div className="my-30 mx-30"> 
  <span className="text-3xl"> 2단원. 일반 상대성 이론 </span>
  <Badge colorScheme='blue' mx = {1}>물리학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>
  <Progress colorScheme='green' height='32px' value={20} />
</div>

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


<div className="my-30 mx-30"> 
  <span className="text-3xl"> 3단원. 시스템 아키텍처(x64) </span>
  <Badge colorScheme='blue' mx = {1}>컴퓨터공학</Badge>
  <Badge colorScheme='gray' mx = {1}>고등학교</Badge>
  <Progress colorScheme='green' height='32px' value={20} />
</div>

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
  );
}
