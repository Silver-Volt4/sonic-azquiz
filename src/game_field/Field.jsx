import "./Field.css";

function sum_rings(rings) {
    let result = 1;
    for(let i = 0; i < rings; i++) {
        result += i;
    }
    return result;
}

function Ring({ number }) {
    return (
        <button className="ring">
            {number}
        </button>
    )
}

function Row({ rings }) {
    let children = [];
    for (let i = 0; i < rings; i++) {
        children.push(<Ring key={i} number={sum_rings(rings) + i}/>);
    };

    return (
        <div className="row" style={{ "--n": rings - 1 }}>
            {children}
        </div>
    )
}

function Field({ rows }) {
    let children = [];
    for (let i = 0; i < rows; i++) {
        children.push(<Row key={i} rings={i + 1} />);
    };

    return (
        <div className="field" style={{ "--rows": rows - 1 }}>
            {children}
        </div>
    )
}

export default Field
