import { reverse } from '../helpers'

const NameReversed = ({ name }) => {
    return (
    <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
    </p>
    )
}

export default NameReversed