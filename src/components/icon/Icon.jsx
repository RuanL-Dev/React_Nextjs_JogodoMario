function Icon ({ iconName, type, width, height, link }) {
  return (
    <a href={link} target="_blank" >
      <img src={`/image/${iconName}.${type}`} width={width} height={height} />
    </a>
  )
}


export default Icon