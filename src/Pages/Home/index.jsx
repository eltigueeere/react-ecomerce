import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/index'
import Card from '../../Components/Card/index'

function Home() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Este es el Home
      {
        items?.map(item => (
          <Card key={items.id} data={item} />
        ))
      }
    </Layout>
  )
}
export default Home
