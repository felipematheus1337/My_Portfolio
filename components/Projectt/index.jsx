import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style'
import Link from 'next/link'
export default function Projectt() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/felipematheus1337/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        var data = await res.json()
        setItemsApi(data)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <Created_at>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
            <h5>Acessar:</h5> <Link key={item.id} href={item.url}>{item.name}</Link>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}