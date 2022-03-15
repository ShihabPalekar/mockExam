type Props = {
    navigate: any;
    result: any
}
const Result : React.FC<Props> = ({...props}) => {
    console.log(props.result)
    return(
        <div className="result">
            Result
        </div>
    )
}

export default Result