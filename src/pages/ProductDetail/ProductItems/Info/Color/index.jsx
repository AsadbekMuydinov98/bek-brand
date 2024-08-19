import { Radio } from "antd"

const Color = ({color, setColor}) => {
  const colors = [
    { value: 'blue', backgroundColor: 'blue' },
    { value: 'red', backgroundColor: 'red' },
    { value: 'yellow', backgroundColor: 'yellow' },
    { value: 'black', backgroundColor: 'black' },
  ];
  return (
    <div className="color-selector">
      <span>Select Color: </span>
      <Radio.Group value={color} onChange={e => setColor(e.target.value)}>
        {colors.map(c => (
          <Radio.Button
            key={c.value}
            value={c.value}
            style={{ backgroundColor: c.backgroundColor }}
          />
        ))}
      </Radio.Group>
    </div>
  )
}

export default Color
