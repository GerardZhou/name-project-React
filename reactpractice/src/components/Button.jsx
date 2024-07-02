function Button() {
  function handClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={handClick}>You have a message!</button>
    </div>
  );
}
export default Button;
