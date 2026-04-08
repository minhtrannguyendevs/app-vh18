
function Avatar(props) {
  const { name, gender, image } = props;
  return (
    <>
      <h2>Hello,{gender ? 'Anh' : 'Chi'}{name}!</h2>
      <img src={image} width={120} height={100} alt={name} />
    </>

  );
}

export default Avatar;