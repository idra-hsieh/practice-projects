// single selection
// multiple selection

import { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div key={index} className="item">
                            <div className="title" onClick={() => setSelected(index)}>
                                <h3>{dataItem.question}</h3>
                                <span>{selected === index ? "–" : "+"}</span>
                            </div>
                            {selected === index && (
                                <div className="content">
                                    <p>{dataItem.answer}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found.</div>
                )}
            </div>
        </div>
    );
}