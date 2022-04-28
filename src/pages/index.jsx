import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img, Icones } from '../../styles/indexStyle'
import Link from 'next/link';


export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Felipe Matheus</Name>
        <Function>FullStack Developer</Function>
        <Intro>Atualmente no 6° período do curso de Ciência da computação, 
          da Universidade Veiga de Almeida. Tenho experiência em desenvolvimento Web
          com as seguintes <Link href="stacks">stacks</Link>
        </Intro>
       
      
        
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/400.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}