export default function ContadorDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#fff",
            fontSize: "1.6rem",
            fontWeight: "bold",
            margin: "10px",
            borderRight: "1px",
            borderColor: "#45c0ae",

        }} className="numbers">
            {props.numero}
        </div>
    )
}