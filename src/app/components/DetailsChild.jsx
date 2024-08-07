import style from "../page.module.css"
const ContentChild = ({ state }) => {
  console.log(state)
  return (
    <div >
            {state? (
        <div id="Content_Dowanload"
          className='contentMapChild'
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: "center",
            background: state.backgroundGradient
          }}
        >
          <h4 className='contenth2'>{state.title}</h4>
          <p className='contentp'>{state.description}</p>
          <img className='contentimg' src={state.image} alt={state.title} width="300" />
          </div>
      ) : "....Loading"}
        </div>
    )
}
export default ContentChild;