function GenderList(props) {
  return (
    <li>
      <input
        type="radio"
        name="gender"
        id={`Gender${props.id}`}
        onClick={() => {
          props.onClick(props.productValue);
        }}
      />
      <label htmlFor={`Gender${props.id}`} id="radioElement0">
        {props.productValue}
      </label>
    </li>
  );
}

export default GenderList;
