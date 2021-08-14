export default function ColorSlider({colorName, value, updateColor}) {
    return (
        <div>
            <span>{colorName}</span>
            <input 
            className="slider"
            type="range"
            min="0"
            max="225"
            value={value}
            onChange={(event) => updateColor(colorName, event.target.value)}
            />
            <span>{value}</span>
        </div>
    )

}

