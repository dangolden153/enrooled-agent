import Link from 'next/link'

const CitySelect = () => {

    const data = [
        { name: 'Apo Ae', link: '/' },
        { name: 'Arcata', link: '/' },
        { name: 'Arpin', link: '/' },
        { name: 'Bainbridge Island', link: '/' },
        { name: 'Barnet', link: '/' },
        { name: 'Bayport', link: '/' },
        { name: 'Bogart', link: '/' },
        { name: 'Bozeman', link: '/' },
        { name: 'Burr Ridge', link: '/' },
        { name: 'Castle Hayne', link: '/' },
        { name: 'Castlewood', link: '/' },
        { name: 'Church Road', link: '/' },
        { name: 'City Of Industry', link: '/' },
        { name: 'Coffeyville', link: '/' },
        { name: 'Cupertino', link: '/' },
        { name: 'Diamond Springs', link: '/' },
        { name: 'El Reno', link: '/' },
        { name: 'Fairchance', link: '/' },
        { name: 'Fall Creek', link: '/' },
        { name: 'Farmerville', link: '/' },
        { name: 'Fayville', link: '/' },
        { name: 'Folcroft', link: '/' },
        { name: 'Georgetown', link: '/' },
        { name: 'Goldsboro', link: '/' },
        { name: 'Harleysville', link: '/' },
        { name: 'Hernando Beach', link: '/' },
        { name: 'Holsville', link: '/' },
        { name: 'Huffman', link: '/' },
        { name: 'Ketchum', link: '/' },
        { name: 'Kings Point', link: '/' },
        { name: 'La Mirada', link: '/' },
        { name: 'Los Fresnos', link: '/' },
        { name: 'Macclenny', link: '/' },
        { name: 'Maddison Heights', link: '/' },
        { name: 'Maple Shade', link: '/' },
        { name: 'McKenney', link: '/' },
        { name: 'Minerva', link: '/' },
        { name: 'Monte Sereno', link: '/' },
        { name: 'Morrilton', link: '/' },
        { name: 'Mulvane', link: '/' },
        { name: 'Neosho', link: '/' },
        { name: 'New Kent', link: '/' },
        { name: 'North Hills', link: '/' },
        { name: 'Nowata', link: '/' },
        { name: 'Old Forge', link: '/' },
        { name: 'Palm Bay', link: '/' },
        { name: 'Patriot', link: '/' },
        { name: 'Pell City', link: '/' },
        { name: 'Penfield', link: '/' },
        { name: 'Reedsport', link: '/' },
        { name: 'Rexford', link: '/' },
        { name: 'Rhoadesville', link: '/' },
        { name: 'Ripon', link: '/' },
        { name: 'Robesonia', link: '/' },
        { name: 'Saddle River', link: '/' },
        { name: 'Scipio', link: '/' },
        { name: 'Simpson', link: '/' },
        { name: 'Skowhegan', link: '/' },
        { name: 'Stagecoach', link: '/' },
        { name: 'Sugar Grove', link: '/' },
        { name: 'Trempealeau', link: '/' },
        { name: 'Waxahachie', link: '/' },
        { name: 'Winnebago', link: '/' },
        { name: 'York Harbor', link: '/' }
    ]

    return (
        <select class="form-select form-select-lg" aria-label="Default select example">
            <option selected disable>Open this select menu</option>
            {data.map((city, index) => (
                <Link href={city.link}>
                    <option className='select-option' key={index} value={city.name}>
                        {city.name}
                    </option>
                </Link>
            ))}
        </select>
    )
}

export default CitySelect