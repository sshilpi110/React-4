function Avatar(props){
    const {src,name,rounded}=props

    const styles={
        borderRadius:"16px",
        marginTop:"20px"
    }

    if(rounded){
        styles.borderRadius="50%"
    }
    return(
        <div>
      

      <img
      src={src} alt="avatar-icon" width="200px"
      style={styles}
      
      />

   <h1>{name}</h1>
        </div>
    )
}

export default Avatar;