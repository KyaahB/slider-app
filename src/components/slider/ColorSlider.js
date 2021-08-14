export default function ColorSlider({colorName, value, updateColors}) {
    return (
        <div>
            <span>{colorName}</span>
            <input 
            className="slider"
            type="range"
            min="0"
            max="225"
            value={value}
            onChange={(event) => updateColors(colorName, event.target.value)}
            />
            <span>{value}</span>
        </div>
    )

}

