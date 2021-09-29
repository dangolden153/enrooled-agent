import React from 'react'

const CardList = ({ children }) => {

    let groupBy3 = (data) => {
        let result = []
        for (let i = 0; i < data.length; i += 3) result.push(data.slice(i, i + 3))
        return result
    }

    const childGroups = groupBy3(children)

    return (
        <>
            {
                childGroups.map(( group, index) => (
                    <div key={index} className="card-list d-flex flex-column flex-lg-row w-100 align-items-center justify-content-center">
                        {group.map((item, index) => (
                            <div key={index} className="d-flex col-lg-4 justify-content-center align-items-center">
                                {item}
                            </div>
                        )
                        )}
                    </div>
                ))
            }
        </>
    )
}

export default CardList
