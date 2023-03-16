import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Loading'

function SingleCocktail() {
    const {id} = useParams()
    const [loading,setloading] = useState(true);
    const [details,setDetails] = useState(null);
    

    useEffect(()=>{
      async function fectApi(){
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
          const data = await response.json()
          console.log(data);
          if(data.drinks){
              const {idDrink:id,
                strAlcoholic:info,
                strCategory:cata,
                strDrinkThumb:img,
                strGlass:glass,
                strDrink:name,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
              }=data.drinks[0]
              const ingredient = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
              let newDetails={id,info,name,cata,img,ingredient,glass}
              setDetails(newDetails)
            }
            else{
              setDetails(null);
            }
            setloading(false)
          }
        catch (error) {
          console.log(error)
          setloading(false);
        }
      }
      fectApi()
    },[id])
    if(loading){
      return <Loading/>
    }
    if(!details){
      return <h2 className='section-title'>no cocktail to display</h2>
    }else{
      const {
        id,info,name,cata,img,ingredient,glass
      } = details
      console.log('details'+details)
      return (
        <section className=' cocktail-section'>
          <Link to='/' className='btn btn-primary'>
            back home
          </Link>
          <h2 className='section-title'>{name}</h2>
          <div className='drink'>
            <img src={img} alt={name}></img>
            <div className='drink-info'>
              <p>
                <span className='drink-data'>name :</span> {name}
              </p>
              <p>
                <span className='drink-data'>category :</span> {cata}
              </p>
              <p>
                <span className='drink-data'>info :</span> {info}
              </p>
              <p>
                <span className='drink-data'>glass :</span> {glass}
              </p>
              <p>
                <span className='drink-data'>ingredients :</span>
                {ingredient.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null
                })}
              </p>
            </div>
          </div>
        </section>
      )
    }
  
  
}

export default SingleCocktail
