import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HelloWorld from './HelloWorld.jsx'
import Parent from './Parent.jsx'
import FrutaItem from './FrutaItem.jsx'
import api from './Api.jsx'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

function App() {

  const [nomeDesejado, setnomeDesejado] = useState("");

  const [data, setData] = useState(null);

  // useEffect(()=>{
  //   const loadData = async () => {
  //     const response = await api.getCep(nomeDesejado)
  //     setData(response);
  //   }

  //   loadData();
  // }, [nomeDesejado]);

  const loadData = async () => {
    const response = await api.getCep(nomeDesejado)
    setData(response);
  }
  function buscar() {
    event.preventDefault();
    loadData();
  }

  const cesto_de_frutas = [
    {
      nome : "Banana",
      qtd : 12
    },
    {
      nome : "Maçã",
      qtd : 5
    },
    {
      nome : "Maçã",
      qtd : 5
    },
    {
      nome : "Maçã",
      qtd : 5
    },
  ];

  return (
    <div>
      <HelloWorld nome="Daniel" idade="21" email="danielbiesek@gmail.com"/>

      <Parent>
        <HelloWorld nome="Filho" idade="3" />
        <h2>Meu título h2</h2>
      </Parent>

      {
        cesto_de_frutas.map( (fruta, id) => {
          
          return(
            <FrutaItem nome={fruta.nome} qtd={fruta.qtd} key={id}
            className="fruta"
            />
          )
          }
        )
      }
      <br></br>
      <input onChange={ (e) => {setnomeDesejado(e.target.value)}} />
      <Button onClick={buscar} variant="outlined">Carregar</Button>
      <p>{nomeDesejado}</p>
      <br/>
      {/* {data ? <p>{data.logradouro}</p> : null} */}
      {data ? <Card>
        <CardMedia>
        sx={{ height: 140 }}
        image="contemplative-reptile.jpg"
        title="green iguana"
        </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>s
      </Card> : null}
      


    </div>    
  )
}

export default App
