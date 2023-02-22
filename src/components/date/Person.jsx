

export function Person(props) {
    const {title, name, images, links} = props

    return <div>
        <img src={`${images[0]}?w=164&h=164&fit=crop&auto=format`} alt={title}/>
        <img src={`${images[1]}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`} alt={title}/>
        <img src={`${images[2]}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`} alt={title}/>
        <img src={`${images[3]}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`} alt={title}/>
        {/*{images.map((image, index) => {*/}
        {/*    return <Img key={index} {...image} alt={title}/>*/}
        {/*})}*/}
        <h1>{title}</h1>
        <a href={links[0]}>{name}</a>
        <a href={links[1]}>{title}</a>
        <p>{name}</p>
        <p>{title}</p>
    </div>
}