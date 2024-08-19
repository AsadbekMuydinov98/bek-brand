const ColorFilters = ({ colors, selectedColors, onColorChange }) => {
  return (
    <div className="color-filters">
      <h3>Colors</h3>
      {colors.map((color) => (
        <span
          key={color.value}
          className={`color-circle ${selectedColors.includes(color.value) ? 'selected' : ''}`}
          style={{ background: color.label.toLowerCase() }}
          onClick={() => onColorChange(color.value, !selectedColors.includes(color.value))}
        />
      ))}
    </div>
  );
};

export default ColorFilters;
