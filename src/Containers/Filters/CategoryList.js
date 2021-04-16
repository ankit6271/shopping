function CategoryList(props) {
  return (
    <li>
      <input
        type="Checkbox"
        name="category"
        id={`Category${props.id}`}
        onClick={() => {
          props.onClick(props.productValue);
        }}
      />
      <label htmlFor={`Category${props.id}`} id="radioElement0">
        {props.productValue}
      </label>
    </li>
  );
}

export default CategoryList;
