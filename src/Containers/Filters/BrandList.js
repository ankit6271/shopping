function BrandList(props) {
  return (
    <li>
      <input
        type="Checkbox"
        name="brand"
        id={`Brand${props.id}`}
        onClick={() => {
          props.onClick(props.productValue);
        }}
      />
      <label htmlFor={`Brand${props.id}`} id="radioElement0">
        {props.productValue}
      </label>
    </li>
  );
}

export default BrandList;
