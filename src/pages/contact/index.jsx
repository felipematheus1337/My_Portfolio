import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/felipe-matheus-34232b162/" 
        />

        <ItemContact 
          IconFa={FaGithub} 
          LinkContact="https://github.com/felipematheus1337" 
        />
       
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/felipematheusdev/" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="lipehbr@gmail.com" 
        />
      </Content>
    </Container>
  )
}