import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { Button, ButtonGroup, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader, DrawerFooter, Input } from '@chakra-ui/react'

export default function Home() {

  function IndexDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <div>
      <Head>
        <title>익스퀴즈미 : 실시간 퀴즈 플랫폼</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
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

        <h1 className={styles.title}>
          <a className="no-underline">익스퀴즈미 : 실시간 퀴즈 플랫폼</a>
        </h1>

        <p className={styles.description}>초대 코드를 입력하여 입장해보세요!</p>
        <span>
        <HStack>
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </HStack>
        </span>

    <Link href ="/part">
        <Button mb={10} mt={10} colorScheme='blue' variant='outline'>
    입장하기
  </Button>
  </Link>


        <div className={styles.grid}>
          <Link href="/teach">
            <a className={styles.card}>
              <h2 className="text-center">수업하기</h2>
              <p>학생들을 초대하여 새로운 수업 경험을 즐겨보세요</p>
            </a>
          </Link>

          <Link href="/create">
            <a className={styles.card}>
              <h2 className="text-center">출제하기</h2>
              <p>다양한 문제들을 제작하여 퀴즈로 배포해보세요</p>
            </a>
          </Link>

          <Link href="/feedback">
            <a className={styles.card}>
              <h2 className="text-center">평가하기</h2>
              <p>학생 개인의 맞춤화된 지표를 통해 성취도를 설정해보세요 </p>
            </a>
          </Link>

          <Link href="/search">
            <a className={styles.card}>
              <h2 className="text-center">검색하기</h2>
              <p>다른 사람이 만든 검증된 문제들을 탐색하고 적용해보세요</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="https://github.com/AimHigher77" target="_blank">
          <a>Copyright © 2022 exquiz.me All rights reserved. | Team MUMOMU.</a>
        </Link>
      </footer>
    </div>
  );
}
