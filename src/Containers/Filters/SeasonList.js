function SeasonList(props) {
  return (
    <li>
      <input
        type="Checkbox"
        name="season"
        id={`Season${props.id}`}
        onClick={() => {
          props.onClick(props.productValue);
        }}
      />
      <label htmlFor={`Season${props.id}`} id="radioElement0">
        {props.productValue}
      </label>
    </li>
  );
}

export default SeasonList;
