const Header = (props) => {
console.log('props-->', props)
    return <h2>HI, My name is {props.name} and my age is {props.age}</h2>;
}

export default Header;